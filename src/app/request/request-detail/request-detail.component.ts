import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

pageTitle: string = "Request Detail";
req!: Request;
IsDetailPage: boolean = true;


constructor(
  private sys: SystemService,
  private reqsvc: RequestService,
  private router: Router,
  private route: ActivatedRoute
) { }

showVerifyButton: boolean = true;
verifyButtonColor: string = "btn btn-secondary";

  toggleVerifyButton(): void {
    this.showVerifyButton = !this.showVerifyButton;
    this.verifyButtonColor = (this.showVerifyButton ? "btn btn-secondary" : "btn btn-danger");
  }

  toRequestChangePage():void {
    this.router.navigateByUrl(`/request/change/${this.req.id}`);
  }

  remove(): void {
    this.reqsvc.remove(this.req.id).subscribe({
      next: (res) => {
        console.debug("Request Deleted!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.req = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}