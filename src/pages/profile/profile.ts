import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { AuthorizeModel } from '../../pages/register/register.model';
import { RegisterServiceProvider } from '../../pages/register/register.service';
import { AuthProvider } from './../../providers/auth/auth';
import { LoginPage } from './../login/login';
import { Dialogs } from '@ionic-native/dialogs';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  dataProfile: AuthorizeModel = new AuthorizeModel;
  pImages: Array<string> = [];
  resImg: string = '';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public authenService: RegisterServiceProvider,
    private auth: AuthProvider,
    private dialogs: Dialogs
  ) {
    this.dataProfile = JSON.parse(window.localStorage.getItem('schollbus_user'));
    this.pImages = this.dataProfile.profileImageURL ? [this.dataProfile.profileImageURL] : [];
    console.log(this.dataProfile);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  logout() {
    this.auth.logout();
    window.localStorage.removeItem('schollbus_user');
    let user = JSON.parse(window.localStorage.getItem('schollbus_user'));
    this.app.getRootNav().setRoot(LoginPage);

  }
  resImageEvent(e) {
    this.resImg = e[0] ? e[0] : "";
    if (this.resImg) {
      this.dataProfile.profileImageURL = this.resImg;
    } else {
      this.dataProfile.profileImageURL = '';
    }

    // this.resImg = './assets/image/noimage.png';
  }
  editProfile() {
    // this.editProfile
    this.dataProfile.profileImageURL = this.dataProfile.profileImageURL;
    this.authenService.updateUser(this.dataProfile).then((resp) => {
      window.localStorage.setItem('schollbus_user', JSON.stringify(resp));
      this.navCtrl.pop();
    }, (error) => {
      this.dialogs.alert(JSON.parse(error._body).message,'ข้อมูลส่วนตัว');
    });

  }
}
