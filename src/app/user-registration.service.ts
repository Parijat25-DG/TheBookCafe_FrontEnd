import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public registerUser(user){
    return this.http.post("http://localhost:8080/registerUser",user,{responseType:'text' as 'json'});
  }

 
}
