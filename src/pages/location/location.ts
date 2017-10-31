import { MapPage } from './../map/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {
  map;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.map = this.navParams.data;
    console.log(this.map);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
  goToMap() {
    // alert('sss');
    this.navCtrl.push(MapPage);
  }
}
