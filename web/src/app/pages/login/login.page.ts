import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private loginService: LoginService) { 
    
  }

  submitForm() {
    this.loginService.login(
      this.loginForm.controls["login"].value, 
      this.loginForm.controls["password"].value
    )
    .toPromise()
    .then(data => {
      console.log(data);
    })
    
  }

  ngOnInit(): void {
  }

}
