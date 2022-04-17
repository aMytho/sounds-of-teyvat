import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
    providedIn: 'root'
})
export class IsLoggedInGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
        ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isLoggedIn = this.authService.isLoggedIn;
        if (isLoggedIn) {
            return true;
        } else {
            return this.router.parseUrl('/login');
        }
    }
}
