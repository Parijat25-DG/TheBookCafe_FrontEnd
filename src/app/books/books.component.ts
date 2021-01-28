import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : any;
  searchGenre : string="";

  constructor(private service:BookService) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe(data=>this.books=data);
  }

}
