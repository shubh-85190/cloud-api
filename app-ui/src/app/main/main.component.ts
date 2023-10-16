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

  foodlist:any=[];
  
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
    this.mycart=this.svcdatatransfer.getmycart();
    this.itemOBJ=this.svcdatatransfer.getCartItems();
    this.count=this.itemOBJ.length;
    apis.svcgetitemlist().subscribe(response=>{
      if(response.error)
      {
        console.log('Error loading items');
      }
      else{
      this.foodlist=response.message;
      }
    })
  }
  
}
