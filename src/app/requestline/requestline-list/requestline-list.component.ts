import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request/request.service';
import { RequestlineService } from '../requestline.service';
import { Request } from '../../request/request.class';
import { Requestline } from '../requestline.class';
import { ProductService } from '../../product/product.service';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  titlePage:string="Request Lines";
  reqlines: Requestline[] = [];
  req!: Request;
  reql!:Requestline;
  lineTotal: number = 0;
 
  
  
  constructor(
    private sys: SystemService,
    private reqlsvc:RequestlineService,
    private reqsvc:RequestService,
    private prodsvc:ProductService,
    private route: ActivatedRoute,
  ) { }

  
  submitReview(): void {
    this.req.rejectionReason = "";
    this.reqsvc.review(this.req).subscribe({
      next: (res) => {
        console.debug("Request reviewed");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  reqlnDelete(id: number): void {

    this.reqlsvc.remove(id).subscribe({
      next: (res) => {
        console.debug("RequestLine Deleted");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    let id = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Request:", res);
        this.req = res;
        console.debug("Reqreqln:", this.req.requestLines);
       
      },
      error: (err) => {
          console.error(err);
        }
      }
    }); 
  }
  
  ngOnInit(): void {
    this.sys.verifyUser();
    this.refresh();
  }


}
