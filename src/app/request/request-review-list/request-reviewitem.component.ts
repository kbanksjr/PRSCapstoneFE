import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  pageTitle: string = "Requests Review List"
  reqs: Request[] = [];

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sys.checkLogin();
    this.reqsvc.getReviews(this.sys.user.id).subscribe({
      next: (res) => {
        console.debug("Requests: ", res),
        this.reqs = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}




