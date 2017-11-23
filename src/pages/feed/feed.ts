import { LoginPage } from './../login/login';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController, LoadingController } from 'ionic-angular';
import { FeedServiceProvider } from './feed.service';
import { FeedModel } from './feed.model';
import { CommentPage } from '../comment/comment';
import { SocialSharing } from '@ionic-native/social-sharing';
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
  likeChk: string;
  user: any = {};
  shareImg: string = '';
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private auth: AuthProvider,
    public app: App,
    public loadingCtrl: LoadingController,
    public feedServiceProvider: FeedServiceProvider,
    public modalCtrl: ModalController,
    public socialSharing: SocialSharing
  ) {
    // this.auth.private().subscribe((data) => {
    //   this.data = data.message
    // })


  }
  ionViewWillEnter() {
    let loading = this.loadingCtrl.create();

    loading.present();
    this.user = JSON.parse(window.localStorage.getItem('schollbus_user'));
    this.feedServiceProvider.getfeed()
      .then((data) => {
        this.datafeed = data;
        loading.dismiss();
        data.forEach(itmIslike => {
          itmIslike.islike.forEach(itm => {
            if (itm.user === this.user._id) {
              this.likeChk = itm.user;
              itmIslike.isLike = true;
            } else {
              itmIslike.isLike = false;
              this.likeChk = '';
            }
            console.log(this.likeChk);
          });
        });
        console.log(this.datafeed);

      }).catch((err) => {
        console.error(err);
        loading.dismiss();

      });
  }

  // logout() {
  //   this.auth.logout();
  //   window.localStorage.removeItem('schollbus_user');
  //   let user = JSON.parse(window.localStorage.getItem('schollbus_user'));
  //   this.app.getRootNav().setRoot(LoginPage);

  // }
  sharing(data) {
    data.image.forEach(img => {
      this.shareImg = img;
    });
    this.socialSharing.shareWithOptions({
      message: `${this.shareImg} - ${data.name}`
    }).then(() => {
      console.log('Shared!');
    }).catch((err) => {
      console.log('Oops, something went wrong:', err);
    });
  }
  updatelike(data) {
    let user = JSON.parse(window.localStorage.getItem('schollbus_user'));
    let isLike = true;
    // this.likeChk = isLike;
    // console.log(this.likeChk);
    for (let i = 0; i < data.islike.length; i++) {
      if (data.islike[i].user === user._id) {
        isLike = false;
        // this.likeChk = isLike;
        // console.log(this.likeChk);
        data.islike.splice(i, 1);
        // alert('dis like');
      }
    }

    if (isLike) {
      data.islike.push({
        user: JSON.parse(window.localStorage.getItem('schollbus_user')),
        created: new Date().toISOString()
      });
      // alert('add like');

    }
    this.feedServiceProvider.updateLike(data).then((resp) => {
      console.log(resp);
      // alert('reload');

      this.ionViewWillEnter();
    }, (err) => {
      alert(JSON.parse(err._body).message);

    });
    console.log(data);

  }
  comment(feedId) {
    this.navCtrl.push(CommentPage, feedId);
  }

}
