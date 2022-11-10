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

pageTitle:string="Create Vendor"
vend: Vendor = new Vendor();


constructor(
  private vendsvc: VendorService,
  private syssvc: SystemService,
  private router: Router
) { }

  save():void{
    this.vendsvc.create(this.vend).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/Vendors")
      },
      error: (err) => {
        console.debug(err);
      }
    })
  }


  ngOnInit(): void {
    this.syssvc.verifyUser();
  }

}
