import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { FeedServiceProvider } from './feed.service';
import { FeedModel } from './feed.model';

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
  datafeed: Array<FeedModel> = new Array<FeedModel>();

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider,
    public app: App,
    public feedServiceProvider: FeedServiceProvider
  ) {
    // this.auth.private().subscribe((data) => {
    //   this.data = data.message
    // })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.feedServiceProvider.getfeed()
      .then((data) => {
        this.datafeed = data;
        console.log(data);
      }).catch((err) => {
        console.error(err);
      });
  }

  logout() {
    this.auth.logout();
    this.app.getRootNav().setRoot(LoginPage);

  }

}
