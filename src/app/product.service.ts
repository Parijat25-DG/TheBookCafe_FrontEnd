import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get("http://localhost:8080/getAllProducts");
  }

  public addProduct(product){    
    return this.http.post("http://localhost:8080/addProduct",product,{responseType:'text' as 'json'});
  }

  public removeProduct(product){    
    return this.http.post("http://localhost:8080/removeProduct",product,{responseType:'text' as 'json'});
  }

}
