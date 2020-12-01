import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private ar:ActivatedRoute,private fps:FetchProductsService,
    private ss:SharedService) {

     
   this.ar.paramMap.subscribe(param=>{
    this.id=param.get('id');
    console.log(this.id)
    this.fps.fetchProductById(this.id)
    
  })   
   this.ss.message.subscribe(data=>{
     this.product=data;
     console.log(this.product)
   })
   }

  ngOnInit(): void {
 
  }


}
