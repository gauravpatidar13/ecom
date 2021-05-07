import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.component.html',
  styleUrls: ['./register2.component.css']
})
export class Register2Component implements OnInit {
_terms=false;
url;
selectedFile=null;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  toggleTerms(inp){
if(inp.checked)
this._terms=true;
else
this._terms=false;
  }
  registerUser(user){
this.http.post('http://localhost:3000/register',user).subscribe((result:any)=>{
  console.log(result);
  localStorage.setItem('currentUserId',result._id)
})
  }
}
