import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  pageTitle: string = "Request Line Creator";
  reqln: RequestLine = new RequestLine();
  prods: Product[] = [];

  constructor(
    private sys: SystemService,
    private reqlnsvc: RequestLineService,
    private prodsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    let id = this.route.snapshot.params["id"];
    this.reqlnsvc.create(this.reqln).subscribe({
      next: (res) => {
        console.debug("Request Line Created!", res);
        this.router.navigateByUrl(`/requestline/list/${id}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.getAllProducts();
    let requestId = this.route.snapshot.params["id"];
    this.reqln.requestId = +requestId;
    console.debug("reqln", this.reqln);
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
