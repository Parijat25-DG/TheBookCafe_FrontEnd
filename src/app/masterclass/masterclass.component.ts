import { Component, OnInit } from '@angular/core';
import { MasterClassService } from '../master-class.service';

@Component({
  selector: 'app-masterclass',
  templateUrl: './masterclass.component.html',
  styleUrls: ['./masterclass.component.css']
})
export class MasterclassComponent implements OnInit {

  masterClasses : any;
  searchCategory : string = "";

  constructor(private service:MasterClassService) { }

  ngOnInit(): void {
    this.service.getMasterClasses().subscribe(data=>this.masterClasses=data);
  }

}
