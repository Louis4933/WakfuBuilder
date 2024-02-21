import { Injectable } from '@angular/core';
import { UserI } from '../models/user-i';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn : boolean = false;
  user !: UserI;
  authID : { username : string, password : string } = { username : "", password : "" };

  constructor(private http : HttpClient, private router : Router) { }

  login(loginForm : any) {
    this.http.post<UserI>("http://localhost:8080/login", loginForm).subscribe({
      next : (data : UserI) => {
        if(data) {
          this.user = data;
          this.isLoggedIn = true;
          console.log(this.user);
          this.router.navigate(["/"]);
        }else {
          Notify.failure("Veuillez vérifier vos identifiants de connexion.");
        }
      },
      error : (err) => {
        Notify.failure("Erreur de connexion \nVeuillez vérifier vos identifiants de connexion.");
        console.log(err);
      },
      complete : () => {
        console.log("Login completed");
      }
    })
  }

  logout() {
    this.isLoggedIn = false;
    this.user = { id : "", username : "" };
    this.router.navigate(["/"]);
  }

  register(registerForm : any) {
    this.http.post<UserI>("http://localhost:8080/register", registerForm).subscribe({
      next : (data : UserI) => {
        console.log(data);
        if(data) {
          this.user = data;
          this.isLoggedIn = true;
          console.log(this.user);
          this.router.navigate(["/"]);
        }else {
          Notify.failure("Nom d'utilisateur déjà utilisé");
        }

      },
      error : (err) => {
        Notify.failure("Erreur de création de compte \nVeuillez vérifier vos identifiants de connexion.");
        console.log('error', err);
      },
      complete : () => {
        console.log("Register completed");
      }
    })
  }
}
