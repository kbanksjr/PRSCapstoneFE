import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  footerMessage:string = "PRS Capstone"

  constructor() { }

  ngOnInit(): void {
  }

}
