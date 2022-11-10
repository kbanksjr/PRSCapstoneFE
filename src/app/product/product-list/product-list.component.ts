import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle="Product List"
  prods:Product[] = [];

  constructor(
    private prodsvc:ProductService
  ) { }

  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.log("Products:",res)
        this.prods = res
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

}
