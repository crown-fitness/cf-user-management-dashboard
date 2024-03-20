import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  allUsers: any = [];
  search:string = ""
  constructor(
    private userService: UsersService,
    private router: Router,

  ) {}

  DeleteUser(_id: string) {
    this.allUsers = this.allUsers.filter((value: any) => {
      if (value!._id !== _id) {
        return value;
      }
    });
    console.log('delete', _id);
  }
  UpdateUser(_id: string) {
    console.log('update', _id);
    this.router.navigate([`users`, _id]);
  }
  handleChange(e:string){
 
  }

  ngOnInit(): void {
    console.log('called');
    this.userService.getUsers().subscribe((res) => {
      this.allUsers = res;
    });
  }
}
