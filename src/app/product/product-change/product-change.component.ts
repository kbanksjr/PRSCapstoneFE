import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  pageTitle: string = "Edit Product"
  product!: Product;
  vendors: Vendor[] = [];
  products: Product[] = [];
  isDetail: boolean = false;
  //unique: string[] = [];

  constructor(
    private router: Router,
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private route: ActivatedRoute
  ) { }


    save(): void {
      this.prodsvc.change(this.product).subscribe({
      next: (res) => {
        console.debug("Changes saved", res);
        this.router.navigateByUrl("/products/list");
      },
      error: (err) => {
        console.error(err);
      }
      })
    }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
    this.vendsvc.list().subscribe({
      next: (result) => {
        console.debug("All:", result);
        this.vendors = result;
      },
      error: (err) => {
        console.error;
      }
    })
  }

}

