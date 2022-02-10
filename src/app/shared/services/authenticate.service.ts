import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, BehaviorSubject, Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private subject = new BehaviorSubject<any>(false);
  auth$: Observable<any> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean>;

  constructor(private router:Router) {
    this.isLoggedIn$ = this.auth$.pipe(map((auth) => auth));
  }

  login(): Observable<any> {
    sessionStorage.setItem('loggedin', 'true');
    return of({ name: 'admin', email: 'admin@gmail.com' });
  }

  logout() {
    sessionStorage.setItem('loggedin', 'false');
    this.router.navigate(['login'])

  }

  isLoggedIn() {
    let isLogged = sessionStorage.getItem('loggedin');

    if (isLogged === 'true') {
      return true;
    }
    return false;
  }
}
