import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navState =  false
  constructor() { }

  ngOnInit(): void {
  }

  openNav(){
    this.navState = true;
    console.log("Open")
  }

  closeNav(state:any){
    this.navState = state;
  }

}
