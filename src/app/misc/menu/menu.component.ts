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

 
  usernameDisplay:string= ""; 
  
  menus: Menu[] = [
    new Menu("Products","/product"),
    new Menu("Vendors","/vendor"),
    new Menu("Users","/user"),
    new Menu("Requests","/request"),
    new Menu("Reviews","/review"),
    new Menu("About","/about"),
    new Menu("Login","/login"),
  ]

  constructor(
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
    this.syssvc.verifyUser();
    this.usernameDisplay=this.syssvc.user.username
    
  }
  
}