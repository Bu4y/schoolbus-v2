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
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  // rootPage:any = TabNavPage;
  rootPage: any = MapPage;
  // rootPage: any = LoginPage;

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
  }
}
