import { Component } from '@angular/core';
import { SvcmasterService } from '../svcmaster.service';

@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent {
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

  constructor(private svcmaster:SvcmasterService){
    this.hidepopup=false;
    this.popupData.hidden=false;
    svcmaster.svcGetId().subscribe(response=>{
      console.log(response);
      this.item.id = response.message;
    });

    this.hidepopup=true;
    this.popupData.hidden=true;
  }

  submitClick(){
    this.hidepopup=false;
    this.popupData.hidden=false;
    this.popupData.text='Adding New Item...';
    this.popupData.state='pending';
    this.svcmaster.svcAddItem(this.item).subscribe(response=>{
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
  
}
