import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FileUpload } from './file-upload';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  constructor(private db:AngularFireDatabase) { }
  addProduct(product){
    this.db.list("products/"+new Date().toString).push(product);
  }
}
