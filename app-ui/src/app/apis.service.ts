import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApisService {
  baseURL='http://localhost:3200';
  constructor(private http:HttpClient) { }
  getfoodlist():Observable<any>{
    return this.http.get(`${this.baseURL}/our-foods`);
  }
}
