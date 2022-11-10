import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';


@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  showVerifyButton:boolean = false;
  titlePage="Request Detail";
  req!: Request;
  

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  warning():void{
    this.showVerifyButton = !this.showVerifyButton
  }

  deleteConfirm():void{
    this.reqsvc.remove(this.req.id).subscribe({
      next:(res)=>{
        console.debug("Request Deleted")
        this.router.navigateByUrl("/Requests")
      },
      error:(err) =>{
        console.error(err)
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



