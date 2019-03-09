import { Component, OnInit } from '@angular/core';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserData = {}
  constructor(private _register: RegisterService) { }

  ngOnInit() {
  }

  register(){
    this._register.register(this.registerUserData)
    .subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
