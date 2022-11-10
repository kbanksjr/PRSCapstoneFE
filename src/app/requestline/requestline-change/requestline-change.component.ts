import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-change',
  templateUrl: './requestline-change.component.html',
  styleUrls: ['./requestline-change.component.css']
})
export class RequestlineChangeComponent implements OnInit {

  Pagetitle:string="Create Request Line"
  reql!:Requestline;
  prods:Product[] = [];
  // reqid:Number=this.reql.requestId
  constructor(
    private reqlsvc: RequestlineService,
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.reqlsvc.change(this.reql).subscribe({
      next:(res)=>{
        console.log(res)
        this.router.navigateByUrl(`/Requests/lines/${this.reql.requestId}`)
      }
    })
  }


  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.reqlsvc.get(id).subscribe({
      next:(res)=>{
        console.log(res)
        this.reql=res
      },
      error:(err)=>{
        console.debug(err)
      }
    })
    this.prodsvc.list().subscribe({
      next:(res)=>{
        console.log(res)
        this.prods=res
      },
      error:(err)=>{
        console.debug(err)
      }
    })
    
  }
}
