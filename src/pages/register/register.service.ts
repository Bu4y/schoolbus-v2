import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AuthorizeModel } from "./register.model";
import { AuthProvider } from '../../providers/auth/auth';
// import { Constants } from "../../app/app.contants";
/*
  Generated class for the RegisterServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RegisterServiceProvider {

    constructor(public http: Http, public Auth: AuthProvider) {
        console.log('Hello RegisterServiceProvider Provider');
    }

    newAuthorization(user): Promise<AuthorizeModel> { // signup
        // return this.http.post(Constants.URL + '/api/auth/signup', user)
        return this.http.post('https://school-bus-server.herokuapp.com/api/auth/signup', user)
            .toPromise()
            .then(response => {
                let data = response.json() as AuthorizeModel;
                window.localStorage.setItem('schollbus_user', JSON.stringify(data));
                return data;
            })
            .catch(this.handleError);
    }

    updateUser(user): Promise<AuthorizeModel> {
        let headers = this.Auth.createAuthorizationHeader();
        return this.http.put('https://school-bus-server.herokuapp.com/api/users', user, { headers: headers })
            .toPromise()
            .then(response => response.json() as AuthorizeModel)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
