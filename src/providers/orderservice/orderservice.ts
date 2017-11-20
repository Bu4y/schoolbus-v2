import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { LocationModel, OrderListModel } from '../../pages/location/location.model';
import { CoreserviceProvider } from '../coreservice/coreservice';
/*
  Generated class for the OrderserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrderserviceProvider {

  constructor(public http: Http, public coreService: CoreserviceProvider) {
    console.log('Hello OrderserviceProvider Provider');
  }

  getOrderList(): Promise<Array<OrderListModel>> {
    let headers = this.coreService.authorizationHeader();
    return this.http
      .get('https://school-bus-server.herokuapp.com/api/orders', { headers: headers })
      .toPromise()
      .then(response => response.json() as Array<OrderListModel>)
      .catch(this.handleError);
  }

  createOrder(Order): Promise<LocationModel> {
    console.log('order befor save' + JSON.stringify(Order));
    let headers = this.coreService.authorizationHeader();
    return this.http
      .post('https://school-bus-server.herokuapp.com/api/orders', Order, { headers: headers })
      .toPromise()
      .then(response => response.json() as LocationModel)
      .catch(this.handleError);
  }

  deleteOrder(id): Promise<LocationModel> {
    let headers = this.coreService.authorizationHeader();
    return this.http
      .delete('https://school-bus-server.herokuapp.com/api/orders/' + id, { headers: headers })
      .toPromise()
      .then(response => response.json() as LocationModel)
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
