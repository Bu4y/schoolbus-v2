import { NotificationPage } from './../notification/notification';
import { AddAddressPage } from './../add-address/add-address';
import { FeedPage } from './../feed/feed';
import { Component, ViewChild } from '@angular/core';
import { Tabs, IonicPage, NavController, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the TabNavPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-nav',
  templateUrl: 'tab-nav.html'
})
export class TabNavPage {
  // data: string;
  @ViewChild('myTabs') tabRef: Tabs;
  feedRoot = FeedPage;
  addAddressRoot = AddAddressPage;
  notificationRoot = NotificationPage;


  constructor(public navCtrl: NavController, public app: App, private auth: AuthProvider) {
    // this.auth.private().subscribe(data => {
    //   this.data = data.message
    //   console.log('token' + this.data);
    // });
  }

  tabAddAddress() {
    // this.navCtrl.push(AddAddressPage);
    // this.navCtrl.setRoot(AddAddressPage);
    // this.app.getRootNav().push(AddAddressPage);
    this.tabRef.select(1);

  }

}
