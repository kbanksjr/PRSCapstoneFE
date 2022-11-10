import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request/request.service';
import { RequestlineService } from '../requestline.service';
import { Request } from '../../request/request.class';
import { Requestline } from '../requestline.class';
import { ProductService } from '../../product/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  pageTitle:string="Request Lines"
  reqlines: Requestline[] = [];
  req!: Request;
  reql!:Requestline;
  
  
  constructor(
    private reqlsvc:RequestlineService,
    private reqsvc:RequestService,
    private prodsvc:ProductService,
    private route: ActivatedRoute,
  ) { }

  clearReject():void{
    this.req.rejectionReason = "";
    this.reqsvc.change(this.req).subscribe({
      next:(res)=>{
      console.log(res)
      this.review()
      },
      error:(err)=>{
        console.error(err)
      }
    })
  }
 
review():void{
  this.reqlsvc.review(this.req).subscribe({
    next:(res)=>{
      console.log(res)
      this.refresh()
    },
    error:(err)=>{
      console.error(err);
    }
  })
}

delete(id:number):void{
  this.reqlsvc.remove(id).subscribe({
    next:(res)=>{
      console.log(res)
      this.refresh()
    },
    error:(err)=>{
      console.error(err)
    }
  })
}

refresh():void{
  this.reqsvc.get(this.req.id).subscribe({
    next:(res)=>{
      console.log(res)
      this.req = res
    }
  })
  this.reqlsvc.list().subscribe({
    next: (res) => {
      console.log("Requestlines:",res)
      this.reqlines = res;
    },
    error: (err) => {
      console.error(err)
    }
  })
}


  ngOnInit(): void {
    let reqid = +this.route.snapshot.params["id"];
    this.reqsvc.get(reqid).subscribe({
      next:(res)=>{
        console.log(res)
        this.req = res
      },
      error:(err)=>{
        console.error(err)
      }
    })
    this.reqlsvc.list().subscribe({
      next: (res) => {
        console.log("Requestlines:",res)
        this.reqlines = res;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
    

}
