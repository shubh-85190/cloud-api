import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatransfermasterService {

  constructor() { }
  selectedItem:any={};
  setItem(obj:any){
    this.selectedItem=obj;
  }

  getItem():any{
    return this.selectedItem;
  }
}
