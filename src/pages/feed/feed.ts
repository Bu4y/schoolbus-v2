import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController } from 'ionic-angular';
import { FeedServiceProvider } from './feed.service';
import { FeedModel } from './feed.model';
import { CommentPage } from '../comment/comment';

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
    public feedServiceProvider: FeedServiceProvider,
    public modalCtrl: ModalController
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

  updatelike(data) {
    let user = JSON.parse(window.localStorage.getItem('schollbus_user'));
    let isLike = true;
    for (let i = 0; i < data.islike.length; i++) {
      if (data.islike[i].user === user._id) {
        isLike = false;
        data.islike.splice(i, 1);
      }
    }
    
    if (isLike) {
      data.islike.push({
        user: JSON.parse(window.localStorage.getItem('schollbus_user')),
        created: new Date().toISOString()
      });
    }
    this.feedServiceProvider.updateLike(data).then((resp) => {
      console.log(resp);
      this.ionViewDidLoad();
    }, (err) => {
      console.error(err);
    });

    console.log(data);
  }
  comment() {
    this.navCtrl.push(CommentPage);
  }

}
