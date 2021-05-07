import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetProfileService {

  constructor(private http:HttpClient) { }
  getProfileImage(id){
return this.http.get(`http://localhost:3000/profile/${id}`)
  }
}
