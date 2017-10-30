import { LoginPage } from './../login/login';
import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
// import { SignupPage } from '../signup/signup';

@Component({
  selector: 'walkthrough-page',
  templateUrl: 'walkthrough.html'
})
export class WalkthroughPage {

  lastSlide = false;

  @ViewChild('slider') slider: Slides;
  slideIndex = 0;
  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: './assets/g1.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: './assets/g2.jpg',
      description: 'Take a look at our amazing options',
    }
  ];

  constructor(public navCtrl: NavController) { }

  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.slideIndex);
  }

  goToApp() {
    this.navCtrl.push(LoginPage);
    console.log('Go to App clicked');
  }

  // skip() {
  //   this.lastSlide = true;
  //   this.slider.slideTo(this.slider.length());
  // }
}