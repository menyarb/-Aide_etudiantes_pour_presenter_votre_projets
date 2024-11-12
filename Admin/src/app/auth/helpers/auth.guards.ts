


import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Chaja3niService } from 'app/services/chaja3ni.service';
import { Observable } from 'rxjs';
 


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
      this.router.navigate(['pages/login']);
      return false;
    }
    
  }

}

