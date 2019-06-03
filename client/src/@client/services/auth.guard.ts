import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate() {
    if(localStorage.getItem('isLoggedin')){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
