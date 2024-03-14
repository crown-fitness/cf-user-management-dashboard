import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ILogin } from '../interface/ILogin';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private isLoggedIn = false;
  
  @Output()  currentUser = new EventEmitter();
  @Output() errors = new EventEmitter<string[]>();
  @Output() errorStatus = new EventEmitter<number>();
  constructor(private http: HttpClient) {}
  private readonly API_URL = 'https://cf-api.herokuapp.com/api/';
  login(data: ILogin) {
    this.http
      .post(this.API_URL + 'auth/login', data)
      .subscribe({
        next:(value) =>{
          console.log("payload",value)
          this.currentUser.emit(value);
        },
        error:(e:HttpErrorResponse)=>{
         // Display Error Msg
         this.errorStatus.emit(e.status);
          this.errors.emit(e.error.errors)
        }
      }
      )
  }
}
