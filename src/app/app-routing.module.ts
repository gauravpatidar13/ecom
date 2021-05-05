import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import {Register2Component} from './register2/register2.component';
import {Register3Component} from './register3/register3.component';
import { Login2Component } from './login2/login2.component';
import { Login3Component } from './login3/login3.component';
const routes: Routes = [
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'products',component:HomeComponent},
  {path:'products/:id',component:ProductDetailComponent},
  {path:'carts',component:CartsComponent},
  {path:'placeorder',component:PlaceOrderComponent},
  {path:'thankyou',component:ThankYouComponent},
  {path:'login',component:LoginComponent},
  {path:'login2',component:Login2Component},
  {path:'login3',component:Login3Component},
  {path:'register',component:RegisterComponent},
  {path:'register2',component:Register2Component},
  {path:'register3',component:Register3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
