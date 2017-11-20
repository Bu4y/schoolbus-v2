webpackJsonp([13],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(35);
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
    function RegisterServiceProvider(http, Auth) {
        this.http = http;
        this.Auth = Auth;
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
    RegisterServiceProvider.prototype.updateUser = function (user) {
        var headers = this.Auth.createAuthorizationHeader();
        return this.http.put('https://school-bus-server.herokuapp.com/api/users', user, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
], RegisterServiceProvider);

//# sourceMappingURL=register.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_coreservice_coreservice__ = __webpack_require__(96);
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
    FeedServiceProvider.prototype.getfeedId = function (id) {
        return this.http.get('http://school-bus-server.herokuapp.com/api/feeds/' + id)
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

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_model__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_orderservice_orderservice__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_address_add_address__ = __webpack_require__(66);
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
    // dataOrder: any = {};
    function LocationPage(navCtrl, navParams, alertCtrl, orderService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.orderService = orderService;
        this.order = new __WEBPACK_IMPORTED_MODULE_0__location_model__["a" /* LocationModel */]();
        if (this.navParams.get('daya')) {
            this.order = this.navParams.get('daya');
            window.localStorage.setItem('order', JSON.stringify(this.order));
        }
        // this.order.route = this.order.route ? this.order.route : {};
        // this.order.route.routetype = this.order.route.routetype ? this.order.route.routetype : '';    
        // this.map = this.navParams.data;
        // console.log(this.map);
    }
    LocationPage.prototype.ionViewWillEnter = function () {
        this.order = window.localStorage.getItem('order') ? JSON.parse(window.localStorage.getItem('order')) : {
            route: {
                routetype: '',
                reception: {
                    item: ''
                },
                school: {
                    item: ''
                },
                send: {
                    item: ''
                }
            }
        };
        this.order.route.routetype = this.order.route.routetype ? this.order.route.routetype : '';
        this.order.route.reception.item = this.order.route.reception.item ? this.order.route.reception.item : '';
        this.order.route.school.item = this.order.route.school.item ? this.order.route.school.item : '';
        this.order.route.send.item = this.order.route.send.item ? this.order.route.send.item : '';
        this.order.name = window.localStorage.getItem('childname');
        this.order.image = window.localStorage.getItem('childimage');
        // alert(JSON.stringify(this.order.route));
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.goToMap = function (type) {
        window.localStorage.setItem('order', JSON.stringify(this.order));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__map_map__["a" /* MapPage */], type);
    };
    LocationPage.prototype.confirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'School Bus',
            message: 'ขอบคุณสำหรับข้อมูล ทางบริษัทฯได้รับข้อมูลของท่านเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับเพื่อแจ้งรายละเอียดการใช้บริการรถโรงเรียน',
            buttons: [
                {
                    text: 'OK',
                    role: 'OK',
                    handler: function () {
                        _this.createOrder();
                    }
                }
            ]
        });
        alert.present();
    };
    LocationPage.prototype.createOrder = function () {
        var _this = this;
        console.log(this.order);
        this.orderService.createOrder(this.order).then(function (resp) {
            window.localStorage.removeItem('order');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__add_address_add_address__["a" /* AddAddressPage */]);
        }, function (err) {
            console.log(err);
        });
    };
    return LocationPage;
}());
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\location\location.html"*/'<!--\n\n  Generated template for the LocationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Select Location</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list radio-group [(ngModel)]="order.route.routetype">\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-radio value="oneway" checked></ion-radio>\n\n          <ion-label>เที่ยวเดียว : </ion-label>\n\n        </ion-item>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <ion-item>\n\n          <ion-radio value="roundtrip"></ion-radio>\n\n          <ion-label>ไป-กลับ : </ion-label>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-list>\n\n  <!-- One Way -->\n\n  <div *ngIf="order.route.routetype == \'oneway\'">\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col col-9>\n\n          <ion-item>\n\n            <ion-label stacked color="primary">จุดรับ : </ion-label>\n\n            <ion-input type="text" [(ngModel)]="order.route.reception.item"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <button ion-fab mini (click)="goToMap(\'receiver\')">\n\n            <ion-icon item-right ios="ios-pin" md="md-pin"></ion-icon>\n\n          </button>\n\n          <!-- <ion-icon color="danger" item-right ios="ios-pin" md="md-pin" (click)="goToMap(\'receiver\')"></ion-icon> -->\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-9>\n\n          <ion-item>\n\n            <ion-label stacked color="primary">จุดส่ง : </ion-label>\n\n            <ion-input type="text" [(ngModel)]="order.route.send.item"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <button ion-fab mini (click)="goToMap(\'sender\')">\n\n            <ion-icon item-right ios="ios-pin" md="md-pin"></ion-icon>\n\n          </button>\n\n          <!-- <ion-icon color="danger" item-right ios="ios-pin" md="md-pin" (click)="goToMap(\'sender\')"></ion-icon> -->\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n\n\n  <!-- Roundtrip -->\n\n  <div *ngIf="order.route.routetype == \'roundtrip\'">\n\n    <ion-list>\n\n      <ion-row>\n\n        <ion-col col-9>\n\n          <ion-item>\n\n            <ion-label stacked color="primary">จุดรับ : </ion-label>\n\n            <ion-input type="text" [(ngModel)]="order.route.reception.item"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <button ion-fab mini (click)="goToMap(\'receiver\')">\n\n            <ion-icon item-right ios="ios-pin" md="md-pin"></ion-icon>\n\n          </button>\n\n          <!-- <ion-icon color="danger" item-right ios="ios-pin" md="md-pin" (click)="goToMap(\'receiver\')"></ion-icon> -->\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-9>\n\n          <ion-item>\n\n            <ion-label stacked color="primary">โรงเรียน : </ion-label>\n\n            <ion-input type="text" [(ngModel)]="order.route.school.item"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <button ion-fab mini (click)="goToMap(\'school\')">\n\n            <ion-icon item-right ios="ios-pin" md="md-pin"></ion-icon>\n\n          </button>\n\n          <!-- <ion-icon color="danger" item-right ios="ios-pin" md="md-pin" (click)="goToMap(\'school\')"></ion-icon> -->\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-9>\n\n          <ion-item>\n\n            <ion-label stacked color="primary">จุดส่ง : </ion-label>\n\n            <ion-input type="text" [(ngModel)]="order.route.send.item"></ion-input>\n\n          </ion-item>\n\n        </ion-col>\n\n        <ion-col col-3>\n\n          <button ion-fab mini (click)="goToMap(\'sender\')">\n\n            <ion-icon item-right ios="ios-pin" md="md-pin"></ion-icon>\n\n          </button>\n\n          <!-- <ion-icon color="danger" item-right ios="ios-pin" md="md-pin" (click)="goToMap(\'sender\')"></ion-icon> -->\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-list>\n\n  </div>\n\n  <div padding>\n\n    <button ion-button round block color="yellows" (click)="confirm()">Confirm</button>\n\n  </div>\n\n\n\n  <p>{{order.image}}</p>\n\n  <p>{{order.name}}</p>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\location\location.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1__providers_orderservice_orderservice__["a" /* OrderserviceProvider */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_register_register_model__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_register_register_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(46);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, app, authenService, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.authenService = authenService;
        this.auth = auth;
        this.dataProfile = new __WEBPACK_IMPORTED_MODULE_2__pages_register_register_model__["a" /* AuthorizeModel */];
        this.pImages = [];
        this.resImg = '';
        this.dataProfile = JSON.parse(window.localStorage.getItem('schollbus_user'));
        this.pImages = this.dataProfile.profileImageURL ? [this.dataProfile.profileImageURL] : [];
        console.log(this.dataProfile);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.logout = function () {
        this.auth.logout();
        window.localStorage.removeItem('schollbus_user');
        var user = JSON.parse(window.localStorage.getItem('schollbus_user'));
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    ProfilePage.prototype.resImageEvent = function (e) {
        this.resImg = e[0] ? e[0] : "";
        // this.resImg = './assets/image/noimage.png';
    };
    ProfilePage.prototype.editProfile = function () {
        var _this = this;
        // this.editProfile
        this.dataProfile.profileImageURL = this.resImg;
        this.authenService.updateUser(this.dataProfile).then(function (resp) {
            window.localStorage.setItem('schollbus_user', JSON.stringify(resp));
            _this.navCtrl.pop();
        }, function (error) {
            console.error(error);
        });
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-navbar>\n      <ion-title>Profile</ion-title>\n    </ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logout()">\n      <ion-icon name="md-log-out"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col col-3>\n\n      </ion-col>\n      <ion-col col-6>\n        <img class="autoHeight" src="http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png">\n      </ion-col>\n      <ion-col col-3>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n  <ion-upload-images [maximumImagesCount]="1" [images]="pImages" [isShowUpload]="false" (resImage)="resImageEvent($event)"></ion-upload-images>\n  <ion-item>\n    <ion-label stacked>Name</ion-label>\n    <ion-input type="text" value="{{dataProfile.firstName}}" [(ngModel)]="dataProfile.firstName"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label stacked>Last Name</ion-label>\n    <ion-input type="text" value="{{dataProfile.lastName}}" [(ngModel)]="dataProfile.lastName"></ion-input>\n  </ion-item>\n  <div>\n    <button ion-button block (click)="editProfile()">Save</button>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3__pages_register_register_service__["a" /* RegisterServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comment_comment__ = __webpack_require__(158);
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
            console.log(_this.datafeed);
        }).catch(function (err) {
            console.error(err);
        });
    };
    FeedPage.prototype.logout = function () {
        this.auth.logout();
        window.localStorage.removeItem('schollbus_user');
        var user = JSON.parse(window.localStorage.getItem('schollbus_user'));
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    FeedPage.prototype.updatelike = function (data) {
        var _this = this;
        var user = JSON.parse(window.localStorage.getItem('schollbus_user'));
        var isLike = true;
        this.likeChk = isLike;
        // console.log(this.likeChk);
        for (var i = 0; i < data.islike.length; i++) {
            if (data.islike[i].user === user._id) {
                isLike = false;
                this.likeChk = isLike;
                // console.log(this.likeChk);
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
    FeedPage.prototype.comment = function (feedId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__comment_comment__["a" /* CommentPage */], feedId);
    };
    return FeedPage;
}());
FeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-feed',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\feed\feed.html"*/'<!--\n\n  Generated template for the FeedPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only color="light">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Feed</ion-title>\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="logout()">\n\n        <ion-icon name="md-log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n\n\n  <!-- <ion-card >\n\n        \n\n        <ion-card-content>\n\n          <ion-card-title>\n\n              \n\n            </ion-card-title>\n\n          <p>\n\n            The most popular industrial group ever, and largely\n\n            responsible for bringing the music to a mass audience.\n\n          </p>\n\n        </ion-card-content>\n\n      </ion-card> -->\n\n\n\n\n\n\n\n  <ion-card *ngFor="let data of datafeed">\n\n    <ion-slides>\n\n      <ion-slide imgstyle *ngFor="let item of data.image">\n\n        <img src="{{item}}" imgSize>\n\n      </ion-slide>\n\n    </ion-slides>\n\n    <ion-card-content>\n\n      <h2>{{data.name}}</h2>\n\n    </ion-card-content>\n\n    <ion-row>\n\n      <ion-col text-left>\n\n        <button ion-button icon-left clear small (click)="updatelike(data)">\n\n          <ion-icon name="ios-heart" *ngIf="likeChk"></ion-icon>\n\n          <ion-icon name="ios-heart-outline" *ngIf="!likeChk"></ion-icon>\n\n        </button>\n\n        <button ion-button icon-left clear small (click)="comment(data._id)">\n\n            <ion-icon name="ios-chatbubbles-outline"></ion-icon>\n\n          </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n          <button ion-button icon-right clear small (click)="comment()">\n\n              <ion-icon name="md-share"></ion-icon>\n\n            </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\feed\feed.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_4__feed_service__["a" /* FeedServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */]])
], FeedPage);

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_feed_feed_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_feed_feed_model__ = __webpack_require__(473);
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
    function CommentPage(navCtrl, navParams, feedServiceProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.feedServiceProvider = feedServiceProvider;
        this.commentData = {
            user: {},
            comment: ''
        };
        this.dataComment = new __WEBPACK_IMPORTED_MODULE_3__pages_feed_feed_model__["a" /* FeedModel */];
        this.feedId = this.navParams.data;
    }
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad CommentPage');
    // }
    CommentPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // let user = JSON.parse(window.localStorage.getItem('schollbus_user'));
        // console.log(user);
        this.feedServiceProvider.getfeedId(this.feedId)
            .then(function (data) {
            console.log(data);
            _this.dataComment = data;
        }).catch(function (err) {
            console.error(err);
        });
    };
    CommentPage.prototype.createComment = function (data) {
        var _this = this;
        var user = JSON.parse(window.localStorage.getItem('schollbus_user'));
        data.user = user;
        console.log(data);
        if (data.comment != '') {
            this.feedServiceProvider.commentFeed(this.feedId, data).then(function (res) {
                // this.dataComment = res;
                // console.log(this.dataComment);
                data.comment = '';
                _this.ionViewWillEnter();
            }, function (err) {
                console.error(err);
            });
        }
    };
    return CommentPage;
}());
CommentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-comment',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\comment\comment.html"*/'<!--\n\n  Generated template for the CommentPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Comment</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <!-- <ion-list>\n\n    <ion-item *ngFor="let comment of dataComment.comments">\n\n      <ion-row>\n\n        <ion-col col-8 text-left>\n\n          <p>{{comment.user}}</p>\n\n        </ion-col>\n\n        <ion-col col-4 text-right>\n\n          <p>{{comment.created | moment}}\n\n        </ion-col>\n\n        <ion-col col-12>\n\n          <p>{{comment.comment}}</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list> -->\n\n  <div class="borderLine" *ngFor="let comment of dataComment.comments">\n\n    <ion-row>\n\n      <ion-col col-8 text-left>\n\n        <p>{{comment.user.displayName}}</p>\n\n      </ion-col>\n\n      <ion-col col-4 text-right>\n\n        <p>{{comment.created | moment}}</p>\n\n      </ion-col>\n\n      <ion-col col-12>\n\n        <span class="fontWeight">{{comment.comment}}</span>\n\n      </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-input item-start type="text" placeholder="Comment here" [(ngModel)]="commentData.comment"></ion-input>\n\n\n\n      <button item-end ion-button small round outline (click)="createComment(commentData)">Comment</button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\comment\comment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__pages_feed_feed_service__["a" /* FeedServiceProvider */]])
], CommentPage);

//# sourceMappingURL=comment.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addchild_addchild__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_model__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(35);
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
        this.pImages = [];
        this.resImg = '';
        this.signup = this.navParams.data;
        // alert(JSON.stringify(this.signup));
        this.pImages = this.signup.profileImageURL ? [this.signup.profileImageURL] : [];
        console.log(this.signup);
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        this.slider.lockSwipeToNext(true);
        this.slider.lockSwipeToPrev(true);
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.resImageEvent = function (e) {
        alert(e[0]);
        this.resImg = e[0] ? e[0] : "";
        // this.resImg = './assets/image/noimage.png';
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
        this.signup.profileImageURL = this.resImg;
        this.user = this.signup;
        // this.user.profileImageURL = 'http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png';
        console.log(this.user);
        if (this.signup.password === this.signup.confirmpassword) {
            window.localStorage.setItem('sch-pass-v2', JSON.stringify(this.signup.password));
            this.auth.signUp(this.user).subscribe(function (data) {
                // alert(JSON.stringify(data));
                _this.loading.dismiss();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__addchild_addchild__["a" /* AddchildPage */]);
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
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Slides */]) === "function" && _a || Object)
], RegisterPage.prototype, "slider", void 0);
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Register</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding class="masters">\n\n\n\n  <ion-slides #slider>\n\n\n\n    <ion-slide>\n\n      <div padding>\n\n          <ion-upload-images [maximumImagesCount]="1" [images]="pImages" [isShowUpload]="false" (resImage)="resImageEvent($event)"></ion-upload-images>\n\n          \n\n        <!-- <div (click)="uploadImage()" *ngIf="signup.profileImageURL">\n\n          <img src="./assets/camera.png" style="width:150px">\n\n          <img src="{{signup.profileImageURL}}" style="width:150px; border-radius: 50%;">\n\n        </div>\n\n        <div (click)="uploadImage()" *ngIf="!signup.profileImageURL">\n\n          <img src="./assets/camera.png" style="width:150px">\n\n          <img src="{{signup.profileImageURL}}">\n\n        </div> -->\n\n\n\n        <!-- <ion-icon name="camera"></ion-icon> -->\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/Icon-user.png">\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Name" [(ngModel)]="signup.firstName"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/Icon-user.png">\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Last Name" [(ngModel)]="signup.lastName"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/Phone.png">\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Phone" [(ngModel)]="signup.phone"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/mail.png">\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Email" [(ngModel)]="signup.email"></ion-input>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n          <ion-label stacked> Image</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.profileImageURL"></ion-input>\n\n        </ion-item> -->\n\n        <!-- <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-person"></ion-icon> Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.firstName"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-person"></ion-icon> Last Name</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.lastName"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-call"></ion-icon> Phone</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.phone"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-mail"></ion-icon> Email</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.email"></ion-input>\n\n        </ion-item> -->\n\n        <!-- <button ion-button round block color="yellows" (click)="register(signup)">CONFIRM</button> -->\n\n        <div>\n\n          <button ion-button round block color="yellows" (click)="nextRegister(user)">CONFIRM</button>\n\n        </div>\n\n      </div>\n\n    </ion-slide>\n\n\n\n    <ion-slide>\n\n      <div padding>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/Icon-user.png">\n\n          </ion-label>\n\n          <ion-input type="text" placeholder="Username" [(ngModel)]="signup.username"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/password.png">\n\n          </ion-label>\n\n          <ion-input type="password" placeholder="Password" [(ngModel)]="signup.password"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label>\n\n            <img src="./assets/icon/cf-pass.png">\n\n          </ion-label>\n\n          <ion-input type="password" placeholder="Confirm Password" [(ngModel)]="signup.confirmpassword"></ion-input>\n\n        </ion-item>\n\n        <!-- <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-person"></ion-icon> Username</ion-label>\n\n          <ion-input type="text" [(ngModel)]="signup.username"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-lock"></ion-icon> Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="signup.password"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>\n\n            <ion-icon name="md-checkmark"></ion-icon> Confirm Password</ion-label>\n\n          <ion-input type="password" [(ngModel)]="signup.confirmpassword"></ion-input>\n\n        </ion-item> -->\n\n        <div class="marginT200">\n\n          <button ion-button round block color="yellows" (click)="register(signup)">CONFIRM</button>\n\n        </div>\n\n      </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__register_service__["a" /* RegisterServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__register_service__["a" /* RegisterServiceProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _h || Object])
], RegisterPage);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgreementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
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
 * Generated class for the AgreementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AgreementPage = (function () {
    function AgreementPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AgreementPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgreementPage');
    };
    AgreementPage.prototype.agree = function () {
        window.localStorage.setItem('isAgree', JSON.stringify(true));
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return AgreementPage;
}());
AgreementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-agreement',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\agreement\agreement.html"*/'<!--\n\n  Generated template for the AgreementPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Agreement</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-card-content>\n\n    <h4>ข้อตกลงและเงื่อนไขในการให้บริการ</h4>\n\n    <p>ข้อตกลงและเงื่อนไขในการให้บริการแอพพลิเคชั่น SchoolBus เพื่อปกป้องสิทธิของผู้ใช้บริการ โปรดอ่านเงื่อนไขการให้บริการทั้งหมดและตกลงที่จะปฏิบัติตามข้อตกลงและเงื่อนไขทั้งหมดต่อไปนี้</p>\n\n    <p>\n\n      ข้อ 1 ขอบเขตของข้อตกลงและเงื่อนไขการใช้บริการ ข้อตกลงและเงื่อนไขการให้บริการนี้ทำขึ้นระหว่าง บริษัทไซเบอร์ แอดวานซ์ ซิสเต็ม\n\n      แอน เน็ตเวิร์ค จำกัด ซึ่งต่อไปนี้จะเรียกว่า “บริษัท” ซึ่งเป็นผู้ผลิตแอพพลิเคชั่นหรือเป็นผู้ที่ได้รับลิขสิทธิ์ในการให้บริการแอพพลิเคชั่น\n\n      เพื่อกำหนดข้อตกลงและเงื่อนไขการให้บริการระหว่างผู้เข้ามาใช้บริการ ซึ่งต่อไปนี้จะเรียกว่า “ผู้ใช้บริการ” โดยจะใช้บริการแอพพลิเคชั่นของบริษัท\n\n      ซึ่งต่อไปนี้จะเรียกว่า “บริการ”\n\n    </p>\n\n    <p>\n\n      ข้อ 2 การยอมรับข้อตกลงและเงื่อนไขการใช้บริการ ผู้ใช้บริการจะต้องตกลงและปฏิบัติตามเงื่อนไขซึ่งปรากฏอยู่บนเงื่อนไขการเป็นสมาชิกบริการและเงื่อนไขการใช้บริการฉบับนี้\n\n      หรือในฉบับแก้ไขเพิ่มเติมอันอาจจะมีขึ้นในภายหน้า และการที่ท่านได้ตกลงในการใช้บริการของ บริษัท ถือว่าท่านได้ยินยอมและเห็นด้วยกับข้อตกลงและเงื่อนไขการให้บริการฉบับนี้แล้ว\n\n    </p>\n\n    <p>\n\n      2.1 เงื่อนไขการเป็นสมาชิกและเงื่อนไขการให้บริการแอพพลิเคชั่นฉบับนี้เป็นไปตามตามเงื่อนไขการเป็นสมาชิกและเงื่อนไขการให้บริการแอพพิเคชั่นของสัญญาการให้บริการแอพพลิเคชั่นมือถือ\n\n      หากผู้ใช้บริการยอมรับต่อคำถาม ถือว่าผู้ใช้บริการได้ยอมรับเงื่อนไขการให้บริการ และถือว่าเงื่อนไขการเป็นสมาชิก และเงื่อนไขการให้บริการแอพพลิเคชั่นนี้มีผลบังคับใช้\n\n    </p>\n\n    <p>\n\n      2.2 บริษัทสามารถเปลี่ยนแปลงตามเงื่อนไขการเป็นสมาชิกและเงื่อนไขการให้บริการได้ตามความเหมาะสมและเงื่อนไขการให้บริการที่มีการเปลี่ยนแปลงจะถูกประกาศให้ทราบบนแอพพลิเคชั่น\n\n      SchoolBus\n\n    </p>\n\n    <p>\n\n      2.3 ผู้ใช้บริการมีหน้าที่ต้องเข้าไปเยี่ยมชมแอพพลิเคชั่นป็นระยะและตรวจสอบเนื้อหาข้อตกลงที่มีการเปลี่ยนแปลงและได้ประกาศไว้แล้ว\n\n      หากผู้ใช้บริการได้มีการเข้าใช้บริการหลังจากมีการประกาศเปลี่ยนแปลงไปแล้ว ถือว่าท่านได้ยอมรับและเห็นด้วยในการเปลี่ยนแปลงในเนื้อหาดังกล่าวนั้น\n\n      และทางบริษัทจะไม่รับผิดชอบต่อความเสียหายใดๆของผู้ใช้บริการ อันเกิดจากการไม่ทราบเนื้อหาประกาศของข้อตกลงนั้นๆ\n\n    </p>\n\n    <p>\n\n      2.4 ผู้ใช้บริการที่อายุยังไม่ถึง 15 ปีบริบูรณ์ในวันที่ใช้บริการจะต้องมีผู้ปกครอง (ผู้แทนโดยชอบธรรม หรือผู้ปกครอง) ของผู้ใช้บริการ\n\n      ในการดูแล ยินยอม หรือให้คำแนะนำ เพื่อทำความเข้าใจในข้อตกลงและเงื่อนไขการให้บริการ ทั้งนี้เพื่อความสะดวกในการใช้บริการให้ถือว่าวันที่ผู้ช้บริการได้ทำการยอมรับข้อตกลงและเงื่อนไขการให้บริการของบริษัทแล้วนั้น\n\n      ให้ถือเป็นการยอมรับและอนุญาตในข้อตกลงเงื่อนไขการให้บริการของผู้ปกครองแล้วโดยปริยาย\n\n    </p>\n\n    <p>\n\n      2.5 ผู้ใช้บริการ จะต้องขอลงทะเบียนเป็นผู้ใช้บริการ โดยกรอกข้อมูลชื่อนามสกุลและข้อมูลส่วนตัวตามความเป็นจริง ของผู้ใช้บริการ\n\n      และดำเนินตามขั้นตอนการขอเป็นผู้ใช้บริการด้วยข้อมูลที่เป็นความจริง\n\n    </p>\n\n  </ion-card-content>\n\n  <button ion-button block (click)="agree()">ดำเนินการต่อ</button>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\agreement\agreement.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AgreementPage);

//# sourceMappingURL=agreement.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModel; });
/* unused harmony export routeModel */
/* unused harmony export mapModel */
/* unused harmony export OrderListModel */
var LocationModel = (function () {
    function LocationModel() {
        this.route = new routeModel();
    }
    return LocationModel;
}());

var routeModel = (function () {
    function routeModel() {
        this.reception = new mapModel();
        this.school = new mapModel();
        this.send = new mapModel();
    }
    return routeModel;
}());

var mapModel = (function () {
    function mapModel() {
    }
    return mapModel;
}());

var OrderListModel = (function () {
    function OrderListModel() {
    }
    return OrderListModel;
}());

//# sourceMappingURL=location.model.js.map

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-address/add-address.module": [
		580,
		12
	],
	"../pages/addchild/addchild.module": [
		581,
		11
	],
	"../pages/agreement/agreement.module": [
		582,
		10
	],
	"../pages/comment/comment.module": [
		583,
		9
	],
	"../pages/feed/feed.module": [
		584,
		8
	],
	"../pages/location/location.module": [
		585,
		7
	],
	"../pages/login/login.module": [
		586,
		6
	],
	"../pages/map/map.module": [
		587,
		5
	],
	"../pages/notification/notification.module": [
		588,
		4
	],
	"../pages/profile/profile.module": [
		589,
		3
	],
	"../pages/register/register.module": [
		590,
		2
	],
	"../pages/selectlocation/selectlocation.module": [
		591,
		1
	],
	"../pages/tab-nav/tab-nav.module": [
		592,
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
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 215:
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

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return credentialModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizeModel; });
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

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(55);
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

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_contants__ = __webpack_require__(472);
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
        window.localStorage.setItem('token', JSON.parse(window.localStorage.getItem('schollbus_user')).loginToken);
        return user || {};
    };
    AuthProvider.prototype.createAuthorizationHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var token = window.localStorage.getItem('token');
        headers.append("Authorization", "Bearer " + token);
        return headers;
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectlocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_address_add_address__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
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

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(441);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_addchild_addchild__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_walkthrough_walkthrough__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_selectlocation_selectlocation__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_register_register_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_register_register__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_address_add_address__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_feed_feed__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tab_nav_tab_nav__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_location_location__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_maps__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_native_geocoder__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_feed_feed_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_coreservice_coreservice__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_comment_comment__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_orderservice_orderservice__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pipes_moment_moment__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_agreement_agreement__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_ion_upload_image_ion_upload_image__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_image_picker__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_base64__ = __webpack_require__(579);
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
    Object(__WEBPACK_IMPORTED_MODULE_14__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tab_nav_tab_nav__["a" /* TabNavPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_address_add_address__["a" /* AddAddressPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_selectlocation_selectlocation__["a" /* SelectlocationPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_comment_comment__["a" /* CommentPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_addchild_addchild__["a" /* AddchildPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_agreement_agreement__["a" /* AgreementPage */],
            __WEBPACK_IMPORTED_MODULE_30__pipes_moment_moment__["a" /* MomentPipe */],
            __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_33__components_ion_upload_image_ion_upload_image__["a" /* IonUploadImagesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_20__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/add-address/add-address.module#AddAddressPageModule', name: 'AddAddressPage', segment: 'add-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addchild/addchild.module#AddchildPageModule', name: 'AddchildPage', segment: 'addchild', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/agreement/agreement.module#AgreementPageModule', name: 'AgreementPage', segment: 'agreement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/comment/comment.module#CommentPageModule', name: 'CommentPage', segment: 'comment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feed/feed.module#FeedPageModule', name: 'FeedPage', segment: 'feed', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/selectlocation/selectlocation.module#SelectlocationPageModule', name: 'SelectlocationPage', segment: 'selectlocation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab-nav/tab-nav.module#TabNavPageModule', name: 'TabNavPage', segment: 'tab-nav', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tab_nav_tab_nav__["a" /* TabNavPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_add_address_add_address__["a" /* AddAddressPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_notification_notification__["a" /* NotificationPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */],
            __WEBPACK_IMPORTED_MODULE_3__pages_selectlocation_selectlocation__["a" /* SelectlocationPage */],
            __WEBPACK_IMPORTED_MODULE_2__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_comment_comment__["a" /* CommentPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_addchild_addchild__["a" /* AddchildPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_agreement_agreement__["a" /* AgreementPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile__["a" /* ProfilePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login_service__["a" /* LoginServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__pages_register_register_service__["a" /* RegisterServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_google_maps__["b" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_26__pages_feed_feed_service__["a" /* FeedServiceProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_14__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_15_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_coreservice_coreservice__["a" /* CoreserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_27__providers_coreservice_coreservice__["a" /* CoreserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_29__providers_orderservice_orderservice__["a" /* OrderserviceProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_nav_tab_nav__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_model__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(14);
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
        this.credential = new __WEBPACK_IMPORTED_MODULE_3__login_model__["b" /* credentialModel */]();
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
    LoginPage.prototype.doLogin = function () {
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

/***/ 472:
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

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedModel; });
/* unused harmony export CommentModel */
/* unused harmony export IsLikeModel */
var FeedModel = (function () {
    function FeedModel() {
    }
    return FeedModel;
}());

var CommentModel = (function () {
    function CommentModel() {
    }
    return CommentModel;
}());

var IsLikeModel = (function () {
    function IsLikeModel() {
    }
    return IsLikeModel;
}());

//# sourceMappingURL=feed.model.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
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

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tab_nav_tab_nav__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login_model__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_agreement_agreement__ = __webpack_require__(160);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_agreement_agreement__["a" /* AgreementPage */];
        this.user = new __WEBPACK_IMPORTED_MODULE_8__pages_login_login_model__["a" /* AuthorizeModel */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        var isAgree = window.localStorage.getItem('isAgree') ? JSON.parse(window.localStorage.getItem('isAgree')) : false;
        if (isAgree) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_1__pages_login_login__["a" /* LoginPage */];
        }
        this.configFirebase();
        this.user = JSON.parse(window.localStorage.getItem('schollbus_user'));
        if (this.user) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_tab_nav_tab_nav__["a" /* TabNavPage */];
        }
    }
    MyApp.prototype.configFirebase = function () {
        var config = {
            apiKey: "AIzaSyAIjuU99uz_H4Er6J6Xsja48SMpLmuoZ5o",
            authDomain: "schoolbus-cnet.firebaseapp.com",
            databaseURL: "https://schoolbus-cnet.firebaseio.com/",
            projectId: "schoolbus-cnet",
            storageBucket: "schoolbus-cnet.appspot.com",
            messagingSenderId: "356749167374"
        };
        __WEBPACK_IMPORTED_MODULE_7_firebase__["initializeApp"](config);
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_0__providers_auth_auth__["a" /* AuthProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MomentPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


__WEBPACK_IMPORTED_MODULE_1_moment__["locale"]('th-th');
/**
 * Generated class for the MomentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var MomentPipe = (function () {
    function MomentPipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    MomentPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).fromNow();
    };
    return MomentPipe;
}());
MomentPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'moment',
    })
], MomentPipe);

// return moment(value).locale(Constants.locale).fromNow();
//# sourceMappingURL=moment.js.map

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 302,
	"./af.js": 302,
	"./ar": 303,
	"./ar-dz": 304,
	"./ar-dz.js": 304,
	"./ar-kw": 305,
	"./ar-kw.js": 305,
	"./ar-ly": 306,
	"./ar-ly.js": 306,
	"./ar-ma": 307,
	"./ar-ma.js": 307,
	"./ar-sa": 308,
	"./ar-sa.js": 308,
	"./ar-tn": 309,
	"./ar-tn.js": 309,
	"./ar.js": 303,
	"./az": 310,
	"./az.js": 310,
	"./be": 311,
	"./be.js": 311,
	"./bg": 312,
	"./bg.js": 312,
	"./bm": 313,
	"./bm.js": 313,
	"./bn": 314,
	"./bn.js": 314,
	"./bo": 315,
	"./bo.js": 315,
	"./br": 316,
	"./br.js": 316,
	"./bs": 317,
	"./bs.js": 317,
	"./ca": 318,
	"./ca.js": 318,
	"./cs": 319,
	"./cs.js": 319,
	"./cv": 320,
	"./cv.js": 320,
	"./cy": 321,
	"./cy.js": 321,
	"./da": 322,
	"./da.js": 322,
	"./de": 323,
	"./de-at": 324,
	"./de-at.js": 324,
	"./de-ch": 325,
	"./de-ch.js": 325,
	"./de.js": 323,
	"./dv": 326,
	"./dv.js": 326,
	"./el": 327,
	"./el.js": 327,
	"./en-au": 328,
	"./en-au.js": 328,
	"./en-ca": 329,
	"./en-ca.js": 329,
	"./en-gb": 330,
	"./en-gb.js": 330,
	"./en-ie": 331,
	"./en-ie.js": 331,
	"./en-nz": 332,
	"./en-nz.js": 332,
	"./eo": 333,
	"./eo.js": 333,
	"./es": 334,
	"./es-do": 335,
	"./es-do.js": 335,
	"./es-us": 336,
	"./es-us.js": 336,
	"./es.js": 334,
	"./et": 337,
	"./et.js": 337,
	"./eu": 338,
	"./eu.js": 338,
	"./fa": 339,
	"./fa.js": 339,
	"./fi": 340,
	"./fi.js": 340,
	"./fo": 341,
	"./fo.js": 341,
	"./fr": 342,
	"./fr-ca": 343,
	"./fr-ca.js": 343,
	"./fr-ch": 344,
	"./fr-ch.js": 344,
	"./fr.js": 342,
	"./fy": 345,
	"./fy.js": 345,
	"./gd": 346,
	"./gd.js": 346,
	"./gl": 347,
	"./gl.js": 347,
	"./gom-latn": 348,
	"./gom-latn.js": 348,
	"./gu": 349,
	"./gu.js": 349,
	"./he": 350,
	"./he.js": 350,
	"./hi": 351,
	"./hi.js": 351,
	"./hr": 352,
	"./hr.js": 352,
	"./hu": 353,
	"./hu.js": 353,
	"./hy-am": 354,
	"./hy-am.js": 354,
	"./id": 355,
	"./id.js": 355,
	"./is": 356,
	"./is.js": 356,
	"./it": 357,
	"./it.js": 357,
	"./ja": 358,
	"./ja.js": 358,
	"./jv": 359,
	"./jv.js": 359,
	"./ka": 360,
	"./ka.js": 360,
	"./kk": 361,
	"./kk.js": 361,
	"./km": 362,
	"./km.js": 362,
	"./kn": 363,
	"./kn.js": 363,
	"./ko": 364,
	"./ko.js": 364,
	"./ky": 365,
	"./ky.js": 365,
	"./lb": 366,
	"./lb.js": 366,
	"./lo": 367,
	"./lo.js": 367,
	"./lt": 368,
	"./lt.js": 368,
	"./lv": 369,
	"./lv.js": 369,
	"./me": 370,
	"./me.js": 370,
	"./mi": 371,
	"./mi.js": 371,
	"./mk": 372,
	"./mk.js": 372,
	"./ml": 373,
	"./ml.js": 373,
	"./mr": 374,
	"./mr.js": 374,
	"./ms": 375,
	"./ms-my": 376,
	"./ms-my.js": 376,
	"./ms.js": 375,
	"./my": 377,
	"./my.js": 377,
	"./nb": 378,
	"./nb.js": 378,
	"./ne": 379,
	"./ne.js": 379,
	"./nl": 380,
	"./nl-be": 381,
	"./nl-be.js": 381,
	"./nl.js": 380,
	"./nn": 382,
	"./nn.js": 382,
	"./pa-in": 383,
	"./pa-in.js": 383,
	"./pl": 384,
	"./pl.js": 384,
	"./pt": 385,
	"./pt-br": 386,
	"./pt-br.js": 386,
	"./pt.js": 385,
	"./ro": 387,
	"./ro.js": 387,
	"./ru": 388,
	"./ru.js": 388,
	"./sd": 389,
	"./sd.js": 389,
	"./se": 390,
	"./se.js": 390,
	"./si": 391,
	"./si.js": 391,
	"./sk": 392,
	"./sk.js": 392,
	"./sl": 393,
	"./sl.js": 393,
	"./sq": 394,
	"./sq.js": 394,
	"./sr": 395,
	"./sr-cyrl": 396,
	"./sr-cyrl.js": 396,
	"./sr.js": 395,
	"./ss": 397,
	"./ss.js": 397,
	"./sv": 398,
	"./sv.js": 398,
	"./sw": 399,
	"./sw.js": 399,
	"./ta": 400,
	"./ta.js": 400,
	"./te": 401,
	"./te.js": 401,
	"./tet": 402,
	"./tet.js": 402,
	"./th": 403,
	"./th.js": 403,
	"./tl-ph": 404,
	"./tl-ph.js": 404,
	"./tlh": 405,
	"./tlh.js": 405,
	"./tr": 406,
	"./tr.js": 406,
	"./tzl": 407,
	"./tzl.js": 407,
	"./tzm": 408,
	"./tzm-latn": 409,
	"./tzm-latn.js": 409,
	"./tzm.js": 408,
	"./uk": 410,
	"./uk.js": 410,
	"./ur": 411,
	"./ur.js": 411,
	"./uz": 412,
	"./uz-latn": 413,
	"./uz-latn.js": 413,
	"./uz.js": 412,
	"./vi": 414,
	"./vi.js": 414,
	"./x-pseudo": 415,
	"./x-pseudo.js": 415,
	"./yo": 416,
	"./yo.js": 416,
	"./zh-cn": 417,
	"./zh-cn.js": 417,
	"./zh-hk": 418,
	"./zh-hk.js": 418,
	"./zh-tw": 419,
	"./zh-tw.js": 419
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 577;

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonUploadImagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_image_picker__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the IonUploadImageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IonUploadImagesComponent = (function () {
    function IonUploadImagesComponent(imagePicker, loading) {
        this.imagePicker = imagePicker;
        this.loading = loading;
        this.images = [];
        this.resImage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        console.log('Hello IonUploadImageComponent Component');
    }
    IonUploadImagesComponent.prototype.onRemove = function (i) {
        if (this.images.length > 1) {
            this.formSlideImages.slidePrev();
        }
        this.images.splice(i, 1);
        this.resImage.emit(this.images);
    };
    IonUploadImagesComponent.prototype.onUpload = function () {
        var _this = this;
        var options = {
            maximumImagesCount: this.maximumImagesCount,
            width: 900,
            quality: 30,
            outputType: 1
        };
        this.imagePicker.getPictures(options).then(function (results) {
            var loading = [];
            var loadingCount = 0;
            for (var i = 0; i < results.length; i++) {
                loading.push(_this.loading.create({
                    content: (i + 1) + '/' + (results.length),
                    cssClass: "loading-upload",
                    showBackdrop: false
                }));
                loading[i].present();
                _this.uploadImage(results[i]).then(function (resUrl) {
                    _this.images.push(resUrl);
                    _this.resImage.emit(_this.images);
                    setTimeout(function () {
                        loading[loadingCount].dismiss();
                        loadingCount++;
                    }, 1000);
                }, function (error) {
                    loading[loadingCount].dismiss();
                    loadingCount++;
                    alert('Upload Fail. ' + JSON.stringify(error));
                });
            }
        }, function (err) { });
    };
    IonUploadImagesComponent.prototype.uploadImage = function (imageString) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var filename = Math.floor((Date.now() / 1000) + new Date().getUTCMilliseconds());
        var imageRef = storageRef.child("images/" + filename + ".jpg");
        var parseUpload;
        return new Promise(function (resolve, reject) {
            parseUpload = imageRef.putString('data:image/jpeg;base64,' + imageString, 'data_url');
            parseUpload.on('state_changed', function (_snapshot) {
                var progress = (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (_snapshot.state) {
                    case __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskState.PAUSED:
                        console.log('Upload is paused');
                        break;
                    case __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"].TaskState.RUNNING:
                        console.log('Upload is running');
                        break;
                }
            }, function (_err) {
                reject(_err);
            }, function (success) {
                resolve(parseUpload.snapshot.downloadURL);
            });
        });
    };
    return IonUploadImagesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('formSlideImages'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* Slides */])
], IonUploadImagesComponent.prototype, "formSlideImages", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Array)
], IonUploadImagesComponent.prototype, "images", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Boolean)
], IonUploadImagesComponent.prototype, "isShowUpload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", Object)
], IonUploadImagesComponent.prototype, "maximumImagesCount", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
], IonUploadImagesComponent.prototype, "resImage", void 0);
IonUploadImagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'ion-upload-images',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\components\ion-upload-image\ion-upload-image.html"*/'<!-- Generated template for the IonUploadImageComponent component -->\n<div *ngIf="images.length === 0">\n    <img (click)="onUpload()" src="./assets/image/uploadImg.png">\n</div>\n\n<div *ngIf="images.length > 0">\n  <ion-slides #formSlideImages pager="true">\n    <ion-slide *ngFor="let item of images; let i = index;">\n      <img id="maxImage" src="{{ item }}">\n      <div id="fixPosition">\n          <ion-icon id="iconTrash" name="ios-trash" (click)="onRemove(i)"></ion-icon>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</div>\n\n<button *ngIf="isShowUpload" ion-button block (click)="onUpload()">Upload Image</button>'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\components\ion-upload-image\ion-upload-image.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
], IonUploadImagesComponent);

//# sourceMappingURL=ion-upload-image.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addchild_addchild__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_orderservice_orderservice__ = __webpack_require__(95);
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
    function AddAddressPage(navCtrl, navParams, orderService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderService = orderService;
        this.orders = [];
    }
    AddAddressPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad AddAddressPage');
        this.loadOrder();
    };
    AddAddressPage.prototype.loadOrder = function () {
        var _this = this;
        this.orderService.getOrderList().then(function (data) {
            _this.orders = data;
        }, function (err) {
            console.log(err);
        });
    };
    AddAddressPage.prototype.toProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    AddAddressPage.prototype.selectLocation = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__addchild_addchild__["a" /* AddchildPage */]);
    };
    return AddAddressPage;
}());
AddAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-add-address',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\add-address\add-address.html"*/'<!--\n\n  Generated template for the AddAddressPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-buttons start>\n\n      <button ion-button icon-only (click)="toProfile()">\n\n        <ion-icon name="contact"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title>Address</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="masters">\n\n  <ion-list>\n\n    <ion-item *ngFor="let itm of orders">\n\n      <ion-thumbnail item-left>\n\n        <img src="{{itm}}">\n\n      </ion-thumbnail>\n\n      <p *ngIf="itm.reception !== \'\'">จุดรับ : {{itm.reception}}</p>\n\n      <p *ngIf="itm.school !== \'\'">โรงเรียน : {{itm.school}}</p>\n\n      <p *ngIf="itm.send !== \'\'">จุดส่ง : {{itm.send}}</p>\n\n\n\n    </ion-item>\n\n  </ion-list>\n\n  <ion-fab right bottom>\n\n    <button ion-fab color="yellows" (click)="selectLocation()">\n\n      <ion-icon name="md-add"></ion-icon>\n\n    </button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\add-address\add-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_orderservice_orderservice__["a" /* OrderserviceProvider */]])
], AddAddressPage);

//# sourceMappingURL=add-address.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddchildPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_location_model__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__location_location__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
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
 * Generated class for the AddchildPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddchildPage = (function () {
    function AddchildPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order = new __WEBPACK_IMPORTED_MODULE_0__location_location_model__["a" /* LocationModel */]();
    }
    AddchildPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddchildPage');
    };
    AddchildPage.prototype.gotoLocation = function () {
        window.localStorage.setItem('childname', this.order.name);
        window.localStorage.setItem('childimage', this.order.image);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__location_location__["a" /* LocationPage */], {
            daya: this.order
        });
    };
    return AddchildPage;
}());
AddchildPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-addchild',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\addchild\addchild.html"*/'<!--\n\n  Generated template for the AddchildPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>addchild</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n  <ion-item>\n\n    <ion-label fixed>IMG : </ion-label>\n\n    <ion-input type="text" [(ngModel)]="order.image"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label fixed > NAME : </ion-label>\n\n    <ion-input type="text"  [(ngModel)]="order.name"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block (click)="gotoLocation()">NEXT</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\addchild\addchild.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */]])
], AddchildPage);

//# sourceMappingURL=addchild.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(259);
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
    function MapPage(viewCtrl, zone, navCtrl, modalCtrl, googleMaps, geolocation, alertCtrl, navParams, nativeGeocoder) {
        this.viewCtrl = viewCtrl;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.googleMaps = googleMaps;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.nativeGeocoder = nativeGeocoder;
        this.isMapSelected = true;
        this.latitude = 0;
        this.longitude = 0;
        this.isMap = true;
        this.service = new google.maps.places.AutocompleteService();
        this.type = this.navParams.data;
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
        this.address = {
            place: ''
        };
        this.map = __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMap */];
    }
    MapPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.lat = resp.coords.latitude;
            _this.lng = resp.coords.longitude;
            _this.latitude = _this.lat;
            _this.longitude = _this.lng;
            _this.nativeGeocoder.reverseGeocode(_this.lat, _this.lng)
                .then(function (result) {
                // alert(JSON.stringify(result))
                _this.item = result.subThoroughfare + ' ' + result.thoroughfare + ' ' + result.locality + ' ' + result.subAdministrativeArea + ' ' + result.administrativeArea + ' ' + result.postalCode;
                _this.getmap();
            })
                .catch(function (error) { return console.log(error); });
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    MapPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MapPage.prototype.chooseItem = function (item) {
        this.geo = item;
        this.autocomplete.query = item;
        this.isMapSelected = false;
        this.geoCode(this.geo, item); //convert Address to lat and long
    };
    MapPage.prototype.updateSearch = function () {
        this.isMapSelected = true;
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var me = this;
        this.service.getPlacePredictions({ input: this.autocomplete.query, componentRestrictions: { country: 'TH' } }, function (predictions, status) {
            me.autocompleteItems = [];
            me.zone.run(function () {
                predictions.forEach(function (prediction) {
                    me.autocompleteItems.push(prediction.description);
                });
            });
        });
    };
    //convert Address string to lat and long
    MapPage.prototype.geoCode = function (address, item) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': address }, function (results, status) {
            _this.latitude = results[0].geometry.location.lat();
            _this.longitude = results[0].geometry.location.lng();
            _this.lat = _this.latitude;
            _this.lng = _this.longitude;
            // alert("lat: " + this.latitude + ", long: " + this.longitude);
            _this.item = item;
            _this.getmap();
        });
    };
    MapPage.prototype.getmap = function () {
        var _this = this;
        if (!this.isMap) {
            this.map.empty('map_canvas');
            this.map = __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMap */];
        }
        var mapOptions = {
            camera: {
                target: {
                    lat: this.lat,
                    lng: this.lng
                },
                zoom: 18,
                tilt: 30
            }
        };
        this.map = this.googleMaps.create('map_canvas', mapOptions);
        this.map.one(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log('Map is ready!');
            _this.map.addMarker({
                title: _this.item,
                icon: 'blue',
                animation: 'DROP',
                position: {
                    lat: _this.lat,
                    lng: _this.lng
                }
            })
                .then(function (marker) {
                marker.showInfoWindow();
                _this.isMap = false;
                marker.on(__WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    _this.showPrompt();
                });
            });
        });
    };
    MapPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Information',
            inputs: [
                {
                    name: 'place',
                    value: this.item
                },
                {
                    name: 'name',
                    placeholder: 'Name'
                },
                {
                    name: 'tel',
                    placeholder: 'Tel'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    cssClass: 'btnCn',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    cssClass: 'btnSv',
                    handler: function (res) {
                        console.log('Saved clicked');
                        var data = { item: res.place, lat: _this.latitude, long: _this.longitude, tel: res.tel, contact: res.name };
                        var resultsData = window.localStorage.getItem('order') ? JSON.parse(window.localStorage.getItem('order')) : {};
                        if (_this.type === 'sender') {
                            resultsData.route.send = data;
                            window.localStorage.setItem('order', JSON.stringify(resultsData));
                        }
                        if (_this.type === 'receiver') {
                            resultsData.route.reception = data;
                            window.localStorage.setItem('order', JSON.stringify(resultsData));
                        }
                        if (_this.type === 'school') {
                            resultsData.route.school = data;
                            window.localStorage.setItem('order', JSON.stringify(resultsData));
                        }
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        prompt.present();
    };
    return MapPage;
}());
MapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-map',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\map\map.html"*/'<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-toolbar>\n\n      <ion-searchbar [(ngModel)]="autocomplete.query" [showCancelButton]="false" (ionInput)="updateSearch()"></ion-searchbar>\n\n    </ion-toolbar>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<!-- <ion-content class="masters"> -->\n\n\n\n<ion-content>\n\n  <ion-list *ngIf="isMapSelected">\n\n    <ion-item *ngFor="let item of autocompleteItems" tappable (click)="chooseItem(item)">\n\n      {{ item }}\n\n    </ion-item>\n\n  </ion-list>\n\n  <div id="map_canvas"></div>\n\n  <!-- </ion-content> -->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\map\map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["b" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], MapPage);

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabNavPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_notification__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_address_add_address__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feed_feed__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(35);
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
    TabNavPage.prototype.getSelectedTab = function () {
        return 1;
    };
    return TabNavPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* Tabs */])
], TabNavPage.prototype, "tabRef", void 0);
TabNavPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-tab-nav',template:/*ion-inline-start:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\tab-nav\tab-nav.html"*/'<ion-tabs #myTabs selectedIndex="{{getSelectedTab()}}">\n\n  <ion-tab [root]="feedRoot" tabTitle="กระดานข่าว" tabIcon="ios-list"></ion-tab>\n\n  <ion-tab [root]="addAddressRoot" tabTitle="" tabIcon=""></ion-tab>\n\n  <ion-fab bottom center no-margin style="bottom:-0.3%;">\n\n    <button ion-fab no-padding no-margin style="width:75px; height:75px;  background-color:#fee02b" (click)="tabAddAddress()">\n\n      <img no-padding src="./assets/fab.png">\n\n    </button>\n\n  </ion-fab>\n\n  <ion-tab [root]="notificationRoot" tabTitle="แจ้งแตือน" tabIcon="ios-megaphone-outline"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\nid.nid\Desktop\schoolbus.v2\schoolbus-v2\src\pages\tab-nav\tab-nav.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
], TabNavPage);

//# sourceMappingURL=tab-nav.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__coreservice_coreservice__ = __webpack_require__(96);
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
  Generated class for the OrderserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OrderserviceProvider = (function () {
    function OrderserviceProvider(http, coreService) {
        this.http = http;
        this.coreService = coreService;
        console.log('Hello OrderserviceProvider Provider');
    }
    OrderserviceProvider.prototype.getOrderList = function () {
        var headers = this.coreService.authorizationHeader();
        return this.http
            .get('https://school-bus-server.herokuapp.com/api/orders', { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrderserviceProvider.prototype.createOrder = function (Order) {
        console.log('order befor save' + JSON.stringify(Order));
        var headers = this.coreService.authorizationHeader();
        return this.http
            .post('https://school-bus-server.herokuapp.com/api/orders', Order, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OrderserviceProvider.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return OrderserviceProvider;
}());
OrderserviceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__coreservice_coreservice__["a" /* CoreserviceProvider */]])
], OrderserviceProvider);

//# sourceMappingURL=orderservice.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
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

/***/ })

},[422]);
//# sourceMappingURL=main.js.map