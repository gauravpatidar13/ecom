import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FileUpload } from './file-upload';
import {DatePipe} from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  constructor(private db:AngularFireDatabase,private datePipe:DatePipe) { }
  addProduct(product):Promise<any>{
   return this.db.list("/products").push(product).then(value=>{
return "Product Added Successfully";
    });
  }
}
