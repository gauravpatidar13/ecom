import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
public message=new Subject<any>();
public msg=this.message.asObservable();
public products=new Subject<any>();
public pro=this.products.asObservable();
public searchTerm=new Subject<any>();
public search=this.searchTerm.asObservable();
public delete=new Subject<any>();
public del=this.delete.asObservable();
public cartCount=new Subject<any>();
public cartCnt=this.cartCount.asObservable();
onCartCount(ct){
this.cartCount.next(ct)
}
delity(dee){
  this.delete.next(dee)
}
editSearch(se){
  this.searchTerm.next(se)
}

editpros(pr){
  this.products.next(pr);
}
editMsgs(msg){
  this.message.next(msg);
}
  constructor() { }
}
