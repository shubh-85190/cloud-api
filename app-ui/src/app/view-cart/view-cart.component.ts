import { Component, Input } from '@angular/core';
import { DatatransferService } from '../datatransfer.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {
  foodlist:any=[
    // {
    //   "id": "the-gramercy-tavern-burger-4-pack",
    //   "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    //   "name": "Gramercy Tavern",
    //   "dsc": "The Gramercy Tavern Burger - 4 Pack",
    //   "price": 99,
    //   "rate": 5,
    //   "country": "New York, NY"
    // },
    // {
    //   "id": "shake-shack-shackburger-8-pack",
    //   "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134862/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
    //   "name": "Shake Shack",
    //   "dsc": "Shake Shack ShackBurger® – 8 Pack",
    //   "price": 49,
    //   "rate": 5,
    //   "country": "New York, NY"
    // }
  ];
  mycart:any={
    // 'the-gramercy-tavern-burger-4-pack':4,
    // 'shake-shack-shackburger-8-pack':3
  };

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
