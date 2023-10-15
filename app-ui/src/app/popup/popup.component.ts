import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  hidden:boolean=false;
  @Input() content:any={};
  // @Output() content1:any={};
  okClicked(){
    this.content.hidden=true;
  }
  NgOnInit(){
    this.hidden=false;
  }
}
