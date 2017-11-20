import { LocationPage } from './../location/location';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public orderService: OrderserviceProvider
  ) {
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
  delete(id){
    this.orderService.deleteOrder(id).then((data)=>{
      this.loadOrder();
    },(err)=>{
      console.log(err);
    });
  }
}
