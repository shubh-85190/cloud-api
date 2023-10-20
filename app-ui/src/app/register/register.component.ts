import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ApisService } from '../apis.service';
import { Router } from '@angular/router';

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

  popup:any = {
    text:'Registering new user...',
    hidden:true,
    state:'pending'
  }

  constructor(private service:ApisService,private router:Router){}
  submitClick():void
  {
    this.popup.text='Registering new user...';
    this.popup.hidden=false;
    this.popup.state='pending';

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
        this.popup.text = response.message;
        console.log(response);
        if(response.error)
        {
          this.popup.state='error';
          return;
        }
        else{
          this.popup.state='done'
          setTimeout(()=>{
            this.popup.hidden=true;
            this.router.navigate(['/main']);
          },1000)          
          
        }
      }
    );
  }
}
