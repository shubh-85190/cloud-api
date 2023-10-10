import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApisService {
  baseURL='http://192.168.43.9:5500';
  constructor(private http:HttpClient) { }

  getfoodlist():Observable<any>{
    return this.http.get(`${this.baseURL}/our-foods`);
  }
  adduser(obj:any):Observable<any>{
    return this.http.post(`${this.baseURL}/user/adduser`,obj);
  }

  login(obj:any):Observable<any>{
    return this.http.post(`${this.baseURL}/user/login`,obj);
  }
}
