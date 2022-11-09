import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.css']
})
export class ProductChangeComponent implements OnInit {

  pageTitle: string = "Product Editor";
  prod!: Product;
  vens: Vendor[] = [];
  venName: string = "";

  constructor(
    private sys: SystemService,
    private prodsvc: ProductService,
    private vensvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.prod.vendorId = + this.prod.vendorId;
    this.prodsvc.change(this.prod).subscribe({
      next: (res) => {
        console.debug("Changes to Product Saved!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.getAllVendors();
    let id = this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product: ", res);
        this.prod = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
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
