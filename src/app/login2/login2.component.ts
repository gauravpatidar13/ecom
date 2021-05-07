import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
msg=false;
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }
  loginUser(user){
    this.msg=false;
this.http.post("http://localhost:3000/login",user).subscribe((result:any)=>{
  if(result!=null&&result!=undefined&&result.length>0){
  localStorage.setItem('currentUserId',result[0]._id);
  this.router.navigate(['/products'])
}
  else
this.msg=true;
})
  }
}
