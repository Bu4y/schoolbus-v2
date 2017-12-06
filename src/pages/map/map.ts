import { LocationPage } from './../location/location';
import { SelectlocationPage } from './../selectlocation/selectlocation';
import { FeedPage } from './../feed/feed';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, AlertController, LoadingController } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare let google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  autocompleteItems;
  autocomplete;
  isMapSelected: boolean = true;
  latitude: number = 0;
  longitude: number = 0;
  geo: any
  address;
  map: any;
  lat: any;
  lng: any;
  isMap: boolean = true;
  type: string;
  item: string;

  service = new google.maps.places.AutocompleteService();
  constructor(
    public viewCtrl: ViewController,
    private zone: NgZone,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private googleMaps: GoogleMaps,
    public geolocation: Geolocation,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    private nativeGeocoder: NativeGeocoder
  ) {
    this.type = this.navParams.data;
    this.autocompleteItems = [];
    this.autocomplete = {
      query: ''
    };
    this.address = {
      place: ''
    };
    this.map = GoogleMap;
  }
  ionViewWillEnter() {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;
      this.latitude = this.lat;
      this.longitude = this.lng;
      this.nativeGeocoder.reverseGeocode(this.lat, this.lng)
        .then((result: NativeGeocoderReverseResult) => {
          // alert(JSON.stringify(result))
          this.item = result.subThoroughfare + ' ' + result.thoroughfare + ' ' + result.locality + ' ' + result.subAdministrativeArea + ' ' + result.administrativeArea + ' ' + result.postalCode;
          loading.dismiss();
          this.getmap();
        })
        .catch((error: any) => console.log(error));
    }).catch((error) => {
      console.log('Error getting location', error);
      loading.dismiss();
    });
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }

  chooseItem(item: any) {
    this.geo = item;
    this.autocomplete.query = item;
    this.isMapSelected = false;
    this.geoCode(this.geo, item);//convert Address to lat and long
  }

  updateSearch() {
    this.isMapSelected = true;
    if (this.autocomplete.query == '') {
      this.autocompleteItems = [];
      return;
    }
    let me = this;
    this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: 'TH' } }, function (predictions, status) {
      me.autocompleteItems = [];
      me.zone.run(function () {
        predictions.forEach(function (prediction) {
          me.autocompleteItems.push(prediction.description);
        });
      });
    });
  }

  //convert Address string to lat and long
  geoCode(address: any, item) {
    let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address': address }, (results, status) => {
      this.latitude = results[0].geometry.location.lat();
      this.longitude = results[0].geometry.location.lng();
      this.lat = this.latitude;
      this.lng = this.longitude;
      // alert("lat: " + this.latitude + ", long: " + this.longitude);
      this.item = item;
      this.getmap();

    });
  }
  getmap() {
    if (!this.isMap) {
      this.map.empty('map_canvas');
      this.map = GoogleMap;
    }
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = this.googleMaps.create('map_canvas', mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');
        this.map.addMarker({
          title: this.item,
          icon: 'blue',
          animation: 'DROP',
          draggable: true,
          position: {
            lat: this.lat,
            lng: this.lng
          }
        })
          .then(marker => {
            marker.showInfoWindow();
            this.isMap = false;
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                this.showPrompt();
              });
            marker.on(GoogleMapsEvent.MARKER_DRAG_END).subscribe((e) => {
              alert(JSON.stringify(e));
            })
          });

      });
  }
  showPrompt() {
    let data = { item: this.item , lat: this.latitude, long: this.longitude, tel: '', contact: '' };
    let resultsData = window.localStorage.getItem('order') ? JSON.parse(window.localStorage.getItem('order')) : {};
    if (this.type === 'sender') {
      // loading.present();
      resultsData.route.send = data;
      window.localStorage.setItem('order', JSON.stringify(resultsData));
    }
    if (this.type === 'receiver') {
      // loading.present();
      resultsData.route.reception = data;
      window.localStorage.setItem('order', JSON.stringify(resultsData));
    }
    if (this.type === 'school') {
      // loading.present();
      resultsData.route.school = data;
      window.localStorage.setItem('order', JSON.stringify(resultsData));
    }
    // setTimeout(() => {
    this.navCtrl.pop();
  }

  // showPrompt() {
  //   // let loading = this.loadingCtrl.create();
  //   let prompt = this.alertCtrl.create({
  //     title: 'Information',
  //     inputs: [
  //       {
  //         name: 'place',
  //         value: this.item
  //       },
  //       {
  //         name: 'name',
  //         placeholder: 'Name'
  //       },
  //       {
  //         name: 'tel',
  //         placeholder: 'Tel'
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         cssClass: 'btnCn',
  //         handler: data => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Save',
  //         cssClass: 'btnSv',
  //         handler: res => {
  //           console.log('Saved clicked');

  //           let data = { item: res.place, lat: this.latitude, long: this.longitude, tel: res.tel, contact: res.name };
  //           let resultsData = window.localStorage.getItem('order') ? JSON.parse(window.localStorage.getItem('order')) : {};
  //           if (this.type === 'sender') {
  //             // loading.present();
  //             resultsData.route.send = data;
  //             window.localStorage.setItem('order', JSON.stringify(resultsData));
  //           }
  //           if (this.type === 'receiver') {
  //             // loading.present();
  //             resultsData.route.reception = data;
  //             window.localStorage.setItem('order', JSON.stringify(resultsData));
  //           }
  //           if (this.type === 'school') {
  //             // loading.present();
  //             resultsData.route.school = data;
  //             window.localStorage.setItem('order', JSON.stringify(resultsData));
  //           }
  //           // setTimeout(() => {
  //           this.navCtrl.pop();
  //           // loading.dismiss();
  //           // }, 3000);
  //         }
  //       }
  //     ]
  //   });
  //   prompt.present();
  // }

}
