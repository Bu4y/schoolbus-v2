import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { FeedServiceProvider } from '../../pages/feed/feed.service';
import { FeedModel } from '../../pages/feed/feed.model';
/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  commentData = {
    user: {},
    comment: ''
  }
  dataComment: FeedModel = new FeedModel;
  feedId: any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public feedServiceProvider: FeedServiceProvider
  ) {
    this.feedId = this.navParams.data;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CommentPage');
  // }
  ionViewWillEnter() {
    // let user = JSON.parse(window.localStorage.getItem('schollbus_user'));
    // console.log(user);
   let loading = this.loadingCtrl.create();
    loading.present();
    this.feedServiceProvider.getfeedId(this.feedId)
      .then((data) => {
        console.log(data);
        this.dataComment = data;
       loading.dismiss();
      }).catch((err) => {
        console.error(err);
        loading.dismiss();
      });
  }

  createComment(data) {
    let loading = this.loadingCtrl.create();
    loading.present();
    let user = JSON.parse(window.localStorage.getItem('schollbus_user'));
    data.user = user;
    console.log(data);
    
    if (data.comment != '') {
      this.feedServiceProvider.commentFeed(this.feedId, data).then((res) => {
        // this.dataComment = res;
        // console.log(this.dataComment);
        data.comment = '';
        loading.dismiss();
        
        this.ionViewWillEnter();
      }, (err) => {
        console.error(err);
        loading.dismiss();
        
      });
    }
  }

}
