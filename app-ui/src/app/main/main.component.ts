import { Component } from '@angular/core';
import { ApisService } from '../apis.service';
import { AppRoutingModule } from '../app-routing.module';
import { DatatransferService } from '../datatransfer.service';
import { Router } from '@angular/router';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  content:any={
    text:'Loading Items please wait...',
    state:'pending',
    hidden:false
  }
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
  }

  viewCart(){
    this.svcdatatransfer.setCartItem(this.mycart,this.itemOBJ);
    this.router.navigate(['/viewcart']);
  }

  constructor(private apis:ApisService,
    private svcdatatransfer:DatatransferService,
    private router:Router,
    private popup:PopupComponent){


    // this.popup.showPopup('Loading items please wait...','pending');
    this.mycart=this.svcdatatransfer.getmycart();
    this.itemOBJ=this.svcdatatransfer.getCartItems();
    this.count=this.itemOBJ.length;
    apis.svcgetitemlist().subscribe(response=>{
      if(response.error)
      {
        console.log('Error loading items');
        this.content.state='error';
        this.content.text='Sorry! Something went wrong.';
        // this.popup.showPopup('Error in loading items','error');
      }
      else{
      // this.popup.hidePopup();
      this.foodlist=response.message;
      this.content.state='done';
      this.content.text='Items loaded successfully';
      setTimeout(() => {
        this.content.hidden=true;
      }, 1000);
      }
    })
  }
  
}
