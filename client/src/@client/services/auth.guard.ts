import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthenticationService,
              private router: Router,
              private snackbar: MatSnackBar) {}

  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    } else {
    this.snackbar.open('Error!', 'You are not authorized to see this page!', {
      duration: 10000
    });
    this.router.navigate(['/login']);
    return false;
    }
  }
}
