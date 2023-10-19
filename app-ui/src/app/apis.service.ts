import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ADD_USER, GET_ID, GET_ITEMS, LOGIN } from './shared/constants/urs'

@Injectable({
  providedIn: 'root'
})
export class ApisService {
  baseURL='http://localhost:5500';

  constructor(private http:HttpClient) { }
  svcgetitemlist():Observable<any>{
    return this.http.get(GET_ITEMS);
  }
  adduser(obj:any):Observable<any>{
    return this.http.post(ADD_USER,obj);
  }
  login(obj:any):Observable<any>{
    return this.http.post(LOGIN,obj);
  }
}
