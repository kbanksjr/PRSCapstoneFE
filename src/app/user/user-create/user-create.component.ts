import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pageTitle: string = "Create User";
  IsDetail: boolean = false;
  user: User  = new User();

  constructor(
    private usersvc: UserService,
    private router: Router
  ) { }


  save(): void {
    this.usersvc.create(this.user).subscribe({
      next: (res) => {
        console.debug("User created");
        this.router.navigateByUrl("/users/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
  }

}
