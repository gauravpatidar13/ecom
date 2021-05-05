import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cate="All Categories";
cart_count=0;
openHdl(searchTerm){
this.ss.editSearch(searchTerm)
}
  constructor(private router:Router,private ar:ActivatedRoute,private ss:SharedService) {
   
    let savedCartCount=parseInt(localStorage.getItem('cartCount'));
if(savedCartCount>0){
  this.cart_count=savedCartCount;
}
   this.ss.cartCount.subscribe(data=>{
     console.log(data)
     this.cart_count=data;
   })
    this.ar.queryParamMap.subscribe(params=>{
      let category=params.get('category')
      switch(category){
        case "Mens":
          this.ss.editMsgs('Mens');
          break;
          case "Womens":
          this.ss.editMsgs("Womens");
          break;
          case "Electronics":
          this.ss.editMsgs("Electronics");
          break;
          default:
            this.ss.editMsgs("Default")
      }
    })
   }

  ngOnInit(): void {
    
  }
  openCategory(cate){
    this.cate=cate;
    this.router.navigate(['products'],{queryParams:{category:cate}})
  }

   filterOne(checkbox) {
    var checkboxes = document.getElementsByName('filter')
    checkboxes.forEach((item:any) => {
        if (item !== checkbox) item.checked = false;
    })
}
applyFilter(){
  var checkboxes = document.getElementsByName('filter')
  checkboxes.forEach((item:any) => {
    if(item.id==="filt1"&&item.checked){
     this.ss.filterBy(1)
    }
    else if(item.id==="filt2"&&item.checked){
      this.ss.filterBy(2);
    }
    else if(item.id==="filt3"&&item.checked){
      this.ss.filterBy(3);
    }
})
}
closeFilter(){
  this.ss.filterBy(null)
}
}
