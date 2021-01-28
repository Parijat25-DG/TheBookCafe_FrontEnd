import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  public loginCustomer(customer){
    console.log(customer.username);
    
    return this.http.post("http://localhost:8080/loginUser",customer,{responseType:'text' as 'json'});
  }
}
