import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
allUsers:any = []
userz = {
  first_name:"z",
  last_name:"z",
  _id:"",
  isVerified:false
}
constructor(private user:UsersService){
  
}

handleDeleteUser(_id:string){
console.log("delete",_id)
}
handleUpdateUser(_id:string){
  console.log("update",_id)
}



ngOnInit(): void {
  console.log("called")
    this.user.getUsers().subscribe((res)=>{
 
      this.allUsers = res
    })
}
}
