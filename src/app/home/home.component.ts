import { Component, OnInit } from '@angular/core';
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
  constructor(private atc:AddToCartService,private fps:FetchProductsService,
    private ss:SharedService) {
    this.fps.fetchProduct().subscribe(data=>{
      this.products=data;
    })
    this.ss.searchTerm.subscribe(data=>{
      this.searchTerm=data;
    })
    this.ss.message.subscribe(data=>{
this.category=data;
this.fps.fetchProductByCategory(this.category)
this.ss.products.subscribe(data=>{
  this.products=data;
})
    })
   }
  addToCart(event){
this.atc.addToCart(event)
  }
  ngOnInit(): void {
  }

}
