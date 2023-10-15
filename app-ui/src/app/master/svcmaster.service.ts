import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SvcmasterService {
  constructor(private http:HttpClient) { }
  private base='http://localhost:5500/master';

  // Services for kitchen status
  svcChangeKitchenStatus(dataObj:any):Observable<any>{
    return this.http.post(`${this.base}/kitchenstatus`,dataObj);
  }
  svcgetKitchenStatus(dataObj:any):Observable<any>{
    return this.http.post(`${this.base}/kitchenstatus`,dataObj);
  }

  // Services for items
  svcGetId():Observable<any>{
    return this.http.get(`${this.base}/items/getid`);
  }
  svcAddItem(dataObj:any):Observable<any>{
    return this.http.post(`${this.base}/items/additem`,dataObj);
  }

  svcDeleteItem(dataObj:any):Observable<any>{
    return this.http.post(`${this.base}/items/deleteitem`,dataObj);
  }

  svcUpdateItem(dataObj:any):Observable<any>{
    return this.http.post(`${this.base}/items/updateitem`,dataObj);
  }

  svViewItems(dataObj:any):Observable<any>{
    return this.http.post(`${this.base}/items/deleteitem`,dataObj);
  }

  // services for orders
  // svcAddItem(dataObj:any):Observable<any>{
  //   return this.http.post(`${this.base}/master/additem`,dataObj);
  // }

  svcDeleteOrder(dataObj:any):Observable<any>{
    return this.http.post(`${this.base}/master/deleteitem`,dataObj);
  }

  svcUpdateOrder(dataObj:any):Observable<any>{
    return this.http.post(`${this.base}/master/updateitem`,dataObj);
  }

  svViewOrders(dataObj:any):Observable<any>{
    return this.http.post(`${this.base}/master/deleteitem`,dataObj);
  }


}
