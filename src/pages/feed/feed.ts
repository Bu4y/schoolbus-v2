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
  likeChk: boolean = false;
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
  ionViewWillEnter() {
    let user = JSON.parse(window.localStorage.getItem('schollbus_user'));
    this.feedServiceProvider.getfeed()
      .then((data) => {
        this.datafeed = data;
        data.forEach(itmIslike => {
          itmIslike.islike.forEach(itm => {
            if (itm.user === user._id) {
              this.likeChk = true;
            } else {
              this.likeChk = false;
            }
          });
        });
        console.log(this.datafeed);
      }).catch((err) => {
        console.error(err);
      });
  }

  logout() {
    this.auth.logout();
    window.localStorage.removeItem('schollbus_user');
    let user = JSON.parse(window.localStorage.getItem('schollbus_user'));
    this.app.getRootNav().setRoot(LoginPage);

  }

  updatelike(data) {
    let user = JSON.parse(window.localStorage.getItem('schollbus_user'));
    let isLike = true;
    this.likeChk = isLike;
    // console.log(this.likeChk);
    for (let i = 0; i < data.islike.length; i++) {
      if (data.islike[i].user === user._id) {
        isLike = false;
        this.likeChk = isLike;
        // console.log(this.likeChk);
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
      this.ionViewWillEnter();
    }, (err) => {
      console.error(err);
    });

    console.log(data);
  }
  comment(feedId) {
    this.navCtrl.push(CommentPage, feedId);
  }

}
