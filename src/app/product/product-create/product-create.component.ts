import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  vends:Vendor[] = [];
  pageTitle:string="Create Product"
  prod: Product = new Product();
  
  constructor(
    private prodsvc: ProductService,
    private syssvc: SystemService,
    private router: Router,
    private vendsvc: VendorService
  ) { }

  save(): void{
    this.prodsvc.create(this.prod).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/Products")
      },
      error: (err) => {
        console.debug(err);
      }
    })
  }

  ngOnInit(): void {
    this.vendsvc.list().subscribe({
      next: (res) => {
        console.log("Vendors:",res)
        this.vends = res
      },
      error: (err) =>{
        console.error(err);
  }
  })
  }

}
