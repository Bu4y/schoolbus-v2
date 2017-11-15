import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// import { Constants } from "../../app/app.contants";
/*
  Generated class for the FeedServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FeedServiceProvider {
    constructor(public http: Http) {
        console.log('Hello FeedServiceProvider Provider');
    }
    getfeed():Promise<any>{
        return this.http.get('http://localhost:3000/api/feeds/')
        .toPromise()
        .then(response => response.json() as Promise<any>)
        .catch(this.handleError);
    } 
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }


}