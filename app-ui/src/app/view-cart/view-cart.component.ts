import { Component, Input } from '@angular/core';
import { DatatransferService } from '../datatransfer.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {
  foodlist:any=[];
  mycart:any={};

  ngOnInit(){
    this.foodlist=this.svcdatatransfer.getCartItems();
    this.mycart=this.svcdatatransfer.getmycart();
  
    console.log(this.foodlist);
  }
  constructor(private svcdatatransfer:DatatransferService){}

}
