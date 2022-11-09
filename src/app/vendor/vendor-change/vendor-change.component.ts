import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-change',
  templateUrl: './vendor-change.component.html',
  styleUrls: ['./vendor-change.component.css']
})
export class VendorChangeComponent implements OnInit {

  pageTitle: string = "Vendor Editor";
  ven!: Vendor;

  constructor(
    private sys: SystemService,
    private vensvc: VendorService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.vensvc.change(this.ven).subscribe({
      next: (res) => {
        console.debug("Changes to Vendor Saved!");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.vensvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.ven = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}