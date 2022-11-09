import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-change',
  templateUrl: './request-change.component.html',
  styleUrls: ['./request-change.component.css']
})
export class RequestChangeComponent implements OnInit {

  pageTitle: string = "Request Editor";
  IsDetailPage: boolean = false;
  req!: Request;


  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

    save(): void {
      this.reqsvc.change(this.req).subscribe({
        next: (res) => {
          console.debug("Changes to Request Saved!");
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
        console.debug("User:", res);
        this.req = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
