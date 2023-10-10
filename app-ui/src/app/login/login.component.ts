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

  constructor(private service:ApisService,private router:Router){}

  login(){
    let obj={
      email:this.email,
      password:this.password
    }
    this.service.login(obj).subscribe(
      response=>{
        console.log(response);
        if(response.error)
        {
          alert('Invalid user/password.');
          return;
        }
        else{
           this.router.navigate(['/main']);
        }
      }
    )
  }

}
