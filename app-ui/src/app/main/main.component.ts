import { Component } from '@angular/core';
import { ApisService } from '../apis.service';
import { AppRoutingModule } from '../app-routing.module';
import { DatatransferService } from '../datatransfer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  foodlist:any={};
  
  cart:any=[];
  mycart:any={};
  addeditem:any=[];
  count:number=0;
  itemOBJ:any=[];

  removeClick(id:string,i:any){
    if(this.mycart[id]==1)
    {
      delete this.mycart[id];
      this.itemOBJ.splice(this.itemOBJ.indexOf(i));
      this.count=this.count-1;
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
    this.itemOBJ.push(i);
    }
    console.log(this.mycart);
    this.count=Object.keys(this.mycart).length;
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

  viewCart(){
    this.svcdatatransfer.setCartItem(this.mycart,this.itemOBJ);
    this.router.navigate(['/viewcart']);
  }

  constructor(private apis:ApisService,private svcdatatransfer:DatatransferService,private router:Router){
    // apis.getfoodlist().subscribe(response=>{
    //   this.foodlist=response;
    //   console.log(this.foodlist);
    // });
    this.foodlist=[
      {
        "id": "the-gramercy-tavern-burger-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/137148/Gramercy-Tavern-Burger-and-Kielbasa-Kit-6.4.21-72ppi-1x1-15.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Gramercy Tavern",
        "dsc": "The Gramercy Tavern Burger - 4 Pack",
        "price": 99,
        "rate": 5,
        "country": "New York, NY"
      },
      {
        "id": "shake-shack-shackburger-8-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134862/shake-shack-shackburger-8-pack.973a5e26836ea86d7e86a327becea2b0.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Shake Shack",
        "dsc": "Shake Shack ShackBurger® – 8 Pack",
        "price": 49,
        "rate": 5,
        "country": "New York, NY"
      },
      {
        "id": "gotts-cheeseburger-kit-for-4",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132933/gotts-complete-cheeseburger-kit-for-4.7bdc74104b193427b3fe6eae39e05b5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Gott's Roadside",
        "dsc": "Gott's Complete Cheeseburger Kit for 4",
        "price": 99,
        "rate": 5,
        "country": "St. Helena, CA"
      },
      {
        "id": "le-big-matt-kit-for-6",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131436/le-big-matt-kit-for-6.1ddae6e382bb3218eeb0fd5247de115a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Emmy Squared",
        "dsc": "Le Big Matt Burger Kit for 6",
        "price": 99,
        "rate": 5,
        "country": "Brooklyn, NY"
      },
      {
        "id": "shake-shack-shackburger-16-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134022/shake-shack-shackburger-16-pack.316f8b09144db65931ea29e34869287a.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Shake Shack",
        "dsc": "Shake Shack Shackburger® – 16 Pack",
        "price": 89,
        "rate": 4,
        "country": "New York, NY"
      },
      {
        "id": "wagyu-burger-patties-12-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/107019/wagyu-burger-patties-12-pack.6116f4cd648dee20651f99e21e7d758b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Westholme Wagyu",
        "dsc": "Wagyu Burger Patties - 12 Pack",
        "price": 129,
        "rate": 5,
        "country": "Queensland, Australia"
      },
      {
        "id": "21-usda-prime-burgers-pack-of-18-8oz-each",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133009/usda-prime-burgers-pack-of-18-8oz-each.274c67f15aa1c0b210dbf51801706670.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Peter Luger Steak House",
        "dsc": "USDA Prime Burgers - Pack of 18 (8oz each)",
        "price": 175.95,
        "rate": 4,
        "country": "Brooklyn, NY"
      },
      {
        "id": "burger-bomb-kit-for-6",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133829/burger-bomb-kit-for-6.b0430200cfc153c1c15c7997236a6152.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Old Homestead Steakhouse",
        "dsc": "Burger Bomb Kit for 6",
        "price": 129,
        "rate": 5,
        "country": "New York, NY"
      },
      {
        "id": "double-stack-burger-kit-for-4",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/122768/handf-double-stack-burger-kit-for-4.4ee9f54b1d6087e9996335f07c13e5cd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Holeman & Finch",
        "dsc": "Double Stack Burger Kit for 4",
        "price": 79,
        "rate": 4,
        "country": "Atlanta, GA"
      },
      {
        "id": "goldbelly-burger-bash-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66179/the-burger-bash-package.bd9d12d031865940bbe5faf15f1a62f8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Pat LaFrieda Meats",
        "dsc": "Goldbelly \"Burger Bash\" Pack",
        "price": 109,
        "rate": 5,
        "country": "North Bergen, NJ"
      },
      {
        "id": "burger-au-poivre-kit-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/103477/burger-au-poivre-kit-4-pack.3ca0e39b02db753304cd185638dad518.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Raoul's",
        "dsc": "Burger Au Poivre Kit - 4 Pack",
        "price": 99,
        "rate": 4,
        "country": "New York, NY"
      },
      {
        "id": "goldbelly-burger-blend-4-lbs",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/96214/goldbelly-burger-blend-1-lb.13a21b66edf7173a59c75c3a6d2f981b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Flannery Beef",
        "dsc": "Goldbelly Burger Blend - 4 lbs.",
        "price": 79,
        "rate": 5,
        "country": "San Rafael, CA"
      }]
  }
  
}
