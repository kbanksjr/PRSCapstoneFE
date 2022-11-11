import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
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

  titlePage:string="Create Request Line"
  reql!:Requestline;
  prods:Product[] = [];
  // reqid:Number=this.reql.requestId
  constructor(
    private sys: SystemService,
    private reqlsvc: RequestlineService,
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.reqlsvc.change(this.reql).subscribe({
      next: (res) => {
        console.debug("Request Line Created!", res);
        this.router.navigateByUrl(`/requestline/${this.reql.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.sys.verifyUser();
    this.getAllProducts();
    let id = this.route.snapshot.params["id"];
    this.reqlsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request Line: ", res);
        this.reql = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  getAllProducts(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products: ", res);
        this.prods = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
    
  }


