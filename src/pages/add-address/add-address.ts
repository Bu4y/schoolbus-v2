import { LocationPage } from './../location/location';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { ProfilePage } from './../profile/profile';
import { AddchildPage } from '../addchild/addchild';
import { OrderserviceProvider } from '../../providers/orderservice/orderservice';
import { OrderListModel } from '../location/location.model';

/**
 * Generated class for the AddAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-address',
  templateUrl: 'add-address.html',
})
export class AddAddressPage {
  orders: Array<OrderListModel> = [];
  user: any = {};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public orderService: OrderserviceProvider
  ) {
    this.user = window.localStorage.getItem('schollbus_user') ? JSON.parse(window.localStorage.getItem('schollbus_user')) : {};
  console.log(this.user);
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad AddAddressPage');
    this.loadOrder();
  }
  loadOrder() {
    this.orderService.getOrderList().then((data) => {
      this.orders = data;
    }, (err) => {
      console.log(err);
    });
  }
  toProfile() {
    this.navCtrl.push(ProfilePage);
  }
  selectLocation() {
    this.navCtrl.setRoot(AddchildPage);
  }
  
  presentConfirm(id) {
    const alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Do you want to delete this Address?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('delete');
            this.delete(id);
          }
        }
      ]
    });
    alert.present();
  }
  delete(id) {
    this.orderService.deleteOrder(id).then((data) => {
      this.loadOrder();
    }, (err) => {
      console.log(err);
    });
  }
}
