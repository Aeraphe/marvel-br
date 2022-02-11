import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateService } from 'src/app/shared/services/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  navState = false;
  isLogging$: Observable<string>;
  menuItemName = 'Login';

  constructor(private authservice: AuthenticateService) {
    this.isLogging$ = this.authservice.isLoggedIn();
    this.isLogging$.subscribe((is) => {
      if (is === 'true') {
        this.menuItemName = 'Logout';
      } else {
        this.menuItemName = 'Login';
      }
    });
  }

  ngOnInit(): void {}

  openNav() {
    this.navState = true;
  }

  closeNav(state: any) {
    this.navState = state;
  }
}
