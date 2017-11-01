import { TabNavPage } from './../tab-nav/tab-nav';
import { MapPage } from './../map/map';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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
  confirm() {
    let alert = this.alertCtrl.create({
      title: 'School Bus',
      subTitle: 'ขอบคุณสำหรับข้อมูล บริษัทได้รับข้อมูลของท่านเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับเพื่อแจ้งรายละเอียดการใช้บริการรถโรงเรียน',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(TabNavPage);
  }
  
}

