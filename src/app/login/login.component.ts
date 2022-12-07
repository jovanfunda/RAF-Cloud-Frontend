import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  htmlToAdd = "";
  email = ""
  password = ""

  constructor(private loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    this.loginService.checkPassword(this.email, this.password).subscribe((successfulLogin) => {
      if (successfulLogin) {
        this._router.navigateByUrl("/home");
        localStorage.setItem("JWToken", "Bearer " + successfulLogin)
      } else {
        this.htmlToAdd = '<p>Incorrect email or password</p>';
      }
    })
  }
}
