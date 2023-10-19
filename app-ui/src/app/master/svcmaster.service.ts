import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_ITEM, DELETE_ITEM, GET_ID, KITCHEN_STATUS, LOGIN_MASTER, UPDATE_ITEM, VIEW_ITEM } from '../shared/constants/urs'


@Injectable({
  providedIn: 'root'
})
export class SvcmasterService {
  constructor(private http:HttpClient) { }
  // login api
  login(dataObj:any):Observable<any>{
    return this.http.post(LOGIN_MASTER,dataObj);
  }


  // Services for kitchen status
  svcChangeKitchenStatus(dataObj:any):Observable<any>{
    return this.http.post(KITCHEN_STATUS,dataObj);
  }
  svcgetKitchenStatus(dataObj:any):Observable<any>{
    return this.http.post(KITCHEN_STATUS,dataObj);
  }

  // Services for items
  svcGetId():Observable<any>{
    return this.http.get(GET_ID);
  }
  svcAddItem(dataObj:any):Observable<any>{
    return this.http.post(ADD_ITEM,dataObj);
  }

  svcDeleteItem(dataObj:any):Observable<any>{
    return this.http.post(DELETE_ITEM,dataObj);
  }

  svcUpdateItem(dataObj:any):Observable<any>{
    return this.http.post(UPDATE_ITEM,dataObj);
  }

  svcViewItems():Observable<any>{
    return this.http.get(VIEW_ITEM);
  }

  // services for orders
  // svcAddItem(dataObj:any):Observable<any>{
  //   return this.http.post(`${this.base}/master/additem`,dataObj);
  // }

  svcDeleteOrder(dataObj:any):Observable<any>{
    return this.http.post(DELETE_ITEM,dataObj);
  }

  svcUpdateOrder(dataObj:any):Observable<any>{
    return this.http.post(DELETE_ITEM,dataObj);
  }

  svViewOrders(dataObj:any):Observable<any>{
    return this.http.post(DELETE_ITEM,dataObj);
  }

}
