import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  email:string="";
  password:string="";
  message:string="";

  constructor(
    private syssvc: SystemService,
    private usersvc: UserService,
    private router: Router
  ) { }



  login(): void{
    this.usersvc.login(this.email, this.password).subscribe({
      next:(res) => {
        console.debug("User:", res)
        this.router.navigateByUrl("/Users")
        this.syssvc.user = res;
      },
      error: (err) => {
        console.error(err)
        this.message = "Email or Password not found"
      }
    })
  }
  ngOnInit(): void {
  }

}
