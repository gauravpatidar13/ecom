import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUpload } from '../file-upload';
import { FileUploadService } from '../file-upload.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user;
selectedFile=null;
currentFileUpload:FileUpload;
percentage:number;
url=null;
  constructor(private http:HttpClient,private uploadService: FileUploadService,private ss:SharedService) { }
currentUserId=localStorage.getItem('currentUserId');
  ngOnInit(): void {
  this.http.get(`http://localhost:3000/users/${this.currentUserId}`).subscribe((data:any)=>{
  if(data.length==1) 
  this.user=data[0];
  this.url=data[0].profile;
  })
this.ss.profile.subscribe(downloadUrl=>{
  console.log(downloadUrl)
  this.http.put('http://localhost:3000/users',{_id:this.user._id,profile:downloadUrl}).subscribe(data=>{  
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
  updateProfile(){
    if(this.selectedFile!=null){
      this.currentFileUpload = new FileUpload(this.selectedFile);
      this.uploadService.pushFileToStorage(this.currentFileUpload,true).subscribe(
        percentage => {
          this.percentage = Math.round(percentage);
          if(this.percentage==100){
           
          }
        },
        error => {
          console.log(error);
        }
      );


    }
  }
}
