import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  pageTitle: string = "Vendor Creator";
  ven: Vendor = new Vendor();

  constructor(
    private sys: SystemService,
    private vensvc: VendorService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  save(): void {
    this.vensvc.create(this.ven).subscribe({
      next: (res) => {
        console.debug("Vendor Created!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
