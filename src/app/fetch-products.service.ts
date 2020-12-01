import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class FetchProductsService {
products;
products_data;
  constructor(private http:HttpClient,private ss:SharedService) { }
  fetchProduct(){
return this.http.get('/assets/data/products.json')
  }
  fetchProductById(id){
this.fetchProduct().subscribe((data)=>{
 this.products=data;
 for(let i=0;i<this.products.length;i++){
   if(this.products[i].id==id){
     this.ss.editMsgs(this.products[i])
     break;
   }
 }
})
  }
   fetchProductByCategory(cate):any{
   this.fetchProduct().subscribe(data=>{
      this.products=data;
      this.products_data=[];
      if(cate=="Default"){
      this.ss.editpros(this.products);
      }
      else{
      for(let i=0;i<this.products.length;i++){
        switch(cate){
          case "Mens":
           if(this.products[i].category=="mens"){
            this.products_data.push(this.products[i])
           }
            break;
            case "Womens":
              if(this.products[i].category=="womens"){
                this.products_data.push(this.products[i])
               }
            break;
            case "Electronics":
              if(this.products[i].category=="electronics"){
                this.products_data.push(this.products[i])
               }
            break; 
        }
      }
      this.ss.editpros(this.products_data);
    }
   
    
  })
  
}}
