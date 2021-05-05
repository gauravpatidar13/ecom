import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartFromDetailService {
 pro=new Subject();
  constructor() { }
  addToCart(product){
this.pro.next(product)
  }
}
