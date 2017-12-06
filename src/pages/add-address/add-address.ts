import { LocationPage } from './../location/location';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
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
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public orderService: OrderserviceProvider
  ) {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.user = window.localStorage.getItem('schollbus_user') ? JSON.parse(window.localStorage.getItem('schollbus_user')) : {};
    console.log(this.user);
    loading.dismiss();
  }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create();
    loading.present();
    this.user = window.localStorage.getItem('schollbus_user') ? JSON.parse(window.localStorage.getItem('schollbus_user')) : {};
    console.log(this.user.profileImageURL);
    loading.dismiss();
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
    this.navCtrl.setRoot(LocationPage);
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
    let loading = this.loadingCtrl.create();
    loading.present();
    this.orderService.deleteOrder(id).then((data) => {
      this.loadOrder();
      loading.dismiss();
    }, (err) => {
      console.log(err);
      loading.dismiss();
    });
  }
}
