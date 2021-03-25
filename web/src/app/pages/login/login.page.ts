import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '@services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  errorMessage: String;
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private loginService: LoginService, 
    private router: Router) { 
    
  }

  submitForm() {
    this.loginService.login(
      this.loginForm.controls["login"].value, 
      this.loginForm.controls["password"].value
    )
    .toPromise()
    .then(data => {
      console.log(data);
      this.errorMessage = "";
      this.router.navigate(['dashboard']);
      localStorage.setItem('jwt', data.token);
      console.log(localStorage);
    })
    .catch(error => {
      console.warn("error");
      this.errorMessage = "Erreur lors de la connexion, veuillez réessayer";
    })
  }

  ngOnInit(): void {
  }

}
