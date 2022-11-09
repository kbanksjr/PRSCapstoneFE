import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  prod!: Product;
  ven!: Vendor;
  verifyDeleteButton: boolean = true;
  verifyDeleteButtonColor: string = "btn btn-secondary";

  constructor(
    private sys: SystemService,
    private prodsvc: ProductService,
    private vensvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  toProductChangePage(): void {
    this.router.navigateByUrl(`/product/change/${this.prod.id}`);
  }

  toggleVerifyDelete(): void {
    this.verifyDeleteButton = !this.verifyDeleteButton;
    this.verifyDeleteButtonColor = this.verifyDeleteButton ? "btn btn-secondary" : "btn btn-danger";
  }

  remove(): void {
    this.prodsvc.remove(this.prod.id).subscribe({
      next: (res) => {
        console.debug("Product Deleted!", res)
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
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

}
