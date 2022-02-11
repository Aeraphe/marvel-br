import { Component, OnInit } from '@angular/core';
import { menuItem } from '../menuItems';

@Component({
  selector: 'app-desktop-menu',
  templateUrl: './desktop-menu.component.html',
  styleUrls: ['./desktop-menu.component.scss'],
})
export class DesktopMenuComponent implements OnInit {
  menuItem: any = [];
  constructor() {
    this.menuItem = menuItem;
  }

  ngOnInit(): void {}
}
