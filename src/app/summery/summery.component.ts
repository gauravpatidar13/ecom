import { Component, OnInit } from '@angular/core';
import { FetchProductsService } from '../fetch-products.service';

@Component({
  selector: 'app-summery',
  templateUrl: './summery.component.html',
  styleUrls: ['./summery.component.css']
})
export class SummeryComponent implements OnInit {
products;
carts_data;
carts=[];
total_cost;
  constructor(private fps:FetchProductsService) { 
    this.fps.fetchProduct().subscribe(data=>{
this.products=data;
for(let i=0;i<this.products.length;i++){
  for(let j=0;j<this.carts_data.length;j++){
   if(this.products[i].id==this.carts_data[j].id){
   this.products[i].data.qty=this.carts_data[j].qty;
     this.carts.push(this.products[i])
     break;
   }
  }
   
 }
 this.calTotalPrice()
 //console.log(this.carts)
    })
    this.carts_data=JSON.parse(localStorage.getItem('carts'));
  }
  calTotalPrice(){
    let total=0;
    for(let i=0;i<this.carts.length;i++){
     total=total+this.carts[i].data.price*this.carts[i].data.qty;
    }
    this.total_cost= total;
  }
  ngOnInit(): void {
  }

}
