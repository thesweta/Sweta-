import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usernamevalidators } from '../username.validators';
@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("Sweta"),
      usernamevalidators.unique
    ]),
    password: new FormControl("", Validators.required),
    phonenumber: new FormControl("", Validators.required)
  });
  get username() {
    return this.form.get('username')
  }
  get password() {
    return this.form.get('password')
  }

  submit(x) {
    console.log(x.value);
  }
  constructor() { }

  ngOnInit() {
  }

}
