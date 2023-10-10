import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name:string='';
  email:string='';
  mobile:string='';
  gender:string='';
  password:string='';
  cpassword:string='';
  address:string='';
  pincode:String='';
  userObj:any={};
  constructor(private service:ApisService){}
  submitClick():void
  {
    this.userObj={
      "email":this.email,
      "password":this.password,
      "name":this.name,
      "mobile":this.mobile,
      "address":this.address,
      "gender":this.gender,
      "pincode":this.pincode,
      "cpassword":this.cpassword
    }
    console.log('Create account clicked......');
    console.log(this.userObj);
    this.service.adduser(this.userObj).subscribe(
      response=>{
        console.log(response);
        if(response.error)
        {
          alert(response.message);
          return;
        }
      }
    );
  }
}
