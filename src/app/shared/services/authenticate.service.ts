import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { json } from 'express';
import { of, BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  private subject = new BehaviorSubject<any>(false);
  private isLoggedIn$: Observable<any> = this.subject.asObservable();

  constructor(private router: Router) {
    this.isLoggedIn$.pipe(map((auth) => auth));
  }

  login(user:User): Observable<any> {
    sessionStorage.setItem('loggedin', 'true');
    sessionStorage.setItem('user-email',user.email);
    this.subject.next('true');
    return of(user);
  }

  logout() {
    sessionStorage.setItem('loggedin', 'false');
    this.subject.next('fasle');

  }

  isLoggedIn(): Observable<string> {
    let isLogged = sessionStorage.getItem('loggedin');
    if (isLogged) {
      this.subject.next(isLogged);
    } else {
      this.subject.next('false');
    }
    return this.isLoggedIn$;
  }
}
