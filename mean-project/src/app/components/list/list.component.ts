import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private isu_service: IssueService) { }

  coldata: string[] = ['title', 'responsible', 'severity', 'status', 'description'];

  mydata:any;

  ngOnInit() {
    this.isu_service.getIssues()
      .subscribe((issues) => {this.mydata = issues;     
      });
  }

  onbtn(id) {
    console.log('aaa:',id);
  }

}
