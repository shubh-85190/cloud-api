import { Component } from '@angular/core';
import { DatatransfermasterService } from '../datatransfermaster.service';
import { SvcmasterService } from '../svcmaster.service';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent {
  item = {
    id:'',
    name:'',
    desc:'',
    price:'',
    img:'',
    category:'Food',
    subcategory:''
  }
  popupData:any={
    text:'',
    state:'pending',
    hidden:true
  };
  hidepopup:boolean=true;
  
  private id='';

  submitClick(){
    this.hidepopup=false;
    this.popupData.hidden=false;
    this.popupData.text='Updateing New Item...';
    this.popupData.state='pending';
    this.svcmaster.svcUpdateItem(this.item).subscribe(response=>{
      console.log(response);
      if(response.error)
      {
        this.popupData.state='error';
        this.popupData.text=response.message;
      }
      else{
        this.popupData.state='done';
        this.popupData.text=response.message;
      }
    })
    console.log(this.item);
  }
  constructor(private datatransfer:DatatransfermasterService,private svcmaster:SvcmasterService)
  {
    this.item=datatransfer.getItem();
  }
}
