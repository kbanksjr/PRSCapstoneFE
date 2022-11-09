import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

pageTitle: string = "Create Vendor";
vendor: Vendor = new Vendor;
isDetail: boolean = false;

  constructor(
    private vensvc: VendorService,
    private router: Router
  ) { }

  save(): void {
    this.vensvc.create(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor created.");
        this.router.navigateByUrl("/vendors/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
  }

}
