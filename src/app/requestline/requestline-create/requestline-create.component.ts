import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  titlePage: string = "Create Request Line";
  reqln: Requestline = new Requestline();
  prods: Product[] = [];

  constructor(
    private sys: SystemService,
    private reqlsvc: RequestlineService,
    private prodsvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    let id = this.route.snapshot.params["id"];
    this.reqlsvc.create(this.reqln).subscribe({
      next: (res) => {
        console.debug("Request Line Created!", res);
        this.router.navigateByUrl(`/requestline/${id}`);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.sys.verifyUser();
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
