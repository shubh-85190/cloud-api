import { Component } from '@angular/core';
import { SvcmasterService } from '../svcmaster.service';
import { DatatransfermasterService } from '../datatransfermaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewitems',
  templateUrl: './viewitems.component.html',
  styleUrls: ['./viewitems.component.css']
})
export class ViewitemsComponent {
  hidepopup:boolean=true;
  popupData:any={
    text:'Loading items please wait..',
    state:'pending',
    hidden:true
  }
  itemList:any=[];
  constructor(private svcobj:SvcmasterService,private datatransfer:DatatransfermasterService,private route:Router){
    this.hidepopup=false;
    this.popupData.text='Loading items please wait..';
    this.popupData.state='pending';
    this.popupData.hidden=false;
    svcobj.svcViewItems().subscribe(response=>{
      if(response.error){
        this.popupData.text=response.message;
        this.popupData.state='error';
      }
      console.log(response);
      this.popupData.text='Items loaded successfully';
      this.popupData.state='done';
      this.itemList=response.message;
      this.popupData.hidden=true;
    });
  }

  updateClicked(itemOBJ:any){
    this.datatransfer.setItem(itemOBJ);
    this.route.navigate(['/master/updateitem']);
  }

}
