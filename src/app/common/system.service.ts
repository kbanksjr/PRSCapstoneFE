import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  user:any=null;

  
    verifyUser():void{
      if(this.user == null){
        this.route.navigateByUrl("/login")
      }
}

constructor(
  private route:Router

  ) { }
}
