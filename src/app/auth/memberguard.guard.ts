import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class MemberguardGuard implements CanActivate {

    constructor(private cs:CommonService, private router: Router, private route: ActivatedRoute){
      console.log(router.routerState.snapshot.url);
    }
  // canActivate() {
  //   if(localStorage.getItem("jwt"))
  //     return true;
  //   else
  //     return false;
  // }

  canActivate(){
    console.log(this.route.snapshot.url);
    if(this.cs.isLoggedIn())
      return true

    else{
      this.router.navigate(['/member/login'], { queryParams: {
        returnUrl: this.router.url
      } });
      return false;
    }

  }

}
