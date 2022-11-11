import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Requestline } from 'src/app/requestline/requestline.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-detail',
  templateUrl: './request-review-detail.component.html',
  styleUrls: ['./request-review-detail.component.css']
})
export class RequestReviewDetailComponent implements OnInit {

  titlePage: string = "Request Review";
  req!: Request;
  reqlns: Requestline[] = [];
  rejectionReason: boolean = false;

  constructor(
    private sys: SystemService,
    private reqlsvc: RequestlineService,
    private reqsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  toggleRejectionReason(): void {
    this.rejectionReason = !this.rejectionReason;
  }

  approveRequest(): void {
    this.reqsvc.approve(this.req).subscribe({
      next: (res) => {
        console.debug("Request is Approved!");
        this.getRequestAndRequestLines();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  rejectRequest(): void {
    this.reqsvc.reject(this.req).subscribe({
      next: (res) => {
        console.debug("Request is Rejected!");
        this.getRequestAndRequestLines();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.sys.verifyUser();
    this.getRequestAndRequestLines();
  }

  getRequestAndRequestLines(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request: ", res);
        this.req = res;
        this.reqlns = this.req.requestlines;
        console.debug("Request Lines: ", this.reqlns)
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
