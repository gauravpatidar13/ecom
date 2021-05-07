import { Component, OnInit } from '@angular/core';
import { AddToCartFromDetailService } from '../add-to-cart-from-detail.service';
import { AddToCartService } from '../add-to-cart.service';
import { FetchProductsService } from '../fetch-products.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products;
category;
searchTerm;
filterOption;
  constructor(private atc:AddToCartService,private fps:FetchProductsService,
    private ss:SharedService,private atcfd:AddToCartFromDetailService) {
    this.fps.fetchProduct().subscribe(data=>{
      
  console.log(data)
     this.products=data;
    })
    this.ss.searchTerm.subscribe(data=>{
      this.searchTerm=data;
    })
    this.atcfd.pro.subscribe(item=>{
      console.log(item);
      this.atc.addToCart(item)
    })
    this.ss.message.subscribe(data=>{
this.category=data;
this.fps.fetchProductByCategory(this.category)
this.ss.products.subscribe(data=>{
  this.products=data;
})
this.ss.filterTerm.subscribe(filter=>{
  console.log(filter)
  this.filterOption=filter;
})
    });
   }
  addToCart(event){
    console.log(event)
this.atc.addToCart(event)
  }
  ngOnInit(): void {
  }

}
