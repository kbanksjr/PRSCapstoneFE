import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  showVerifyButton:boolean = false;
  titlePage="Vendor Detail"
  vend!:Vendor;
  constructor(
    private vendsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }

  warning():void{
    this.showVerifyButton = !this.showVerifyButton
  }

  deleteConfirm():void{
    this.vendsvc.remove(this.vend.id).subscribe({
      next:(res)=>{
        console.debug("Vendor Deleted")
        this.router.navigateByUrl("/Vendors")
      },
      error:(err) =>{
        console.error(err)
      }
    })
  }
  

  ngOnInit(): void {
    this.syssvc.verifyUser();
    let id = +this.route.snapshot.params["id"];
    this.vendsvc.get(id).subscribe({
      next:(res)=>{
        console.log("Vendor:",res)
        this.vend = res
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
