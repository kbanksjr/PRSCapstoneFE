import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from 'src/app/request/request.class';
import { RequestService } from 'src/app/request/request.service';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestLineListComponent implements OnInit {

  pageTitle: string = "Request Lines";
  reqlns: RequestLine[] = [];
  lineTotal: number = 0;
  req!: Request;

  constructor(
    private sys: SystemService,
    private reqlnsvc: RequestLineService,
    private reqsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  reviewRequest(): void {
    this.reqsvc.review(this.req).subscribe({
      next: (res) => {
        console.debug("Request Status Changed!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  remove(id: number): void {
    this.reqlnsvc.remove(id).subscribe({
      next: (res) => {
        console.debug("Request Line Deleted!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request: ", res);
        this.req = res;
        this.reqlns = this.req.requestLines;
        console.debug("RequestLines: ", this.reqlns);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


}
