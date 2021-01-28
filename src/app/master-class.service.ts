import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterClassService {

  constructor(private http:HttpClient) { }

  getMasterClasses() {
    return this.http.get("http://localhost:8080/getMasterClasses");
  }

  public addMasterClass(aclass){    
    return this.http.post("http://localhost:8080/addMasterClass",aclass,{responseType:'text' as 'json'});
  }

  public removeMasterClass(aclass){    
    return this.http.post("http://localhost:8080/removeMasterClass",aclass,{responseType:'text' as 'json'});
  }
}
