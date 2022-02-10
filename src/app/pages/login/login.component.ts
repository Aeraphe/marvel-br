import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/shared/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthenticateService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService.login().subscribe((user) => {
      console.log(user);
    });
    this.router.navigate(['/admin']);
    console.log('login');
  }
}
