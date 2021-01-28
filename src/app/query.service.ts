import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http:HttpClient) { }

  public saveQuery(query){
    return this.http.post("http://localhost:8080/saveQuery",query,{responseType:'text' as 'json'});
  }


}
