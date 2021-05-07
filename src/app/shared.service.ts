import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
public message=new Subject<any>();
public msg=this.message.asObservable();
public addProductTerm=new Subject<any>();
public addProduct=this.addProductTerm.asObservable();
public profileTerm=new Subject<any>();
public profile=this.profileTerm.asObservable();
public products=new Subject<any>();
public pro=this.products.asObservable();
public searchTerm=new Subject<any>();
public search=this.searchTerm.asObservable();
public filterTerm=new Subject<any>();
public filter=this.filterTerm.asObservable();
public delete=new Subject<any>();
public del=this.delete.asObservable();
public cartCount=new Subject<any>();
public cartCnt=this.cartCount.asObservable();
onCartCount(ct){
  localStorage.setItem('cartCount',ct);
this.cartCount.next(ct)
}
addProductUrl(url){
  this.addProductTerm.next(url);
}
delity(dee){
  this.delete.next(dee)
}
editSearch(se){
  this.searchTerm.next(se)
}
profileUrl(url){
  this.profileTerm.next(url)
}
editpros(pr){
  this.products.next(pr);
}
editMsgs(msg){
  this.message.next(msg);
}
filterBy(opt){
this.filterTerm.next(opt);
}
  constructor() { }
}
