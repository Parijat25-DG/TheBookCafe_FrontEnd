import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetriveCartService {

  constructor(private http:HttpClient) { }

  
  retrieveCart(cartId:number): Observable<any> {
   return this.http.get("http://localhost:8080/retrieveCart/"+cartId);
  }

  removeEntry(cartId:number, id:number) : Observable<any> {
    return this.http.get("http://localhost:8080/removeEntry/"+cartId+"/"+id);
  }

}
