import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  @Input() content?:any={};
  // @Output() content1:any={};
  okClicked(){
    this.content.hidden=true;
  }
  showPopup(text:string,state:string){
    console.log('inside show popup'+text);
    this.content.hidden=false;
    this.content.state=state;
    this.content.text=text;
  }

  hidePopup()
  {
      this.content.hidden=false;
  }

  NgOnInit(){
    this.content.hidden=true;
  }
}
