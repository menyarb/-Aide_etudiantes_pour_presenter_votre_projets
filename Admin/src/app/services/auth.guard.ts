


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Chaja3niService } from './chaja3ni.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(  private _Chaja3niService :Chaja3niService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = this._Chaja3niService.isLoggedIn();

    if (isLoggedIn) {
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
    
  }

}

