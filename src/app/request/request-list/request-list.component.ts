import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  pageTitle:string="Requests List"
  reqs:Request[]=[];
  constructor(
    private reqsvc: RequestService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.reqsvc.list().subscribe({
      next: (res) => {
        console.log("Requests:",res)
        this.reqs = res
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }
  }


