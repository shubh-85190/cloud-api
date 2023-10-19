import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { MainComponent } from './main/main.component';
import { MainappComponent } from './master/mainapp/mainapp.component';
import { AdditemsComponent } from './master/additems/additems.component';
import { OrdersComponent } from './master/orders/orders.component';
import { MloginComponent } from './master/mlogin/mlogin.component';
import { ViewitemsComponent } from './master/viewitems/viewitems.component';
import { UpdateitemComponent } from './master/updateitem/updateitem.component';
import { ConfirmorderComponent } from './confirmorder/confirmorder.component';

const routes: Routes = [
  {path:'login',component : LoginComponent},
  {path:'register',component : RegisterComponent},
  {path:'main',component : MainComponent},
  {path:'confirmorder',component : ConfirmorderComponent},
  {path:'default',component : MainComponent},
  {path:'master',component : MloginComponent},
  {path:'master/mainapp',component : MainappComponent},
  {path:'master/additems',component:AdditemsComponent},
  {path:'master/orders',component:OrdersComponent},
  {path: '', redirectTo: '/default', pathMatch: 'full' },
  {path:'viewcart',component : ViewCartComponent},
  {path:'master/viewitem',component:ViewitemsComponent},
  {path:'master/updateitem',component:UpdateitemComponent},
  { path: '**', redirectTo: '/main' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
