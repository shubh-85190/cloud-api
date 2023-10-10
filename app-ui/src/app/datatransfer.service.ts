import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  mycart:any=[];
  items:any=[];
  setCartItem(obj:any,itemOBJ:any){
    this.mycart=obj;
    this.items=itemOBJ;
  }
  getCartItems():any{
    return this.items;
  }
  getmycart():any{
    return this.mycart;
  }

  constructor() { }
}
