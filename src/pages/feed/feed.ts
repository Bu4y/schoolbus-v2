import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  // data: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthProvider, public app: App) {
    // this.auth.private().subscribe((data) => {
    //   this.data = data.message
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

  logout() {
    this.auth.logout();
    this.app.getRootNav().setRoot(LoginPage);

  }

}
