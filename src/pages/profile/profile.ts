import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorizeModel } from '../../pages/register/register.model';
import { RegisterServiceProvider } from '../../pages/register/register.service';


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
  dataProfile: AuthorizeModel = new AuthorizeModel
  constructor(public navCtrl: NavController, public navParams: NavParams, public authenService: RegisterServiceProvider) {
    this.dataProfile = JSON.parse(window.localStorage.getItem('schollbus_user'));
    console.log(this.dataProfile);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
  editProfile() {
    // this.editProfile
    this.authenService.updateUser(this.dataProfile).then((resp) => {
      window.localStorage.setItem('schollbus_user', JSON.stringify(resp));
      this.navCtrl.pop();
    }, (error) => {
      console.error(error);
    });

  }
}
