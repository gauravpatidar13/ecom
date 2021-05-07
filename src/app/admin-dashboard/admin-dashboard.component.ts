import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../add-product.service';
import { FileUpload } from '../file-upload';
import { FileUploadService } from '../file-upload.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
selectedFile=null;
productToAdd=null;
url=null;
downloadUrl;
fileUpload:FileUpload;
  constructor(private uploadService:FileUploadService,private ss:SharedService,
    private aps:AddProductService) { }

  ngOnInit(): void {
this.ss.addProduct.subscribe(url=>{
  console.log(url)
this.aps.addProduct({name:this.productToAdd.name,
price:this.productToAdd.price,
des:this.productToAdd.des,
category:this.productToAdd.category,
image:url}).then(value=>{
  console.log(value);
})
})
  }
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile=event.target.files[0];
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  addProduct(addPro){
    if(this.checkPrice(addPro.price)){
    if(this.selectedFile!=null){
this.fileUpload=new FileUpload(this.selectedFile);
      this.uploadService.pushFileToStorage(this.fileUpload,false)
      this.productToAdd=addPro;
    }else{ 
      console.log('select product image')
    }
    }else{
      console.log('price must have greater than 0')
    }

  }
  checkPrice(price){
return price>0?true:false;
  }
}
