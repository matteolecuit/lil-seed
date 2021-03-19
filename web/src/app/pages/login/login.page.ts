import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  constructor() { 
    new FormGroup({
      loginForm: new FormGroup({
          login: new FormControl(),
          password: new FormControl(),
      })
    });
  }

  submitForm() {

  }

  ngOnInit(): void {
  }

}
