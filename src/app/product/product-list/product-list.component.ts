import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Product List";
  prods: Product[] = [];

  constructor(
    private sys: SystemService,
    private prodsvc: ProductService,
  ) { }

    ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug("Products: ", res);
        this.prods = res;
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

}
