import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/shared/services/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggin = 'false';
  formGroup: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthenticateService,
    private fb: FormBuilder
  ) {
    this.authService.isLoggedIn().subscribe((is) => {
      this.isLoggin = is;
    });

    this.formGroup = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formGroup.valid);
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe((user) => {
        console.log(user);
      });

      this.router.navigate(['/admin']);
    }
  }

  logOut() {
    this.authService.logout();
    this.isLoggin = 'false';
  }
}
