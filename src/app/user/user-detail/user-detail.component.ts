import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  showVerifyButton:boolean = false;
  titlePage="User Detail"
  user!:User;
  constructor(
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private syssvc: SystemService
  ) { }


  warning():void{
    this.showVerifyButton = !this.showVerifyButton
  }


  deleteConfirm():void{
    this.usersvc.remove(this.user.id).subscribe({
      next:(res)=>{
        console.debug("User Deleted")
        this.router.navigateByUrl("/Users")
      },
      error:(err) =>{
        console.error(err)
      }
    })
  }

  ngOnInit(): void {
    this.syssvc.verifyUser();
    let id = +this.route.snapshot.params["id"];
    this.usersvc.get(id).subscribe({
      next:(res)=>{
        console.log("User:",res)
        this.user = res
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
