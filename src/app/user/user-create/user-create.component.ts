import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pageTitle:string="Create User"
  user: User = new User();
  
  constructor(
    private usersvc: UserService,
    private syssvc: SystemService,
    private router: Router
  ) { }
  
  
    save(): void{
      this.usersvc.create(this.user).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigateByUrl("/Users")
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
