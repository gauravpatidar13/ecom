import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from 'events';
import { ToastrService } from 'ngx-toastr';
import { AddToCartFromDetailService } from '../add-to-cart-from-detail.service';
import { FetchProductsService } from '../fetch-products.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product;
products;
id;
@Output() eventEmitter:EventEmitter=new EventEmitter();
  constructor(private ar:ActivatedRoute,private fps:FetchProductsService,
    private ss:SharedService,private toastr:ToastrService,private atcfd:AddToCartFromDetailService) {
   this.ar.paramMap.subscribe(param=>{
    this.id=param.get('id');
    console.log(this.id)
    this.fps.fetchProductById(this.id)
  })   
   this.ss.message.subscribe(data=>{
     this.product=data;
   })
   }

  ngOnInit(): void {
 
  }
  addToCart(product){
this.atcfd.addToCart(product)
this.toastr.success("product successfully added to card","Added Into Cart")
  }

}
