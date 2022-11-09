import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from 'src/app/user/user.class';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  pageTitle: string = "Request Creator";
  req: Request = new Request();
  user: User = this.sys.user;

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private router: Router
  ) { }

  save(): void {
    this.req.userId = +this.user.id;
    this.reqsvc.create(this.req).subscribe({
      next: (res) => {
        console.debug("Request Created!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.sys.checkLogin();
    this.req.userId = this.sys.user.id;
  }
}
