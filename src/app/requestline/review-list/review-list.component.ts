import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product/product.service';
import { RequestService } from '../../request/request.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { Request } from '../../request/request.class';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  pageTitle:string="Reviews List"
  reqlines: Requestline[] = [];
  reqs: Request[] = [];
  reql!:Requestline;
  review:string = "Review"

  constructor(
    private reqlsvc:RequestlineService,
    private reqsvc:RequestService,
    private prodsvc:ProductService,
    private route: ActivatedRoute,) { }

  refresh():void{
    this.reqsvc.list().subscribe({
      next:(res)=>{
        console.log(res)
        this.reqs = res
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

  ngOnInit(): void {
    
    this.reqsvc.list().subscribe({
      next:(res)=>{
        console.log(res)
        this.reqs = res
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
