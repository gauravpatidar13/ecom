import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
carts=[];//we start from empty cart locally

  constructor(private ss:SharedService) {
    if(localStorage.getItem('carts')){    
      this.carts=JSON.parse(localStorage.getItem('carts'))
    }
   }
  addToCart(product){
    console.log(localStorage.getItem('carts'))
    if(localStorage.getItem('carts')){
      this.carts=JSON.parse(localStorage.getItem('carts'))
    }
    console.log(localStorage.getItem('carts'))
  let flag=true;
for(let i=0;i<this.carts.length;i++){
if(product.id===this.carts[i].id){
this.carts[i].qty=this.carts[i].qty+1;
flag=false;
break;
}
}
if(flag)
this.carts.push({id:product.id,qty:1})
localStorage.setItem("carts",JSON.stringify(this.carts))
this.ss.onCartCount(this.getCartCount())
  }
  removeItemById(id){
    if(localStorage.getItem('carts')){
    
      this.carts=JSON.parse(localStorage.getItem('carts'))
    }
    let new_cart=[];
    console.log(localStorage.getItem('carts'))
 //   this.carts=JSON.parse(localStorage.getItem('carts'))
    for(let i=0;i<this.carts.length;i++){
      if(this.carts[i].id==id){
    
      }else{
        new_cart.push(this.carts[i])
      }
    }
    localStorage.setItem('carts',JSON.stringify(new_cart))
    this.ss.delity(new_cart)
   // this.carts=new_cart;
    this.ss.onCartCount(this.getCartCount())
  }
  getCartCount():Number{
    this.carts=JSON.parse(localStorage.getItem('carts'));
    let cartCount=0;
    for(let i=0;i<this.carts.length;i++){
      cartCount=cartCount+this.carts[i].qty;
    }
    return cartCount;
  }
}
