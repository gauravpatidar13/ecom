import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';
import { FetchProductsService } from '../fetch-products.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
carts=[];
carts_data;
products;
total_cost;
decrement(cart_item){
  if(cart_item.qty>1)
  {
    let local_carts_data=[];
cart_item.qty=cart_item.qty-1;
for(let i=0;i<this.carts.length;i++){
  local_carts_data.push({id:this.carts[i].id,qty:this.carts[i].qty})
      }
      this.carts_data=local_carts_data;
      console.log(this.carts_data)
console.log(this.carts);
localStorage.setItem('carts',JSON.stringify(this.carts_data))
this.calTotalPrice();  
this.calTotalCount();
}else{
 if(confirm('are you sure to remove this item from cart')){
this.atc.removeItemById(cart_item.id);

 }
}
}
calTotalPrice(){
  let total=0;
  for(let i=0;i<this.carts.length;i++){
   total=total+this.carts[i].price*this.carts[i].qty;
  }
  this.total_cost= total;
}
calTotalCount(){
  let total=0;
  for(let i=0;i<this.carts.length;i++){
   total=total+this.carts[i].qty;
  }
  this.ss.onCartCount(total);
}
increment(cart_item){
if(cart_item.qty<9)
{
 let local_carts_data=[];
cart_item.qty=cart_item.qty+1;

  for(let i=0;i<this.carts.length;i++){
local_carts_data.push({id:this.carts[i].id,qty:this.carts[i].qty})
    }
    this.carts_data=local_carts_data;
console.log(this.carts_data)
console.log(this.carts);
localStorage.setItem('carts',JSON.stringify(this.carts_data))
this.calTotalPrice();
this.calTotalCount();
}
} 
 constructor(private fps:FetchProductsService,private atc:AddToCartService,
  private ss:SharedService) {
    this.fps.fetchProduct().subscribe(data=>{
      this.products=data;
      this.initCart()
      this.calTotalPrice();
    })
    this.ss.delete.subscribe(data=>{
      this.carts_data=data;
      this.initCart()
    })
   }
initCart(){
 this.carts=[];
 this.carts_data=JSON.parse(localStorage.getItem('carts'));
  for(let i=0;i<this.products.length;i++){
    for(let j=0;j<this.carts_data.length;j++){
     if(this.products[i].id==this.carts_data[j].id){
     this.products[i].qty=this.carts_data[j].qty;
       this.carts.push(this.products[i])
       break;
     }
    }
     
   }
   this.calTotalPrice();
   this.calTotalCount();
}
  ngOnInit(): void {
  }

}
