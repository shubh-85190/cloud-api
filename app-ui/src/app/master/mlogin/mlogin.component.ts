import { Component } from '@angular/core';
// import { ApisService } from 'src/app/apis.service';
import { Router } from '@angular/router';
import { SvcmasterService } from '../svcmaster.service';

@Component({
  selector: 'app-mlogin',
  templateUrl: './mlogin.component.html',
  styleUrls: ['./mlogin.component.css']
})
export class MloginComponent {

  email:string='';
  password:string='';
  popupData:any={
    text:'',
    state:'pending',
    hidden:true
  };
  hidepopup:boolean=true;

  constructor(private service:SvcmasterService,private router:Router){}

  login(){
    this.hidepopup=false;
    this.popupData.text='Login in please wait..';
    this.popupData.state='pending';
    let obj={
      email:this.email,
      password:this.password
    }
    this.service.login(obj).subscribe(
      response=>{
        console.log(response);
        if(response.error)
        {
          this.popupData.text='Login Failed. Invalid user password.';
          this.popupData.state='error';
          return;
        }
        else{
          this.popupData.text='Login Successfull.';
          this.popupData.state='done';
           this.router.navigate(['/master/mainapp']);
        }
      }
    )
  }



}
