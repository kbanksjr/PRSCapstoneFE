import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {


  Pagetitle:string="Create Request Line"
  reql:Requestline = new Requestline;
  prods:Product[] = [];
  reqid:Number=this.reql.requestId
  constructor(
    private reqlsvc: RequestlineService,
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.reqlsvc.create(this.reql).subscribe({
      next:(res)=>{
        console.log(res)
        this.router.navigateByUrl(`/Requests/lines/${this.reql.requestId}`)
      }
    })
  }


  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next:(res)=>{
        console.log(res)
        this.prods=res
      },
      error:(err)=>{
        console.debug(err)
      }
    })
    
    this.reql.requestId = +this.route.snapshot.params["id"];
  }

}
