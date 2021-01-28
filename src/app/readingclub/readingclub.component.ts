import { Component, OnInit } from '@angular/core';
import { ReadingClubService } from '../reading-club.service';

@Component({
  selector: 'app-readingclub',
  templateUrl: './readingclub.component.html',
  styleUrls: ['./readingclub.component.css']
})
export class ReadingclubComponent implements OnInit {

  readingClubs : any;
  searchGenre : string="";

  constructor(private service:ReadingClubService) { }

  ngOnInit(): void {
    this.service.getReadingClubs().subscribe(data=>this.readingClubs=data);
  }
}
