import { Component, OnInit } from '@angular/core';
import { RegisterService } from './services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor(private _register: RegisterService,
              private _router: Router) { }

  ngOnInit() {
  }

  register(){
    this._register.register(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/profile'])
      },
      err => console.log(err)
    )
  }

}
