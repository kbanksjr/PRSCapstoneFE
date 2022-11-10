import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../../vendor/vendor.class';
import { VendorService } from '../../vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.css']
})
export class ProductChangeComponent implements OnInit {

  vends:Vendor[] = [];
  prod!:Product;
  titlePage="Edit Product"

  constructor(
    private prodsvc:ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService,
    private vendsvc: VendorService
  ) { }



  save():void{
    this.prodsvc.change(this.prod).subscribe({
      next:(res) => {
        console.debug("Product Changed")
        this.router.navigateByUrl("/Products")
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res)
        this.prod = res
      },
      error: (err) => {
        console.error(err)
      }
    })
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


