import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadingClubService {

  constructor(private http:HttpClient) { }

  getReadingClubs() {
    return this.http.get("http://localhost:8080/getReadingClubs");
  }

  public addReadingClub(club){    
    return this.http.post("http://localhost:8080/addReadingClub",club,{responseType:'text' as 'json'});
  }

  public removeReadingClub(club){    
    return this.http.post("http://localhost:8080/removeReadingClub",club,{responseType:'text' as 'json'});
  }
}
