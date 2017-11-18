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
  order : LocationModel = new LocationModel();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddchildPage');
  }
  gotoLocation(){
    window.localStorage.setItem('childname', this.order.name);
    window.localStorage.setItem('childimage', this.order.image);
    this.navCtrl.push(LocationPage,{
      daya : this.order
    });
  }

}
