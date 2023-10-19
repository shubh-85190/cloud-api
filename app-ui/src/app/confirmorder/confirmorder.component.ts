import { Component } from '@angular/core';

@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.css']
})
export class ConfirmorderComponent {
  pincode:string='';
  name:string='';
  address:string='';
  mobile:string='';

  submitClick(){

  }

}
