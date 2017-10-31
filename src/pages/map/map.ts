import { LocationPage } from './../location/location';
import { SelectlocationPage } from './../selectlocation/selectlocation';
import { FeedPage } from './../feed/feed';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  options: GeolocationOptions
  currentPos: Geoposition;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  myLat;
  myLong;
  xxx;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation
  ) {
  }
  ionViewDidEnter() {
    this.getUserPosition();
  }

  getMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let xxx = {
        latitude: resp.coords.latitude,
        longitude: resp.coords.longitude,
        // altitude: resp.coords.altitude,
        // accuracy: resp.coords.accuracy,
        // altitudeAccuracy: resp.coords.altitudeAccuracy,
        // heading: resp.coords.heading,
        // speed: resp.coords.speed,
        timestamp: resp.timestamp
      }
      
      this.myLat = resp.coords.latitude;
      this.myLong = resp.coords.longitude;
      // console.log(JSON.stringify(this.myLat));
      // console.log(JSON.stringify(this.myLong));
      this.navCtrl.setRoot(LocationPage, xxx);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getUserPosition() {
    this.options = {
      enableHighAccuracy: false
    }
    this.geolocation.getCurrentPosition(this.options).then((pos: Geoposition) => {

      this.currentPos = pos;
      console.log('lat' + pos.coords.latitude);
      console.log('long' + pos.coords.longitude);

      this.addMap(pos.coords.latitude, pos.coords.longitude);
    }, (err: PositionError) => {
      console.log("error : " + err.message);
      ;
    })
  }

  addMap(lat, long) {

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // console.log(this.map);
    this.addMarker();

  }
  addMarker() {

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    let content = "<p>This is your current position !</p>";
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, 'click', () => {
      // this.navCtrl.push(SelectlocationPage);
      infoWindow.open(this.map, marker);
      this.getMap();
      this.navCtrl.pop();

    });
  }

}
