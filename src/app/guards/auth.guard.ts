import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../shared/services/authenticate.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  isloggin: boolean = false;

  constructor(
    private authService: AuthenticateService,
    private router: Router
  ) {
    this.authService.isLoggedIn().subscribe((is) => {
      if (is === 'true') {
        this.isloggin = true;
      } else {
        this.isloggin = false;
      }
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isloggin) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
