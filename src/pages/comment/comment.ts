import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    comment: ''
  }
  dataComment: FeedModel = new FeedModel;
  feedId: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public feedServiceProvider: FeedServiceProvider
  ) {
    this.feedId = this.navParams.data;
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CommentPage');
  // }
  ionViewWillEnter() {
    this.feedServiceProvider.getfeedId(this.feedId)
      .then((data) => {
        console.log(data);
        this.dataComment = data;
      }).catch((err) => {
        console.error(err);
      });
  }

  createComment(data) {
    if (data.comment != '') {
      // console.log(data.comment);
      this.feedServiceProvider.commentFeed(this.feedId, data).then((res) => {
        // this.dataComment = res;
        // console.log(this.dataComment);
        data.comment = '';
        this.ionViewWillEnter();
      }, (err) => {
        console.error(err);
      });
    }
  }

}
