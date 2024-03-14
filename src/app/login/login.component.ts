import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  isSubmitted: boolean = false;
  message = {
    emailMsg: '',
    passwordMsg: '',
  };
  displayUserLogin = ``;
  json = '';

  errMsg:string[] = [];
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    auth.currentUser.subscribe((value)=>{
      this.json= `${JSON.stringify(value)}`
    })
    // errorMsgs
    auth.errors.subscribe((value)=>{
     this.errMsg = value
    })
    auth.errorStatus.subscribe((value)=>{
      this.json = `${value}`
    })
  }
  login(): void {
    this.isSubmitted = true;
    const res = this.auth.login({
      email: this.loginForm.value.email || '',
      password: this.loginForm.value.password || '',
    });
    console.log(res);
  }

  validateEmail() {
    if (this.loginForm.value.email === '') {
      this.message.emailMsg = 'Email Can not be empty';
    }
    // invalid email

    return this.loginForm.get('email')?.invalid && this.isSubmitted;
  }

  validatePassword() {
    if (this.loginForm.value.password === '') {
      this.message.passwordMsg = 'Password Can not be empty';
    }

    return this.loginForm.get('password')?.invalid && this.isSubmitted;
  }
  disableBtn() {
    return (
      this.loginForm.value.email === '' || this.loginForm.value.password === ''
    );
  }
}
