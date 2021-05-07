import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {map} from 'rxjs/Operators';
@Injectable({
  providedIn: 'root'
})
export class FetchProductsService {
products;
products_data;
  constructor(private http:HttpClient,private ss:SharedService,
    private db:AngularFireDatabase) { }
  fetchProduct():Observable<any>{
    return this.db.list("/products").snapshotChanges().pipe(map(actions=>
     actions.map(a=>{
        const data=a.payload.val()
        const id=a.payload.key;
        return {id,data}
      })))
  }
  fetchProductById(id):Observable<any>{
   return this.db.object("/products/"+id).valueChanges()
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
           if(this.products[i].data.category=="mens"){
            this.products_data.push(this.products[i])
           }
            break;
            case "Womens":
              if(this.products[i].data.category=="womens"){
                this.products_data.push(this.products[i])
               }
            break;
            case "Electronics":
              if(this.products[i].data.category=="electronics"){
                this.products_data.push(this.products[i])
               }
            break; 
        }
      }
      this.ss.editpros(this.products_data);
    }
   
    
  })
  
}}
