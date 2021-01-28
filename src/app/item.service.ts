import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  getItems() {
    return this.http.get("http://localhost:8080/getAllItems");
  }

  public addItem(item){    
    return this.http.post("http://localhost:8080/addItem",item,{responseType:'text' as 'json'});
  }

  public removeItem(item){    
    return this.http.post("http://localhost:8080/removeItem",item,{responseType:'text' as 'json'});
  }
}
