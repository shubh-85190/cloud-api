import { Component } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  foodlist:any={};

  constructor(private apis:ApisService){
    apis.getfoodlist().subscribe(response=>{
      this.foodlist=response;
      console.log(this.foodlist);
    });
    
  }
  
}
