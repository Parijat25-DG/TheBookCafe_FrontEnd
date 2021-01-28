import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-admin',
  templateUrl: './book-admin.component.html',
  styleUrls: ['./book-admin.component.css']
})
export class BookAdminComponent implements OnInit {

  action:number;
  books:any;
  addMessage:any;
  deleteMessage:any;

  constructor(private service:BookService) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe(data=>this.books=data);
  }

  public addBook(newBook:any){
    let resp = this.service.addBook(newBook);
    resp.subscribe((data)=>this.addMessage=data)
  }

  public removeBook(book:any){
    let resp = this.service.removeBook(book);
    resp.subscribe((data)=>this.deleteMessage=data)
  }

}
