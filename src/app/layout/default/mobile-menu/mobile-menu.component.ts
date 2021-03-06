import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
  Renderer2,
} from '@angular/core';

import { menuItem } from '../menuItems';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit, OnChanges {
  @Input() open: boolean = false;
  @Output('close') closeNavEvt: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  close = false;

  menuItem: any = [];

  constructor(private render: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['open'].currentValue) {
      this.close = !changes['open'].currentValue;
      this.render.addClass(document.body, 'mobily-menu--open');
    } else {
      this.render.removeClass(document.body, 'mobily-menu--open');
    }
  }

  ngOnInit(): void {
    this.menuItem = menuItem;
  }

  closeMenu() {
    this.closeNavEvt.emit(false);
    this.close = true;
    let self = this;
    setTimeout(() => {
      self.close = false;
    }, 70);
  }
}
