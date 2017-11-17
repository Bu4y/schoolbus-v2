import { LocationModel } from './location.model';
import { OrderserviceProvider } from './../../providers/orderservice/orderservice';
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
  order: LocationModel = new LocationModel();
  // dataOrder: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public orderService: OrderserviceProvider
  ) {

    if (this.navParams.get('daya')) {
      this.order = this.navParams.get('daya');
    }
    // this.order.route = this.order.route ? this.order.route : {};
    this.order.route.reception.item = this.order.route.reception.item ? this.order.route.reception.item : '';
    this.order.route.school.item = this.order.route.school.item ? this.order.route.school.item : '';
    this.order.route.send.item = this.order.route.send.item ? this.order.route.send.item : '';

    // this.map = this.navParams.data;
    // console.log(this.map);
  }

  ionViewWillEnter() {
    this.order.route = window.localStorage.getItem('school_address_map') ? JSON.parse(window.localStorage.getItem('school_address_map')) : {
      reception: { item: '' },
      school: { item: '' },
      send: { item: '' }
    };
    alert(JSON.stringify(this.order.route));
    console.log('ionViewDidLoad LocationPage');
  }

  goToMap(type) {
    this.navCtrl.push(MapPage, type);
  }
  confirm() {
    let alert = this.alertCtrl.create({
      title: 'School Bus',
      subTitle: 'ขอบคุณสำหรับข้อมูลทางบริษัทฯได้รับข้อมูลของท่านเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับเพื่อแจ้งรายละเอียดการใช้บริการรถโรงเรียน',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(TabNavPage);
  }

  createOrder() {

    console.log(this.order);

    this.orderService.createOrder(this.order).then((resp) => {
      this.navCtrl.setRoot(TabNavPage);
    }, (err) => {
      console.log(err);
    })
  }

}

