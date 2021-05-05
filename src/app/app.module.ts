import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartsComponent } from './carts/carts.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { SummeryComponent } from './summery/summery.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SearchPipe } from './search.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
import { Login4Component } from './login4/login4.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    ProductDetailComponent,
    CartsComponent,
    PlaceOrderComponent,
    SummeryComponent,
    ThankYouComponent,
    SearchPipe,
    LoginComponent,
    RegisterComponent,
    Register2Component,
    Register3Component,
    Login2Component,
    Login3Component,
    Login4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
