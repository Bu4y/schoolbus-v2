import { AuthProvider } from './../../providers/auth/auth';
import { TabNavPage } from './../tab-nav/tab-nav';
import { FeedPage } from './../feed/feed';
import { RegisterPage } from './../register/register';
import { credentialModel } from './login.model';
import { LoginServiceProvider } from './login.service';
import { Component } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AlertController, LoadingController, IonicPage, NavController, NavParams, App } from 'ionic-angular';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: any;
  // public backgroundImage = 'assets/img/background/background-5.jpg';
  loading = this.loadingCtrl.create();
  credential: credentialModel = new credentialModel();

  dataUser: any = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public app: App,
    public loginService: LoginServiceProvider,
    private fb: Facebook,
    private auth: AuthProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginFacebook() {
    this.fb.login(['public_profile', 'email'])
      .then((res: FacebookLoginResponse) =>
        this.fb.api('me?fields=email,id,first_name,name,last_name', null).then((res: FacebookLoginResponse) =>
          this.registerFb(res))
          .catch(e => {
            alert(JSON.stringify(e));
          })
      )
      .catch(e => {
        alert(JSON.stringify(e));
      });
  }

  registerFb(data) {
    // alert(JSON.stringify(data));
    this.dataUser.firstName = data.first_name;
    this.dataUser.lastName = data.last_name;
    this.dataUser.email = data.email;

    if (!this.dataUser.username) {
      this.dataUser.username = data.email;
    }
    // this.slides.slideTo(1, 500, this.dataUser);
    this.navCtrl.push(RegisterPage, this.dataUser);
  }

  // doLogin() {
  //   this.loading.present();
  //   this.loginService.onAuthorization(this.credential).then((data) => {
  //     console.log('success');
  //     this.loading.dismiss();
  //     this.navCtrl.setRoot(TabNavPage);
  //   }, (error) => {
  //     this.loading.dismiss();
  //     console.error(error);
  //     alert(JSON.parse(error._body).message);
  //   });
  // }
  doLogin(credential) {
    this.loading.present();
    this.auth.login(this.credential).subscribe(data => {
      this.auth.private().subscribe(user => {
        console.log(user);
      })
      this.loading.dismiss();
      this.navCtrl.setRoot(TabNavPage);
      console.log('success');
    }, (error) => {
      this.loading.dismiss();
      console.error(error);
    });

  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
}
