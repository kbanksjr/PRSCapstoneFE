import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  showVerifyButton:boolean = false;
  titlePage="Product Detail"
  prod!:Product;

  constructor(
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  warning():void{
    this.showVerifyButton = !this.showVerifyButton
  }


  deleteConfirm():void{
    this.prodsvc.remove(this.prod.id).subscribe({
      next:(res)=>{
        console.debug("Product Deleted")
        this.router.navigateByUrl("/Products")
      },
      error:(err) =>{
        console.error(err)
      }
    })
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next:(res)=>{
        console.log("Product:",res)
        this.prod = res
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}


