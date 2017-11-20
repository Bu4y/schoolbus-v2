import { LocationModel } from './../location/location.model';
import { LocationPage } from './../location/location';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddchildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addchild',
  templateUrl: 'addchild.html',
})
export class AddchildPage {
  order: LocationModel = new LocationModel();
  pImages: Array<string> = [];
  resImg: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order = JSON.parse(window.localStorage.getItem('childimage'));
    this.pImages = this.order.image ? [this.order.image] : [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddchildPage');
  }
  resImageEvent(e) {
    this.resImg = e[0] ? e[0] : "";
    // this.resImg = './assets/image/noimage.png';
  }
  gotoLocation() {
    this.order.image = this.resImg;
    window.localStorage.setItem('childname', this.order.name);
    window.localStorage.setItem('childimage', this.order.image);
    this.navCtrl.push(LocationPage, {
      daya: this.order
    });
  }

}
