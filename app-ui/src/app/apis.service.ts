import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  baseURL='http://localhost:5500';

  constructor(private http:HttpClient) { }
  svcgetitemlist():Observable<any>{
    return this.http.get(`${this.baseURL}/master/items/viewitem`);
  }
  adduser(obj:any):Observable<any>{
    return this.http.post(`${this.baseURL}/user/adduser`,obj);
  }
  login(obj:any):Observable<any>{
    return this.http.post(`${this.baseURL}/user/login`,obj);
  }
}
