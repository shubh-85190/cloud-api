import { Component } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-mainapp',
  templateUrl: './mainapp.component.html',
  styleUrls: ['./mainapp.component.css']
})
export class MainappComponent {
  hideManageOrders:boolean=true;
  hideManageItems:boolean=true;
  hideChangeStatus:boolean=true;
  status:boolean=true;
  popupData:any={
    text:'',
    state:'pending'
  };
  showpopup:boolean=false;
  openClicked(){
    this.showpopup=true;
    this.popupData.text='Opening kitchen...';
    this.popupData.state='pending';
    this.popupData.hidden=false;
    setTimeout(()=>{
      this.status=true;
      this.popupData.text='Kitchen Opened Successfully';
      this.popupData.state='done';
      console.log('state changed to done........')
      },5000)
  }
  closeClicked(){
    this.showpopup=true;
    this.popupData.text='Closing kitchen...';
    this.popupData.state='pending';
    this.popupData.hidden=false;
    setTimeout(()=>{
      this.status=false;
      this.popupData.text='Kitchen Closed Successfully';
      this.popupData.state='done';
      console.log('state changed to done........')
      },5000)
  }

}
