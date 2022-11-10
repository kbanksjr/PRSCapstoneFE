import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../../user/user.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  showVerifyButton:boolean = false;
  titlePage="Create Request";
  req: Request = new Request;
  sysuser: User = this.syssvc.user
  currentUsername: String = this.sysuser.username
  

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  save():void{
    this.reqsvc.create(this.req).subscribe({
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
    this.req.userid = this.syssvc.user.id
  }

}
