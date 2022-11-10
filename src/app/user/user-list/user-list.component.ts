import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

pageTitle:string="User List"
users:User[]=[];


  constructor(
    private usersvc: UserService,
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.syssvc.verifyUser();
    this.usersvc.list().subscribe({
      next: (res) => {
        console.log("Users:",res)
        this.users = res
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

}
