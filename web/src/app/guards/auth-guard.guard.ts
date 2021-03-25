import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  helper = new JwtHelperService();

  constructor(private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    try {
      const isExpired = this.helper.isTokenExpired(localStorage.getItem("jwt"));
       if (!isExpired) {
         return true;
       } else {
          this.router.navigate(['login']);
         return false;
       }
    } catch {
      this.router.navigate(['login']);
      return false;
    }    
  }
  
}
