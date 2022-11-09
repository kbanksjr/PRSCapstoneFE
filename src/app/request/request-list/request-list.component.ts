import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  pageTitle: string = "Request List";
  reqs: Request[] = [];

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
  ) { }

  ngOnInit(): void {
    this.reqsvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.reqs = res;
      },
      error: (err) => {
        console.debug(err);
      }
    });
  }

}
