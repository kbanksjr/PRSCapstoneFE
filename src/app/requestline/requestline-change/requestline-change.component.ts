import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { RequestLineService } from '../requestline.service';
import { ProductService } from 'src/app/product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLine } from '../requestline.class';
import { Product } from 'src/app/product/product.class';

@Component({
  selector: 'app-requestline-change',
  templateUrl: './requestline-change.component.html',
  styleUrls: ['./requestline-change.component.css']
})
export class RequestLineChangeComponent implements OnInit {

  pageTitle: string = "Request Line Editor";
  reqln!: RequestLine;
  prods: Product[] = [];

  constructor(
    private sys: SystemService,
    private reqlnsvc: RequestLineService,
    private prodsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.reqlnsvc.change(this.reqln).subscribe({
      next: (res) => {
        console.debug("Request Line Created!", res);
        this.router.navigateByUrl(`/requestline/list/${this.reqln.requestId}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
    let id = this.route.snapshot.params["id"];
    this.reqlnsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request Line: ", res);
        this.reqln = res;
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
