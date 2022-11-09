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

  pageTitle: string = "User Creator";
  user: User = new User();

  constructor(
    private sys: SystemService,
    private usersvc: UserService,
    private router: Router
  ) { }

  save(): void {
    this.usersvc.create(this.user).subscribe({
      next: (res) => {
        console.debug("User Created!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
  }

}
