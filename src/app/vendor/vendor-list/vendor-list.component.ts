import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  pageTitle:string="Vendor List"
  vends: Vendor[] = [];


  constructor(
    private vendsvc: VendorService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.syssvc.verifyUser();
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
