import { AuthorizeModel } from './../../pages/register/register.model';
// import { UserModel } from './../../pages/login/login.model';
import { Injectable } from "@angular/core";
import { Http, Request, Headers, Response } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import { Constants } from "../../app/app.contants";

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  constructor(public http: Http) {
    console.log("Hello AuthProvider Provider");
  }

  authHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + window.localStorage.getItem('schollbus_user'));
  }

  private() {
    let headers = new Headers();
    this.authHeader(headers);
    return this.http
      .post(Constants.URL + 'api/users/me', {}, {
        headers: headers
      })
      .map(res => res.json());
  }

  login(user) {
    return this.http.post(Constants.URL + 'api/auth/signin', user).map(this.extractData);
  }

  signUp(user) {
    return this.http.post(Constants.URL + 'api/auth/signup', user).map(this.extractData);
  }

  isLogged() {
    if (window.localStorage.getItem('schollbus_user')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    window.localStorage.removeItem('user_token');
    return true;
  }

  private extractData(res: Response) {
    let user = res.json() as AuthorizeModel;
    window.localStorage.setItem('schollbus_user', JSON.stringify(user));
    return user || {};
  }


  // signUp(user): Promise<AuthorizeModel> {
  //   return this.http.post(Constants.URL + 'auth/signup', user)
  //     .toPromise()
  //     .then(response => response.json() as AuthorizeModel)
  //     .catch(this.handleError);
  // }

  // private handleError(error: any): Promise<any> {
  //   return Promise.reject(error.message || error);
  // }
}
