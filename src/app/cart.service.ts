import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  public saveCart(cart){
      
    return this.http.post("http://localhost:8080/saveCart",cart,{responseType:'text' as 'json'});
  }
}

