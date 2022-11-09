import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-change',
  templateUrl: './user-change.component.html',
  styleUrls: ['./user-change.component.css']
})
export class UserChangeComponent implements OnInit {

  pageTitle: string = "User Editor";
  IsDetailPage: boolean = false;
  user!: User;


  constructor(
    private sys: SystemService,
    private usersvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

    save(): void {
      this.usersvc.change(this.user).subscribe({
        next: (res) => {
          console.debug("Changes to User Saved!");
          this.router.navigateByUrl("/user/list");
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.usersvc.get(id).subscribe({
      next: (res) => {
        console.debug("User:", res);
        this.user = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
