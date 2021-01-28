import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderSubmitService {

  constructor(private http:HttpClient) { }

  public submitOrder(order){
    return this.http.post("http://localhost:8080/submitOrder",order,{responseType:'text' as 'json'});
  }
}
