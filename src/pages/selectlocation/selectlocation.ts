import { AddAddressPage } from './../add-address/add-address';
import { MapPage } from './../map/map';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

/**
 * Generated class for the SelectlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selectlocation',
  templateUrl: 'selectlocation.html',
})
export class SelectlocationPage {
  @ViewChild('myTabs') tabRef: Tabs;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectlocationPage');
  }
  gotomap() {
    this.navCtrl.push(MapPage);
  }
  next() {
    this.navCtrl.setRoot(AddAddressPage);
  }
}
