import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-change',
  templateUrl: './request-change.component.html',
  styleUrls: ['./request-change.component.css']
})
export class RequestChangeComponent implements OnInit {

  showVerifyButton:boolean = false;
  titlePage="Request Edit";
  req!: Request;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save():void{
    this.reqsvc.change(this.req).subscribe({
      next:(res) => {
        console.debug("Request Changed")
        this.router.navigateByUrl("/Requests")
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next:(res)=>{
        console.log("Request:",res)
        this.req = res
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
