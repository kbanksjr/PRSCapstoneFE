import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { User } from 'src/app/user/user.class';
import { UserService } from 'src/app/user/user.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent implements OnInit {

  req: Request[] = [];
  pageTitle: string = "-- Requests To Review --";
  user: User[] = [];

  constructor(
    private reqsvc: RequestService,
    private sys: SystemService,
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
    if(this.sys.user.isReviewer === true) { 
    this.reqsvc.getReviews(this.sys.user.id).subscribe({
      next: (res) => {
        console.debug("Reviews:", res);
        console.debug("SysUserId:", this.sys.user.id);
        this.req = res;

      },
      error: (err) => {
        console.error(err);
      }
    });
   }

  } 
}
