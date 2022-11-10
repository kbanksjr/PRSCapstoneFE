import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../../user/user.class';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user:User = this.syssvc.user;
  actusername=this.user.username;
  usernameDisplay:String= this.actusername; 
  
  menus: Menu[] = [
    new Menu("Products","/Products"),
    new Menu("Vendors","/Vendors"),
    new Menu("Users","/Users"),
    new Menu("Requests","/Requests"),
    new Menu("Reviews","/Review"),
    new Menu("About","/about"),
    new Menu("Login","/login"),
  ]

  constructor(
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.syssvc.verifyUser();
    if(this.syssvc.user == null){
      this.usernameDisplay="No User Found"
    }
    this.usernameDisplay=this.syssvc.user.username
    
  }
  
}