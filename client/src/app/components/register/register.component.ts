import { Component, OnInit } from '@angular/core';
import { AuthService, TokenPayload } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  credentials: TokenPayload = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: ''
  };

  constructor(private auth: AuthService,
    private router: Router) { }

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    },
    (err) => {
      console.error(err);
    })
  }

}
