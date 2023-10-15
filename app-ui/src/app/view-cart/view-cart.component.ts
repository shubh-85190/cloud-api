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

  removeClick(id:string,i:any){
    if(this.mycart[id]==1)
    {
      delete this.mycart[id];
      this.foodlist.splice(this.foodlist.indexOf(i));
      // this.count=this.count-1;
    }
    else{
      this.mycart[id]=this.mycart[id]-1;
    }
    console.log(this.mycart);
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
    // this.count=Object.keys(this.mycart).length;
    // if(!this.addeditem.includes(id))
    // {
    //   this.addeditem.push(id);
    //   let obj = {
    //     'id':id,
    //     quantity:1
    //   }
    //   this.cart.push(obj);
    // }
    // else{
    // this.cart.forEach( (element:any) => {
    //   console.log(`Inside if : ${JSON.stringify(element)}`);
    //   if(element['id']==id){
    //     // console.log(`Already in cart : ${element['id']} : ${element['quantity']}`)
    //     element['quantity']=element['quantity']+1;
    //     return;
    //   }
    // });}
    // console.log(this.cart);
  }


}
