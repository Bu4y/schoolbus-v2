import { AuthorizeModel } from './../../pages/register/register.model';
// import { UserModel } from './../../pages/login/login.model';
import { Injectable } from "@angular/core";
import { Http, Request, Headers, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";



/*
  Generated class for the FeedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FeedProvider {
  constructor(public http: Http) {
    console.log("Hello FeedProvider Provider");
  }
  isLogged() {
    if (window.localStorage.getItem('user_token')) {
      return true;
    } else {
      return false;
    }
  }

  

  
}
