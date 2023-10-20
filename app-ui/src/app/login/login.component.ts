import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { ApisService } from '../apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';
  popup:any={
    text : 'Loggin in...',
    state:'pending',
    hidden:true
  }

  constructor(private service:ApisService,private router:Router){}

  login(){
    this.popup.hidden=false
    this.popup.text='Loggin in...';
    this.popup.state='pending';
    let obj={
      email:this.email,
      password:this.password
    }
    this.service.login(obj).subscribe(
      response=>{
        console.log(response);
        this.popup.text=response.message;
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
    )
  }

}
