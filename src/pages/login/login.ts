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
  public backgroundImage = './assets/logo-School-bus.png';
  loading = this.loadingCtrl.create();
  credential: credentialModel = new credentialModel();

  dataUser: any = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmpassword: '',
    profileImageURL: ''
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

  loginFacebook(): Promise<any> {
    return new Promise((loginSuccess, loginError) => {
      this.fb.login(['public_profile', 'email'])
        .then((res: FacebookLoginResponse) => {

          // alert('Logged into Facebook! : ' + JSON.stringify(res));
          this.fb.api('me?fields=email,id,first_name,name,last_name,picture.width(600).height(600)', null).then(
            (resData) => {
              this.registerFb(resData)
              loginSuccess(resData as Promise<any>);
              // alert(" DATA : " + JSON.stringify(resData));
            }).catch((err) => {
              loginError(err as Promise<any>);
              alert("ไม่สามารถล็อคอินเข้าสู่ระบบด้วย Facebook ได้");

            });
          // this.fb.api('me?fields=email,id,first_name,name,last_name,picture.width(600).height(600)', null).then((res: FacebookLoginResponse) =>
          //   this.registerFb(res))
          //   .catch(e => {
          //     alert(JSON.stringify(e));
          //   });
        })
        .catch(e => {
          loginError(e as Promise<any>);
          alert('Error logging into Facebook : ' + JSON.stringify(e))
        });
    })
  }

  registerFb(data) {
    // alert(JSON.stringify(data));
    this.dataUser.firstName = data.first_name;
    this.dataUser.lastName = data.last_name;
    this.dataUser.email = data.email;
    this.dataUser.profileImageURL = data.picture.data.url;
    this.dataUser.username = data.email;

    if (!this.dataUser.username) {
      this.dataUser.username = data.email;
    }
    // this.slides.slideTo(1, 500, this.dataUser);
    this.signfb();
    // this.navCtrl.push(RegisterPage, this.dataUser);
  }

  signfb() {

    // this.dataUser.username = data.email
    this.dataUser.password = window.localStorage.getItem('sch-pass-v2') ? JSON.parse(window.localStorage.getItem('sch-pass-v2')) : 'P@ssw0rd1234' ;
    this.loginService.onAuthorization(this.dataUser).then((data) => {
      // alert(JSON.stringify(data));
      this.navCtrl.setRoot(TabNavPage);
    }).catch((err) => {
      // alert('err' + JSON.stringify(err));
      let er = JSON.parse(err._body);
      if (er.message == 'Unknown user') {
        this.dataUser.password = '';
        // this.dataUser.confirmpassword = 'P@ssw0rd1234';
        this.navCtrl.push(RegisterPage, this.dataUser);
      }
    })
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
