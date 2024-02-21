import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

class registerForm {
  username : string = "";
  password : string = "";
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userNameLogIn : string = "";
  passwordLogIn : string = "";
  userNameSignUp : string = "";
  passwordSignUp : string = "";


  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    this.initForm();
  }

  login() {
    console.log("Login");
    let loginForm = {
      username : this.userNameLogIn,
      password : this.passwordLogIn
    }
    this.auth.login(loginForm);
  }

  register() {
    console.log("Register");

    let registerForm = {
      username : this.userNameSignUp,
      password : this.passwordSignUp
    }
    console.log(registerForm);

    this.auth.register(registerForm);
  }

  initForm() {
    this.userNameLogIn = "";
    this.passwordLogIn = "";
    this.userNameSignUp = "";
    this.passwordSignUp = "";
  }


}
