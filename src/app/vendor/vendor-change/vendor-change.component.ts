import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-change',
  templateUrl: './vendor-change.component.html',
  styleUrls: ['./vendor-change.component.css']
})
export class VendorChangeComponent implements OnInit {

  titlePage:string="Edit Vendor"
  vend!:Vendor;
  constructor(
    private vendsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  save():void{
    this.vendsvc.change(this.vend).subscribe({
      next:(res) => {
        console.debug("Vendor Changed")
        this.router.navigateByUrl("/Vendors")
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }


  ngOnInit(): void {
    this.syssvc.verifyUser();
    let id = +this.route.snapshot.params["id"];
    this.vendsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res)
        this.vend = res
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
