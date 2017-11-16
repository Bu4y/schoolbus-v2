import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { CoreserviceProvider } from "../../providers/coreservice/coreservice";
// import { Constants } from "../../app/app.contants";
/*
  Generated class for the FeedServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FeedServiceProvider {
    constructor(public http: Http, public coreService: CoreserviceProvider) {
        console.log('Hello FeedServiceProvider Provider');
    }
    // authorizationHeader() {
    //     let headers = new Headers();
    //     let token = window.localStorage.getItem('token');
    //     headers.append('Authorization', 'Bearer ' + token);
    //     return headers;
    // }


    getfeed(): Promise<any> {
        return this.http.get('http://school-bus-server.herokuapp.com/api/feeds')
            .toPromise()
            .then(response => response.json() as Promise<any>)
            .catch(this.handleError);
    }
    updateLike(feed): Promise<any> {
        let headers = this.coreService.authorizationHeader();
        return this.http.put('https://school-bus-server.herokuapp.com/api/feeds/' + feed._id, feed, { headers: headers })
            .toPromise()
            .then(response => response.json() as Promise<any>)
            .catch(this.handleError);

    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}