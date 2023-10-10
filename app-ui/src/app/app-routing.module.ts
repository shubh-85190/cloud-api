import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'login',component : LoginComponent},
  {path:'register',component : RegisterComponent},
  {path:'main',component : MainComponent},
  {path:'default',component : MainComponent},
  {path: '', redirectTo: '/default', pathMatch: 'full' },
  {path:'viewcard',component : ViewCartComponent},
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
