webpackJsonp([10],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    return NotificationPage;
}());
NotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notification',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\notification\notification.html"*/'<!--\n\n  Generated template for the NotificationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Notification</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="masters">\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\notification\notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], NotificationPage);

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab_nav_tab_nav__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LocationPage = (function () {
    function LocationPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.map = this.navParams.data;
        console.log(this.map);
    }
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.goToMap = function () {
        // alert('sss');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */]);
    };
    LocationPage.prototype.confirm = function () {
        var alert = this.alertCtrl.create({
            title: 'School Bus',
            subTitle: 'ขอบคุณสำหรับข้อมูล บริษัทได้รับข้อมูลของท่านเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับเพื่อแจ้งรายละเอียดการใช้บริการรถโรงเรียน',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tab_nav_tab_nav__["a" /* TabNavPage */]);
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\location\location.html"*/'<!--\n\n  Generated template for the LocationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Select Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list radio-group [(ngModel)]="location">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-radio value="oneway" checked="false"></ion-radio>\n\n          <ion-label>เที่ยวเดียว</ion-label>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-radio value="roundtrip" checked="false"></ion-radio>\n\n          <ion-label>ไป-กลับ</ion-label>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-list>\n\n  <!-- One Way -->\n\n  <div *ngIf="location==\'oneway\'">\n\n    <ion-item>\n\n      <ion-label stacked color="primary">จุดรับ</ion-label>\n\n      <ion-input type="text" value="Lumlukka"></ion-input>\n\n      <ion-icon color="danger" item-right ios="ios-pin" md="md-pin" (click)="goToMap()"></ion-icon>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked color="primary">จุดส่ง</ion-label>\n\n      <ion-input type="text" value="Rungsit"></ion-input>\n\n      <ion-icon color="danger" item-right ios="ios-pin" md="md-pin" (click)="goToMap()"></ion-icon>\n\n    </ion-item>\n\n  </div>\n\n\n\n  <!-- Roundtrip -->\n\n  <div *ngIf="location==\'roundtrip\'">\n\n    <ion-item>\n\n      <ion-label stacked color="primary">จุดรับ</ion-label>\n\n      <ion-input type="text" value="Lumlukka"></ion-input>\n\n      <ion-icon color="danger" item-right ios="ios-pin" md="md-pin" (click)="goToMap()"></ion-icon>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked color="primary">โรงเรียน</ion-label>\n\n      <ion-input type="text" value="Rungsit"></ion-input>\n\n      <ion-icon color="danger" item-right ios="ios-pin" md="md-pin" (click)="goToMap()"></ion-icon>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label stacked color="primary">จุดส่ง</ion-label>\n\n      <ion-input type="text" value="Lumlukka"></ion-input>\n\n      <ion-icon color="danger" item-right ios="ios-pin" md="md-pin" (click)="goToMap()"></ion-icon>\n\n    </ion-item>\n\n  </div>\n\n  <div padding>\n\n    <button ion-button round block color="yellows" (click)="confirm()">Confirm</button>\n\n  </div>\n\n  <p>Latitude : {{map.latitude}}</p>\n\n  <p>Longtitude : {{map.longitude}}</p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\location\location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CommentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CommentPage = (function () {
    function CommentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CommentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentPage');
    };
    CommentPage.prototype.createComment = function (e) {
        console.log(e);
    };
    return CommentPage;
}());
CommentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-comment',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\comment\comment.html"*/'<!--\n\n  Generated template for the CommentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>comment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<ion-item>\n\n  <ion-label >comment</ion-label>\n\n  <ion-textarea type="text" [(ngModel)]="commentData.comment" ></ion-textarea>\n\n</ion-item>\n\n<button ion-button (click)="createComment(commentData)"></button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\comment\comment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CommentPage);

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comment_comment__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedPage = (function () {
    function FeedPage(navCtrl, navParams, auth, app, feedServiceProvider, modalCtrl) {
        // this.auth.private().subscribe((data) => {
        //   this.data = data.message
        // })
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.app = app;
        this.feedServiceProvider = feedServiceProvider;
        this.modalCtrl = modalCtrl;
        // data: string;
        this.datafeed = new Array();
        this.likeChk = false;
    }
    FeedPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var user = JSON.parse(window.localStorage.getItem('schollbus_user'));
        this.feedServiceProvider.getfeed()
            .then(function (data) {
            _this.datafeed = data;
            data.forEach(function (itmIslike) {
                itmIslike.islike.forEach(function (itm) {
                    if (itm.user === user._id) {
                        _this.likeChk = true;
                    }
                    else {
                        _this.likeChk = false;
                    }
                });
            });
            console.log(data);
        }).catch(function (err) {
            console.error(err);
        });
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad FeedPage');
    //   let user = JSON.parse(window.localStorage.getItem('schollbus_user'));
    //   this.feedServiceProvider.getfeed()
    //     .then((data) => {
    //       this.datafeed = data;
    //       data.forEach(itmIslike => {
    //         itmIslike.islike.forEach(itm => {
    //           if (itm.user === user._id) {
    //             this.likeChk = true;
    //           } else {
    //             this.likeChk = false;
    //           }
    //         });
    //       });
    //       console.log(data);
    //     }).catch((err) => {
    //       console.error(err);
    //     });
    // }
    FeedPage.prototype.logout = function () {
        this.auth.logout();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    FeedPage.prototype.updatelike = function (data) {
        var _this = this;
        var user = JSON.parse(window.localStorage.getItem('schollbus_user'));
        var isLike = true;
        this.likeChk = isLike;
        for (var i = 0; i < data.islike.length; i++) {
            if (data.islike[i].user === user._id) {
                isLike = false;
                this.likeChk = isLike;
                data.islike.splice(i, 1);
            }
        }
        if (isLike) {
            data.islike.push({
                user: JSON.parse(window.localStorage.getItem('schollbus_user')),
                created: new Date().toISOString()
            });
        }
        this.feedServiceProvider.updateLike(data).then(function (resp) {
            console.log(resp);
            _this.ionViewWillEnter();
        }, function (err) {
            console.error(err);
        });
        console.log(data);
    };
    FeedPage.prototype.comment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__comment_comment__["a" /* CommentPage */]);
    };
    return FeedPage;
}());
FeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-feed',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\feed\feed.html"*/'<!--\n\n  Generated template for the FeedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only color="light">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Feed</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logout()">\n\n        <ion-icon name="md-log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n\n\n  <!-- <ion-card >\n\n        \n\n        <ion-card-content>\n\n          <ion-card-title>\n\n              \n\n            </ion-card-title>\n\n          <p>\n\n            The most popular industrial group ever, and largely\n\n            responsible for bringing the music to a mass audience.\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card> -->\n\n\n\n\n\n\n\n  <ion-card *ngFor="let data of datafeed">\n\n    <ion-slides>\n\n      <ion-slide imgstyle *ngFor="let item of data.image">\n\n        <img src="{{item}}" imgSize>\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <ion-card-content>\n\n      <h2>{{data.name}}</h2>\n\n    </ion-card-content>\n\n    <ion-row>\n\n      <ion-col text-left>\n\n        <button ion-button icon-left clear small (click)="updatelike(data)">\n\n          <ion-icon name="ios-heart" *ngIf="likeChk"></ion-icon>\n\n          <ion-icon name="ios-heart-outline" *ngIf="!likeChk"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small (click)="comment()">\n\n            <ion-icon name="ios-chatbubbles-outline"></ion-icon>\n\n          </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n          <button ion-button icon-right clear small (click)="comment()">\n\n              <ion-icon name="md-share"></ion-icon>\n\n            </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\feed\feed.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__feed_service__["a" /* FeedServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__feed_service__["a" /* FeedServiceProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */]) === "function" && _f || Object])
], FeedPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab_nav_tab_nav__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_model__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, loadingCtrl, alertCtrl, app, regisService, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.regisService = regisService;
        this.auth = auth;
        this.signup = {
            username: '',
            confirmpassword: '',
            password: '',
            firstName: '',
            lastName: '',
            profileImageURL: '',
            email: '',
            phone: ''
        };
        this.user = new __WEBPACK_IMPORTED_MODULE_4__register_model__["a" /* AuthorizeModel */];
        this.loading = this.loadingCtrl.create();
        this.signup = this.navParams.data;
        // alert(JSON.stringify(this.signup));
        console.log(this.signup);
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        this.slider.lockSwipeToNext(true);
        this.slider.lockSwipeToPrev(true);
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.nextRegister = function (signup) {
        this.slider.lockSwipeToNext(false);
        this.slider.slideTo(1, 500, signup);
        this.slider.lockSwipeToPrev(true);
        this.slider.lockSwipeToNext(true);
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.loading.present();
        this.user = this.signup;
        // this.user.profileImageURL = 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png';
        console.log(this.user);
        if (this.signup.password === this.signup.confirmpassword) {
            window.localStorage.setItem('sch-pass-v2', JSON.stringify(this.signup.password));
            this.auth.signUp(this.user).subscribe(function (data) {
                // alert(JSON.stringify(data));
                _this.loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tab_nav_tab_nav__["a" /* TabNavPage */]);
            }, function (error) {
                console.error(error);
                alert(JSON.stringify(error));
                _this.loading.dismiss();
            });
        }
        else {
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
    };
    RegisterPage.prototype.doAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Invalid Password!',
            message: 'Your password and confirm password not match!',
            buttons: ['Ok']
        });
        alert.present();
    };
    RegisterPage.prototype.uploadImage = function () {
        alert('img');
    };
    return RegisterPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('slider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Slides */])
], RegisterPage.prototype, "slider", void 0);
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding class="masters">\n\n\n\n  <ion-slides #slider>\n\n\n\n    <ion-slide>\n\n      <div padding>\n\n        <div (click)="uploadImage()" *ngIf="signup.profileImageURL">\n\n          <!-- <img src="./assets/camera.png" style="width:150px"> -->\n\n          <img src="{{signup.profileImageURL}}" style="width:150px; border-radius: 50%;">\n\n        </div>\n\n        <div (click)="uploadImage()" *ngIf="!signup.profileImageURL">\n\n          <img src="./assets/camera.png" style="width:150px">\n\n          <!-- <img src="{{signup.profileImageURL}}"> -->\n\n        </div>\n\n\n\n        <!-- <ion-icon name="camera"></ion-icon> -->\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/Icon-user.png">\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Name" [(ngModel)]="signup.firstName"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/Icon-user.png">\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Last Name" [(ngModel)]="signup.lastName"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/Phone.png">\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Phone" [(ngModel)]="signup.phone"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/mail.png">\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Email" [(ngModel)]="signup.email"></ion-input>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n          <ion-label stacked> Image</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.profileImageURL"></ion-input>\n\n        </ion-item> -->\n\n        <!-- <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-person"></ion-icon> Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.firstName"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-person"></ion-icon> Last Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.lastName"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-call"></ion-icon> Phone</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.phone"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-mail"></ion-icon> Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.email"></ion-input>\n\n        </ion-item> -->\n\n        <!-- <button ion-button round block color="yellows" (click)="register(signup)">CONFIRM</button> -->\n\n        <div>\n\n          <button ion-button round block color="yellows" (click)="nextRegister(user)">CONFIRM</button>\n\n        </div>\n\n      </div>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <div padding>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/Icon-user.png">\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Username" [(ngModel)]="signup.username"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/password.png">\n\n          </ion-label>\n\n          <ion-input type="password" placeholder="Password" [(ngModel)]="signup.password"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/cf-pass.png">\n\n          </ion-label>\n\n          <ion-input type="password" placeholder="Confirm Password" [(ngModel)]="signup.confirmpassword"></ion-input>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-person"></ion-icon> Username</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.username"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-lock"></ion-icon> Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="signup.password"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-checkmark"></ion-icon> Confirm Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="signup.confirmpassword"></ion-input>\n\n        </ion-item> -->\n\n        <div class="marginT200">\n\n          <button ion-button round block color="yellows" (click)="register(signup)">CONFIRM</button>\n\n        </div>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1__register_service__["a" /* RegisterServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-address/add-address.module": [
		289,
		9
	],
	"../pages/comment/comment.module": [
		290,
		8
	],
	"../pages/feed/feed.module": [
		291,
		7
	],
	"../pages/location/location.module": [
		292,
		6
	],
	"../pages/login/login.module": [
		293,
		5
	],
	"../pages/map/map.module": [
		294,
		4
	],
	"../pages/notification/notification.module": [
		295,
		3
	],
	"../pages/register/register.module": [
		296,
		2
	],
	"../pages/selectlocation/selectlocation.module": [
		297,
		1
	],
	"../pages/tab-nav/tab-nav.module": [
		298,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_coreservice_coreservice__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Constants } from "../../app/app.contants";
/*
  Generated class for the FeedServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var FeedServiceProvider = (function () {
    function FeedServiceProvider(http, coreService) {
        this.http = http;
        this.coreService = coreService;
        console.log('Hello FeedServiceProvider Provider');
    }
    // authorizationHeader() {
    //     let headers = new Headers();
    //     let token = window.localStorage.getItem('token');
    //     headers.append('Authorization', 'Bearer ' + token);
    //     return headers;
    // }
    FeedServiceProvider.prototype.getfeed = function () {
        return this.http.get('http://school-bus-server.herokuapp.com/api/feeds')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FeedServiceProvider.prototype.updateLike = function (feed) {
        var headers = this.coreService.authorizationHeader();
        return this.http.put('https://school-bus-server.herokuapp.com/api/feeds/' + feed._id, feed, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FeedServiceProvider.prototype.commentFeed = function (feedId, data) {
        var headers = this.coreService.authorizationHeader();
        return this.http.put('https://school-bus-server.herokuapp.com/api/feeds/comment/' + feedId, data, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FeedServiceProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return FeedServiceProvider;
}());
FeedServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_coreservice_coreservice__["a" /* CoreserviceProvider */]])
], FeedServiceProvider);

//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CoreserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CoreserviceProvider = (function () {
    function CoreserviceProvider(http) {
        this.http = http;
        console.log('Hello CoreserviceProvider Provider');
    }
    CoreserviceProvider.prototype.authorizationHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = JSON.parse(window.localStorage.getItem('schollbus_user')).loginToken;
        headers.append('Authorization', 'Bearer ' + token);
        return headers;
    };
    return CoreserviceProvider;
}());
CoreserviceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CoreserviceProvider);

//# sourceMappingURL=coreservice.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Constants } from "../../app/app.contants";
/*
  Generated class for the RegisterServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var RegisterServiceProvider = (function () {
    function RegisterServiceProvider(http) {
        this.http = http;
        console.log('Hello RegisterServiceProvider Provider');
    }
    RegisterServiceProvider.prototype.newAuthorization = function (user) {
        // return this.http.post(Constants.URL + '/api/auth/signup', user)
        return this.http.post('https://school-bus-server.herokuapp.com/api/auth/signup', user)
            .toPromise()
            .then(function (response) {
            var data = response.json();
            window.localStorage.setItem('schollbus_user', JSON.stringify(data));
            return data;
        })
            .catch(this.handleError);
    };
    RegisterServiceProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return RegisterServiceProvider;
}());
RegisterServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RegisterServiceProvider);

//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Constants } from "../../app/app.contants";
/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var LoginServiceProvider = (function () {
    function LoginServiceProvider(http) {
        this.http = http;
        console.log('Hello LoginServiceProvider Provider');
    }
    LoginServiceProvider.prototype.onAuthorization = function (user) {
        return this.http.post('https://school-bus-server.herokuapp.com/api/auth/signin', user)
            .toPromise()
            .then(function (response) {
            var data = response.json();
            window.localStorage.setItem('schollbus_user', JSON.stringify(data));
            return data;
        })
            .catch(this.handleError);
    };
    LoginServiceProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return LoginServiceProvider;
}());
LoginServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], LoginServiceProvider);

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectlocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_address_add_address__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SelectlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectlocationPage = (function () {
    function SelectlocationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelectlocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectlocationPage');
    };
    SelectlocationPage.prototype.gotomap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */]);
    };
    SelectlocationPage.prototype.next = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__add_address_add_address__["a" /* AddAddressPage */]);
    };
    return SelectlocationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_14" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Tabs */])
], SelectlocationPage.prototype, "tabRef", void 0);
SelectlocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-selectlocation',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\selectlocation\selectlocation.html"*/'<!--\n\n  Generated template for the SelectlocationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Select Location</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="masters">\n\n  <h3 text-center>กรุณาระบุเส้นทางที่ต้องการ</h3>\n\n  <ion-list radio-group>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-radio value="always" checked></ion-radio>\n\n          <ion-label>เที่ยวเดียว</ion-label>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-radio value="locked"></ion-radio>\n\n          <ion-label>ไป-กลับ</ion-label>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-list>\n\n  <ion-segment mode="md" color="light" [(ngModel)]="step">\n\n    <ion-segment-button class="margintest" value="1" id="segmentStep">1</ion-segment-button>\n\n    <ion-segment-button class="margintest" value="2" id="segmentStep">2</ion-segment-button>\n\n    <ion-segment-button class="margintest" value="3" id="segmentStep">3</ion-segment-button>\n\n  </ion-segment>\n\n  <!-- 1 -->\n\n  <div [ngSwitch]="step" text-center>\n\n    <ion-list *ngSwitchCase="\'1\'">\n\n      <p>ต้นทาง</p>\n\n      <ion-card>\n\n        <ion-card-header>\n\n          Address\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          87/55 ต.ลำลูกกา อ.ลำลูกกา จ.ปทุมธานี 12150\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'2\'">\n\n      <p>โรงเรียน</p>\n\n      <ion-card>\n\n        <ion-card-header>\n\n          Address\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          87/55 ต.ลำลูกกา อ.ลำลูกกา จ.ปทุมธานี 12150\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'3\'">\n\n      <p>ปลายทาง</p>\n\n      <ion-card>\n\n        <ion-card-header>\n\n          Address\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          87/55 ต.ลำลูกกา อ.ลำลูกกา จ.ปทุมธานี 12150\n\n        </ion-card-content>\n\n      </ion-card>\n\n    </ion-list>\n\n  </div>\n\n  <!-- 1 -->\n\n\n\n  <div text-center class="marginT50">\n\n    <button ion-button round block icon-left color="yellows" (click)="gotomap()">\n\n      <ion-icon name="pin"></ion-icon>\n\n      เพิ่มที่อยู่ใหม่\n\n    </button>\n\n    <button ion-button round (click)="next()">success</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\selectlocation\selectlocation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */]])
], SelectlocationPage);

//# sourceMappingURL=selectlocation.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(235);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_walkthrough_walkthrough__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_selectlocation_selectlocation__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register_register_service__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_map_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_address_add_address__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tab_nav_tab_nav__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_location_location__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_maps__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_geocoder__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_feed_feed_service__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_coreservice_coreservice__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_comment_comment__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tab_nav_tab_nav__["a" /* TabNavPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_address_add_address__["a" /* AddAddressPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_selectlocation_selectlocation__["a" /* SelectlocationPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_comment_comment__["a" /* CommentPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-address/add-address.module#AddAddressPageModule', name: 'AddAddressPage', segment: 'add-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/selectlocation/selectlocation.module#SelectlocationPageModule', name: 'SelectlocationPage', segment: 'selectlocation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab-nav/tab-nav.module#TabNavPageModule', name: 'TabNavPage', segment: 'tab-nav', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tab_nav_tab_nav__["a" /* TabNavPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_add_address_add_address__["a" /* AddAddressPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_selectlocation_selectlocation__["a" /* SelectlocationPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_comment_comment__["a" /* CommentPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__pages_register_register_service__["a" /* RegisterServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_google_maps__["b" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_25__pages_feed_feed_service__["a" /* FeedServiceProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_13__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_14_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_coreservice_coreservice__["a" /* CoreserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_26__providers_coreservice_coreservice__["a" /* CoreserviceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { SignupPage } from '../signup/signup';
var WalkthroughPage = (function () {
    function WalkthroughPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.lastSlide = false;
        this.slideIndex = 0;
        this.slides = [
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
    }
    WalkthroughPage.prototype.onSlideChanged = function () {
        this.slideIndex = this.slider.getActiveIndex();
        console.log('Slide changed! Current index is', this.slideIndex);
    };
    WalkthroughPage.prototype.goToApp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
        console.log('Go to App clicked');
    };
    return WalkthroughPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('slider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Slides */])
], WalkthroughPage.prototype, "slider", void 0);
WalkthroughPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'walkthrough-page',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\walkthrough\walkthrough.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n\n    <!-- <ion-buttons right>\n\n      <button ion-button color="light" *ngIf="slideIndex < slides.length - 1" class="skip-button" (click)="skip()">SKIP</button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content fullscreen="true" class="no-padding-top">\n\n  <!-- autoplay="2000" -->\n\n  <ion-slides #slider pager="true" (ionSlideWillChange)="onSlideChanged()">\n\n    <ion-slide *ngFor="let slide of slides" class="slide-background" [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}">\n\n      <div class="text-wrapper">\n\n        <!-- <div class="slide-text">\n\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2><br>\n\n          <p [innerHTML]="slide.description"></p>\n\n        </div> -->\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n  <ion-fab bottom right>\n\n    <button ion-fab color="danger" (click)="goToApp()">Skip</button>\n\n  </ion-fab>\n\n  <!-- <div class="floating-buttons pop-in" *ngIf="slideIndex >= slides.length - 1">\n\n    <button ion-button clear large full (click)="goToApp()">Let\'s go!</button>\n\n  </div> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\walkthrough\walkthrough.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]])
], WalkthroughPage);

//# sourceMappingURL=walkthrough.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "URL", {
        // public static get URL(): string { return "https://localhost:3000"; };
        get: function () { return "https://school-bus-server.herokuapp.com/"; },
        enumerable: true,
        configurable: true
    });
    ;
    return Constants;
}());

//# sourceMappingURL=app.contants.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizeModel; });
var AuthorizeModel = (function () {
    function AuthorizeModel() {
    }
    return AuthorizeModel;
}());

//# sourceMappingURL=register.model.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return credentialModel; });
/* unused harmony export AuthorizeModel */
var credentialModel = (function () {
    function credentialModel() {
    }
    return credentialModel;
}());

// export class AuthorizeModel {
//     displayName: string;
//     email: string;
//     firstName: string;
//     lastName: string;
//     username: string;
//     password: string;
//     profileImageURL: string;
//     gender: string;
//     phone: string;
//     birthday: string;
//     roles: Array<string>;
// }
var AuthorizeModel = (function () {
    function AuthorizeModel() {
    }
    return AuthorizeModel;
}());

//# sourceMappingURL=login.model.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, auth) {
        // if (this.auth.isLogged() === true) {
        //   this.rootPage = TabNavPage;
        // } else {
        //   this.rootPage = WalkthroughPage;
        // }
        this.auth = auth;
        // rootPage:any = TabNavPage;
        //rootPage: any = MapPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_contants__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { UserModel } from './../../pages/login/login.model';





/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(http) {
        this.http = http;
        console.log("Hello AuthProvider Provider");
    }
    AuthProvider.prototype.authHeader = function (headers) {
        headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('schollbus_user'));
    };
    AuthProvider.prototype.private = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.authHeader(headers);
        return this.http
            .post(__WEBPACK_IMPORTED_MODULE_4__app_app_contants__["a" /* Constants */].URL + 'api/users/me', {}, {
            headers: headers
        })
            .map(function (res) { return res.json(); });
    };
    AuthProvider.prototype.login = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_app_contants__["a" /* Constants */].URL + 'api/auth/signin', user).map(this.extractData);
    };
    AuthProvider.prototype.signUp = function (user) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_app_contants__["a" /* Constants */].URL + 'api/auth/signup', user).map(this.extractData);
    };
    AuthProvider.prototype.isLogged = function () {
        if (window.localStorage.getItem('schollbus_user')) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthProvider.prototype.logout = function () {
        window.localStorage.removeItem('user_token');
        return true;
    };
    AuthProvider.prototype.extractData = function (res) {
        var user = res.json();
        window.localStorage.setItem('schollbus_user', JSON.stringify(user));
        return user || {};
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_nav_tab_nav__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_model__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loadingCtrl, alertCtrl, app, loginService, fb, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.loginService = loginService;
        this.fb = fb;
        this.auth = auth;
        this.backgroundImage = './assets/logo-School-bus.png';
        this.loading = this.loadingCtrl.create();
        this.credential = new __WEBPACK_IMPORTED_MODULE_3__login_model__["a" /* credentialModel */]();
        this.dataUser = {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            confirmpassword: '',
            profileImageURL: ''
        };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginFacebook = function () {
        var _this = this;
        return new Promise(function (loginSuccess, loginError) {
            _this.fb.login(['public_profile', 'email'])
                .then(function (res) {
                // alert('Logged into Facebook! : ' + JSON.stringify(res));
                _this.fb.api('me?fields=email,id,first_name,name,last_name,picture.width(600).height(600)', null).then(function (resData) {
                    // alert(JSON.stringify(resData));
                    _this.registerFb(resData);
                    loginSuccess(resData);
                    // alert(" DATA : " + JSON.stringify(resData));
                }).catch(function (err) {
                    loginError(err);
                    alert("ไม่สามารถล็อคอินเข้าสู่ระบบด้วย Facebook ได้");
                });
                // this.fb.api('me?fields=email,id,first_name,name,last_name,picture.width(600).height(600)', null).then((res: FacebookLoginResponse) =>
                //   this.registerFb(res))
                //   .catch(e => {
                //     alert(JSON.stringify(e));
                //   });
            })
                .catch(function (e) {
                loginError(e);
                alert('Error logging into Facebook : ' + JSON.stringify(e));
            });
        });
    };
    LoginPage.prototype.registerFb = function (data) {
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
    };
    LoginPage.prototype.signfb = function () {
        var _this = this;
        this.loading.present();
        // this.dataUser.username = data.email
        this.dataUser.password = window.localStorage.getItem('sch-pass-v2') ? JSON.parse(window.localStorage.getItem('sch-pass-v2')) : 'P@ssw0rd1234';
        this.loginService.onAuthorization(this.dataUser).then(function (data) {
            _this.loading.dismiss();
            // alert(JSON.stringify(data));
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__tab_nav_tab_nav__["a" /* TabNavPage */]);
        }).catch(function (err) {
            // alert('err' + JSON.stringify(err));
            var er = JSON.parse(err._body);
            if (er.message == 'Unknown user') {
                _this.dataUser.password = '';
                // this.dataUser.confirmpassword = 'P@ssw0rd1234';
                _this.loading.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */], _this.dataUser);
            }
        });
    };
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
    LoginPage.prototype.doLogin = function (credential) {
        var _this = this;
        this.loading.present();
        this.auth.login(this.credential).subscribe(function (data) {
            // this.auth.private().subscribe(user => {
            //   console.log(user);
            // })
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__tab_nav_tab_nav__["a" /* TabNavPage */]);
            console.log('success');
        }, function (error) {
            _this.loading.dismiss();
            console.error(error);
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- [ngStyle]="{\'background-image\': \'url(\' + backgroundImage +\')\'}" -->\n\n<ion-content padding class="transparent-header masters">\n\n  <div padding>\n\n    <ion-row>\n\n      <ion-col>\n\n        <img class="logo" src="./assets/logo-School-bus.png" />\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-list inset>\n\n          <ion-item>\n\n            <ion-label>\n\n              <img src="./assets/icon/Icon-user.png" width="25px">\n\n            </ion-label>\n\n            <ion-input type="text" placeholder="Username or Phone" [(ngModel)]="credential.username"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>\n\n              <img src="./assets/icon/password.png" width="25px">\n\n            </ion-label>\n\n            <ion-input type="password" placeholder="Password" [(ngModel)]="credential.password"></ion-input>\n\n          </ion-item>\n\n          <!-- <img src="./assets/icon/Icon-user.png" > -->\n\n          <!-- <ion-item>\n\n            <ion-label stacked>\n\n              <ion-icon name="md-person"></ion-icon> Username</ion-label>\n\n            <ion-input type="text" [(ngModel)]="credential.username"></ion-input>\n\n          </ion-item> -->\n\n          <!-- <ion-item>\n\n            <ion-label stacked>\n\n              <ion-icon name="md-lock"></ion-icon> Password</ion-label>\n\n            <ion-input type="password" [(ngModel)]="credential.password"></ion-input>\n\n          </ion-item> -->\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button round outline color="yellows" class="login-button" (click)="doLogin()">Login</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <div class="strike">\n\n      <span>OR CONNECT WITH</span>\n\n    </div>\n\n    <ion-row text-center>\n\n      <ion-col>\n\n        <div>\n\n          <button class="button-mds" ion-button icon-left icon-only round (click)="loginFacebook()" color="facebook">\n\n            <ion-icon name="logo-facebook"></ion-icon> FACEBOOK</button>\n\n        </div>\n\n      </ion-col>\n\n      <ion-col>\n\n        <div>\n\n          <button class="button-mds" ion-button icon-left icon-only round (click)="register()" color="yellows">\n\n            <ion-icon name="md-person"></ion-icon> REGISTER</button>\n\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabNavPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_notification__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_address_add_address__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabNavPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabNavPage = (function () {
    function TabNavPage(navCtrl, app, auth) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.auth = auth;
        this.feedRoot = __WEBPACK_IMPORTED_MODULE_2__feed_feed__["a" /* FeedPage */];
        this.addAddressRoot = __WEBPACK_IMPORTED_MODULE_1__add_address_add_address__["a" /* AddAddressPage */];
        this.notificationRoot = __WEBPACK_IMPORTED_MODULE_0__notification_notification__["a" /* NotificationPage */];
        // this.auth.private().subscribe(data => {
        //   this.data = data.message
        //   console.log('token' + this.data);
        // });
    }
    TabNavPage.prototype.tabAddAddress = function () {
        // this.navCtrl.push(AddAddressPage);
        // this.navCtrl.setRoot(AddAddressPage);
        // this.app.getRootNav().push(AddAddressPage);
        this.tabRef.select(1);
    };
    return TabNavPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Tabs */])
], TabNavPage.prototype, "tabRef", void 0);
TabNavPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-tab-nav',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\tab-nav\tab-nav.html"*/'<ion-tabs #myTabs>\n\n  <ion-tab [root]="feedRoot" tabTitle="กระดานข่าว" tabIcon="ios-list"></ion-tab>\n\n  <ion-tab [root]="addAddressRoot" tabTitle="" tabIcon=""></ion-tab>\n\n  <ion-fab bottom center no-margin style="bottom:-0.3%;">\n\n    <button ion-fab no-padding no-margin style="width:75px; height:75px;  background-color:#fee02b" (click)="tabAddAddress()">\n\n      <img no-padding src="./assets/fab.png">\n\n    </button>\n\n  </ion-fab>\n\n  <ion-tab [root]="notificationRoot" tabTitle="แจ้งแตือน" tabIcon="ios-megaphone-outline"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\tab-nav\tab-nav.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
], TabNavPage);

//# sourceMappingURL=tab-nav.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_location__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the AddAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddAddressPage = (function () {
    function AddAddressPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AddAddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddAddressPage');
    };
    AddAddressPage.prototype.selectLocation = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__location_location__["a" /* LocationPage */]);
    };
    return AddAddressPage;
}());
AddAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-add-address',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\add-address\add-address.html"*/'<!--\n\n  Generated template for the AddAddressPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only color="light">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Address</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="masters">\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-thumbnail item-left>\n\n        <img src="data:image/png;base64,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">\n\n      </ion-thumbnail>\n\n      <p>________________________________</p>\n\n      <p>________________________________</p>\n\n      <p>________________________________</p>\n\n      \n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-thumbnail item-left>\n\n        <img src="data:image/png;base64,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">\n\n      </ion-thumbnail>\n\n      <p>________________________________</p>\n\n      <p>________________________________</p>\n\n      <p>________________________________</p>\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="yellows" (click)="selectLocation()">\n\n      <ion-icon name="md-add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\add-address\add-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]])
], AddAddressPage);

//# sourceMappingURL=add-address.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = (function () {
    // options: GeolocationOptions
    // currentPos: Geoposition;
    // @ViewChild('map') mapElement: ElementRef;
    // map: any;
    // myLat;
    // myLong;
    // xxx;
    function MapPage(navCtrl, navParams, geolocation, googleMaps, nativeGeocoder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.googleMaps = googleMaps;
        this.nativeGeocoder = nativeGeocoder;
    }
    MapPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.mapElement = document.getElementById('map');
            var mapOptions = {
                camera: {
                    target: {
                        lat: resp.coords.latitude,
                        lng: resp.coords.longitude
                    },
                    zoom: 18,
                    tilt: 30
                }
            };
            // this.map = this.googleMaps.create(this.mapElement, mapOptions);
            _this.map = new __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMap */](_this.mapElement, mapOptions);
            // Wait the MAP_READY before using any methods.
            _this.map.one(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY)
                .then(function () {
                console.log('Map is ready!');
                // Now you can use all methods safely.
                _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                    .then(function (result) {
                    var placename = result.subThoroughfare
                        + ' ' + result.locality
                        + ' ' + result.subAdministrativeArea
                        + ' ' + result.administrativeArea
                        + ' ' + result.postalCode;
                    _this.map.addMarker({
                        title: placename,
                        icon: 'red',
                        animation: 'DROP',
                        position: {
                            lat: resp.coords.latitude,
                            lng: resp.coords.longitude
                        }
                    })
                        .then(function (marker) {
                        marker.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MARKER_CLICK)
                            .subscribe(function () {
                            alert('clicked');
                        });
                    });
                })
                    .catch(function (error) { return console.log(error); });
            });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\map\map.html"*/'<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Map\n\n    </ion-title>\n\n    <!-- <ion-buttons end>\n\n      <button ion-button (click)="addMarker()">\n\n        <ion-icon name="add"></ion-icon>Add Marker</button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="masters">\n\n  <div id="map"></div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\map\map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ })

},[216]);
//# sourceMappingURL=main.js.map