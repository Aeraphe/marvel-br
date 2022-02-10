import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/shared/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggin = 'false';

  constructor(
    private router: Router,
    private authService: AuthenticateService
  ) {
    this.authService.isLoggedIn().subscribe((is) => {
      this.isLoggin = is;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login().subscribe((user) => {
      console.log(user);
    });
    this.router.navigate(['/admin']);
  }

  logOut() {
    this.authService.logout();
    this.isLoggin = 'false';
  }
}
