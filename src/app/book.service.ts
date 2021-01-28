import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

  getBooks() {
    return this.http.get("http://localhost:8080/getAllBooks");
  }

  public addBook(book){    
    return this.http.post("http://localhost:8080/addBook",book,{responseType:'text' as 'json'});
  }

  public removeBook(book){    
    return this.http.post("http://localhost:8080/removeBook",book,{responseType:'text' as 'json'});
  }
}
