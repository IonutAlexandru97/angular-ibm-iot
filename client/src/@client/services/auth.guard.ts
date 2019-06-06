import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthenticationService,
              private router: Router,
              private snackbar: MatSnackBar) {}

  canActivate() {
    if(localStorage.getItem('isLoggedin')){
      return true;
    }
    this.snackbar.open('Error!', 'You are not authorized to see this page!', {
      duration: 10000
    });
    this.router.navigate(['/login']);
    return false;
  }
}
