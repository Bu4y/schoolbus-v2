import { Geolocation } from '@ionic-native/geolocation';
import { WalkthroughPage } from './../pages/walkthrough/walkthrough';
import { SelectlocationPage } from './../pages/selectlocation/selectlocation';
import { RegisterServiceProvider } from './../pages/register/register.service';
import { LoginServiceProvider } from './../pages/login/login.service';
import { MapPage } from './../pages/map/map';
import { RegisterPage } from './../pages/register/register';
import { LoginPage } from './../pages/login/login';
import { NotificationPage } from './../pages/notification/notification';
import { AddAddressPage } from './../pages/add-address/add-address';
import { FeedPage } from './../pages/feed/feed';
import { TabNavPage } from './../pages/tab-nav/tab-nav';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HttpModule } from '@angular/http';
import { Facebook } from '@ionic-native/facebook';
import { AuthProvider } from '../providers/auth/auth';
import { LocationPage } from '../pages/location/location';
import { GoogleMaps } from '@ionic-native/google-maps'
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { FeedServiceProvider } from "../pages/feed/feed.service";
import { CoreserviceProvider } from '../providers/coreservice/coreservice';
import { CommentPage } from '../pages/comment/comment';
import { MomentPipe } from '../pipes/moment/moment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabNavPage,
    FeedPage,
    AddAddressPage,
    NotificationPage,
    LoginPage,
    RegisterPage,
    MapPage,
    SelectlocationPage,
    WalkthroughPage,
    LocationPage,
    CommentPage,
    MomentPipe
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabNavPage,
    FeedPage,
    AddAddressPage,
    NotificationPage,
    LoginPage,
    RegisterPage,
    MapPage,
    SelectlocationPage,
    WalkthroughPage,
    LocationPage,
    CommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoginServiceProvider,
    RegisterServiceProvider,
    Geolocation,
    Facebook,
    GoogleMaps,
    NativeGeocoder,
    FeedServiceProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    CoreserviceProvider,
    CoreserviceProvider

  ]
})
export class AppModule { }
