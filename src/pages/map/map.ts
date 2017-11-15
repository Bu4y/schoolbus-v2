import { LocationPage } from './../location/location';
import { SelectlocationPage } from './../selectlocation/selectlocation';
import { FeedPage } from './../feed/feed';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  myLong: number;
  myLat: number;
  map: GoogleMap;
  mapElement: HTMLElement;
  // options: GeolocationOptions
  // currentPos: Geoposition;

  // @ViewChild('map') mapElement: ElementRef;
  // map: any;
  // myLat;
  // myLong;
  // xxx;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private googleMaps: GoogleMaps,
    private nativeGeocoder: NativeGeocoder
  ) {
  }
  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.mapElement = document.getElementById('map');

      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: resp.coords.latitude,
            lng: resp.coords.longitude
          },
          zoom: 18,
          tilt: 30
        }
      };

      // this.map = this.googleMaps.create(this.mapElement, mapOptions);
      this.map = new GoogleMap(this.mapElement, mapOptions);

      // Wait the MAP_READY before using any methods.
      this.map.one(GoogleMapsEvent.MAP_READY)
        .then(() => {
          console.log('Map is ready!');

          // Now you can use all methods safely.
          this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
            .then((result: NativeGeocoderReverseResult) => {
              let placename = result.subThoroughfare
                + ' ' + result.locality
                + ' ' + result.subAdministrativeArea
                + ' ' + result.administrativeArea
                + ' ' + result.postalCode;
                
              this.map.addMarker({
                title: placename,
                icon: 'red',
                animation: 'DROP',
                position: {
                  lat: resp.coords.latitude,
                  lng: resp.coords.longitude
                }
              })
                .then(marker => {
                  marker.on(GoogleMapsEvent.MARKER_CLICK)
                    .subscribe(() => {
                      alert('clicked');
                    });
                });
            })
            .catch((error: any) => console.log(error));



        });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
