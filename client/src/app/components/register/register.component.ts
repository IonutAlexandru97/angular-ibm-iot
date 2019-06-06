import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/@client/services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerUserData: TokenPayload = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: ''
  }
  constructor(private auth: AuthenticationService) { }
  register() {
    this.auth.register(this.registerUserData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
        },
        (err) => { console.error(err); }
      )
  }

}
