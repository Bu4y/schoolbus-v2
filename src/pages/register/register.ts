import { AddchildPage } from './../addchild/addchild';
import { MapPage } from './../map/map';
import { TabNavPage } from './../tab-nav/tab-nav';
import { RegisterServiceProvider } from './register.service';
import { Component, ViewChild } from '@angular/core';
import { Slides, IonicPage, NavController, NavParams, LoadingController, AlertController, App } from 'ionic-angular';
import { AuthorizeModel } from './register.model';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('slider') slider: Slides;

  public loginForm: any;
  signup: any = {
    username: '',
    confirmpassword: '',
    password: '',
    firstName: '',
    lastName: '',
    profileImageURL: '',
    email: '',
    phone: ''
  }
  user: AuthorizeModel = new AuthorizeModel;
  loading = this.loadingCtrl.create();
  pImages: Array<string> = [];
  resImg: string = '';
  isStep: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    public regisService: RegisterServiceProvider,
    private auth: AuthProvider
  ) {
    this.signup = this.navParams.data;
    // alert(JSON.stringify(this.signup));
    this.pImages = this.signup.profileImageURL ? [this.signup.profileImageURL] : [];

    console.log(this.signup);
  }
  ionViewDidLoad() {
    // this.slider.lockSwipeToNext(true);
    // this.slider.lockSwipeToPrev(true);
    console.log('ionViewDidLoad RegisterPage');
  }
  resImageEvent(e) {
    // alert(e[0]);
    this.resImg = e[0] ? e[0] : "";
    if (this.resImg) {
      this.signup.profileImageURL = this.resImg;
    } else {
      this.signup.profileImageURL = '';
    }
    // this.resImg = './assets/image/noimage.png';
  }
  nextRegister(signup) {
    this.isStep = false;
    // this.slider.lockSwipeToNext(false);
    // this.slider.slideTo(1, 500, signup);
    // this.slider.lockSwipeToPrev(true);
    // this.slider.lockSwipeToNext(true);

  }

  register() {
    this.loading.present();
    this.signup.profileImageURL = this.signup.profileImageURL ? this.signup.profileImageURL : this.resImg;
    this.user = this.signup;
    // this.user.profileImageURL = 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png';
    console.log(this.user);
    if (this.signup.password === this.signup.confirmpassword) {
      window.localStorage.setItem('sch-pass-v2', JSON.stringify(this.signup.password));
      this.auth.signUp(this.user).subscribe((data) => {
        // alert(JSON.stringify(data));
        this.loading.dismiss();
        this.navCtrl.setRoot(AddchildPage);

      }, (error) => {
        console.error(error);
        alert(JSON.stringify(error));
        this.loading.dismiss();
      });
    } else {
      this.loading.dismiss();
      this.doAlert();
      this.signup.password = '';
      this.signup.confirmpassword = '';
    }
    // if (this.signup.password === this.signup.confirmpassword) {
    //   this.regisService.newAuthorization(this.user).then((data) => {
    //     this.loading.dismiss();
    //     this.navCtrl.setRoot(TabNavPage);
    //   }, (error) => {
    //     console.error(error);
    //     alert(JSON.stringify(error));
    //     this.loading.dismiss();
    //   });
    // } else {
    //   this.loading.dismiss();
    //   this.doAlert();
    //   this.signup.password = '';
    //   this.signup.confirmpassword = '';

    // }
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Invalid Password!',
      message: 'Your password and confirm password not match!',
      buttons: ['Ok']
    });
    alert.present()
  }
  uploadImage() {
    alert('img');
  }

}
