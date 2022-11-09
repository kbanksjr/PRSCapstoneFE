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

  pageTitle: string = "User Detail";
  user!: User;
  IsDetailPage: boolean = true;


  constructor(
    private sys: SystemService,
    private usersvc: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  showVerifyButton: boolean = true;
  verifyButtonColor: string = "btn btn-secondary";

  toggleVerifyButton(): void {
    this.showVerifyButton = !this.showVerifyButton;
    this.verifyButtonColor = (this.showVerifyButton ? "btn btn-secondary" : "btn btn-danger");
  }

  toUserChangePage():void {
    this.router.navigateByUrl(`/user/change/${this.user.id}`);
  }

  remove(): void {
    this.usersvc.remove(this.user.id).subscribe({
      next: (res) => {
        console.debug("User Deleted!");
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
