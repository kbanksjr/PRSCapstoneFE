import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  pageTitle: string = "Product Creator";
  prod: Product = new Product;
  vens: Vendor[] = [];

  constructor(
    private sys: SystemService,
    private prodsvc: ProductService,
    private vensvc: VendorService,
    private router: Router,
  ) { }

  save(): void {
    this.prod.vendorId = + this.prod.vendorId;
    this.prodsvc.create(this.prod).subscribe({
      next: (res) => {
        console.debug("Created Product!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.getAllVendors();
  }

  getAllVendors(): void {
    this.vensvc.list().subscribe({
      next: (res) => {
        console.debug("Vendors: ", res);
        this.vens = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
