import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartsComponent } from './carts/carts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'products',component:HomeComponent},
  {path:'products/:id',component:ProductDetailComponent},
  {path:'carts',component:CartsComponent},
  {path:'placeorder',component:PlaceOrderComponent},
  {path:'thankyou',component:ThankYouComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
