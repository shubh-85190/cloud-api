import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApisService } from './apis.service';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './master/orders/orders.component';
import { MainappComponent } from './master/mainapp/mainapp.component';
import { AdditemsComponent } from './master/additems/additems.component';
import { PopupComponent } from './popup/popup.component';
import { MloginComponent } from './master/mlogin/mlogin.component';
import { ViewitemsComponent } from './master/viewitems/viewitems.component';
import { UpdateitemComponent } from './master/updateitem/updateitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewCartComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    OrdersComponent,
    MainappComponent,
    AdditemsComponent,
    PopupComponent,
    MloginComponent,
    ViewitemsComponent,
    UpdateitemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
