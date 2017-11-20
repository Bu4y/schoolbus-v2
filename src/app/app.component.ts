import { LocationPage } from './../pages/location/location';
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';
import { AuthProvider } from "./../providers/auth/auth";
import { MapPage } from "./../pages/map/map";
import { SelectlocationPage } from "./../pages/selectlocation/selectlocation";
import { LoginPage } from "./../pages/login/login";
import { TabNavPage } from "./../pages/tab-nav/tab-nav";
import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Constants } from "./app.contants";

import { HomePage } from "../pages/home/home";
import * as firebase from 'firebase';


import { AuthorizeModel } from '../pages/login/login.model';
import { AgreementPage } from '../pages/agreement/agreement';
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  // rootPage:any = TabNavPage;
  //rootPage: any = MapPage;
  rootPage: any = AgreementPage;
  user: AuthorizeModel = new AuthorizeModel;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private auth: AuthProvider
  ) {
    // if (this.auth.isLogged() === true) {
    //   this.rootPage = TabNavPage;
    // } else {
    //   this.rootPage = WalkthroughPage;
    // }

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    let isAgree = window.localStorage.getItem('isAgree') ? JSON.parse(window.localStorage.getItem('isAgree')) : false;
    if (isAgree) {
      this.rootPage = LoginPage;
    }
    this.configFirebase();
    this.user = JSON.parse(window.localStorage.getItem('schollbus_user'));
    if (this.user) {
      this.rootPage = TabNavPage;
    }
  }

  configFirebase() {
    let config = {
      apiKey: "AIzaSyAIjuU99uz_H4Er6J6Xsja48SMpLmuoZ5o",
      authDomain: "schoolbus-cnet.firebaseapp.com",
      databaseURL: "https://schoolbus-cnet.firebaseio.com/",
      projectId: "schoolbus-cnet",
      storageBucket: "schoolbus-cnet.appspot.com",
      messagingSenderId: "356749167374"
    };
    firebase.initializeApp(config);
  }
}
