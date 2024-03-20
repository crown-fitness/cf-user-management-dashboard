import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly API_URL = 'http://localhost:8000/api/auth/users';
  users:IUser[]= []
  constructor(private http: HttpClient) {

  }
  getUsers(){
    return this.http.get(this.API_URL)
  }
 
}
