import { Component, Input } from '@angular/core';
import { DatatransferService } from '../datatransfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {
  foodlist:any=[];
  mycart:any={};
  totalamount:number=0;
  discount:number=0;
  tax:number=0;
  deliveryCharge:number=0;
  ngOnInit(){
    this.foodlist=this.svcdatatransfer.getCartItems();
    this.mycart=this.svcdatatransfer.getmycart();
    this.calcTotal();
    console.log(this.foodlist);
  }
  constructor(private svcdatatransfer:DatatransferService,private router:Router){}

  removeClick(id:string,i:any){
    if(this.mycart[id]==1)
    {
      // delete this.mycart[id];
      this.foodlist.splice(this.foodlist.indexOf(i),1);
      // this.count=this.count-1;
    }
    else{
      this.mycart[id]=this.mycart[id]-1;
    }
    console.log(this.mycart);
    this.calcTotal();
  }

  calcTotal(){
    this.totalamount=this.tax - this.discount + this.deliveryCharge;
    this.foodlist.forEach((i:any)=>{
      this.totalamount = this.totalamount + (i.price*this.mycart[i.id]);
    })
  }

  confirmClick(){
    this.router.navigate(['/confirmorder']);
  }

  addClick(id:string,i:any)
  {

    if(this.mycart[id])
    {
      this.mycart[id]=this.mycart[id]+1;
    }
    else{
    this.mycart[id]=1;
    this.foodlist.push(i);
    }
    console.log(this.mycart);
    this.calcTotal();
  }


}
