import { Component, OnInit } from '@angular/core';
import { ReadingClubService } from '../reading-club.service';

@Component({
  selector: 'app-club-admin',
  templateUrl: './club-admin.component.html',
  styleUrls: ['./club-admin.component.css']
})
export class ClubAdminComponent implements OnInit {

  action:number;
  readingClubs:any;
  addMessage:any;
  deleteMessage:any;

  constructor(private service:ReadingClubService) { }

  ngOnInit(): void {
    this.service.getReadingClubs().subscribe(data=>this.readingClubs=data);
  }

  public addClub(newClub:any){
    let resp = this.service.addReadingClub(newClub);
    resp.subscribe((data)=>this.addMessage=data)
  }

  public removeClub(club:any){
    let resp = this.service.removeReadingClub(club);
    resp.subscribe((data)=>this.deleteMessage=data)
  }
}
