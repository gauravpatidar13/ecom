import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input('product') product;
@Output() eventEmitter=new EventEmitter();
  constructor(private router:Router,private toastr:ToastrService) { }
  addToCart(product){
this.eventEmitter.emit(product);
this.toastr.success("product successfully added to card","Added Into Cart")
  }
  openProductDetail(product){
this.router.navigate(['products',product.id])
  }

  ngOnInit(): void {
  }

}
