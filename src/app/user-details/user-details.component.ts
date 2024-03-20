import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
})
export class UserDetailsComponent implements OnInit {
  _id: string = '';
  User:any = [
    {
        "_id": "65ec75b252cd201e92fb51b5",
        "first_name": "felicia",
        "last_name": "dunbar",
        "email": "fel.dunbar@gmail.com",
        "password": "$2a$10$dRzUzxokQhC/SBazgPiu9O3VDHKZ9Ni/UP8vKjlQatRflytGom2.a",
        "passwordResetToken": "",
        "passwordResetExpires": "2024-03-09T14:43:59.848Z",
        "bio": "testing",
        "accountCreated": "2024-03-09T14:43:59.849Z",
        "age": 29,
        "sex": "f",
        "device": "android",
        "crown_member": false,
        "experience": "expert",
        "isVerified": true,
        "isAdmin": false,
        "isLoggedIn": false,
        "avatarProfile": {
            "type": "Buffer",
            "data": []
        },
        "settings": {
            "theme": "dark",
            "weight": "ibs",
            "distance": "miles",
            "size": "inches"
        },
        "__v": 0
    },
    {
        "_id": "65ec763e52cd201e92fb51b8",
        "first_name": "brian",
        "last_name": "dunbar",
        "email": "fel2.dunbar@gmail.com",
        "password": "$2a$10$5DmhDCwDPD7CbJc/pVbCAucpuAuKu6rGzaZ6XTcf16LY94NY6i1/O",
        "passwordResetToken": "",
        "passwordResetExpires": "2024-03-09T14:43:59.848Z",
        "bio": "testing",
        "accountCreated": "2024-03-09T14:43:59.849Z",
        "age": 29,
        "sex": "f",
        "device": "android",
        "crown_member": false,
        "experience": "expert",
        "isVerified": false,
        "isAdmin": false,
        "isLoggedIn": false,
        "avatarProfile": {
            "type": "Buffer",
            "data": []
        },
        "settings": {
            "theme": "dark",
            "weight": "ibs",
            "distance": "miles",
            "size": "inches"
        },
        "__v": 0
    },
    {
        "_id": "65ec766252cd201e92fb51bb",
        "first_name": "brian",
        "last_name": "cole",
        "email": "briancole1994@hotmail.com",
        "password": "$2a$10$Cr.Lby6jloepsnfjN3wvNOi/Pd24./HxRrsXdnxAuMi.wezxTw40W",
        "passwordResetToken": "",
        "passwordResetExpires": "2024-03-09T14:43:59.848Z",
        "bio": "testing",
        "accountCreated": "2024-03-09T14:43:59.849Z",
        "age": 29,
        "sex": "f",
        "device": "android",
        "crown_member": false,
        "experience": "expert",
        "isVerified": true,
        "isAdmin": false,
        "isLoggedIn": false,
        "avatarProfile": {
            "type": "Buffer",
            "data": []
        },
        "settings": {
            "theme": "dark",
            "weight": "ibs",
            "distance": "miles",
            "size": "inches"
        },
        "__v": 0
    },
    {
        "_id": "65edc1ecb2bcac4422ca1863",
        "first_name": "testing",
        "last_name": "testing",
        "email": "admin@admin.com",
        "password": "$2a$10$Cr.Lby6jloepsnfjN3wvNOi/Pd24./HxRrsXdnxAuMi.wezxTw40W",
        "passwordResetToken": "",
        "passwordResetExpires": "2024-03-09T14:43:59.848Z",
        "bio": "testing",
        "accountCreated": "2024-03-09T14:43:59.849Z",
        "age": 29,
        "sex": "m",
        "device": "android",
        "crown_member": false,
        "experience": "expert",
        "isVerified": true,
        "isAdmin": true,
        "isLoggedIn": false,
        "avatarProfile": {
            "type": "Buffer",
            "data": []
        },
        "settings": {
            "theme": "dark",
            "weight": "ibs",
            "distance": "miles",
            "size": "inches"
        },
        "__v": 0
    }
]
  constructor(private router: Router, private route:ActivatedRoute, private userServices: UsersService) {}
  ngOnInit(): void {
      this.route.params.subscribe((param)=>{
        if(!param['id']){
          return;
        }
        this.userServices.getUsers().subscribe((res:any)=>{
          this.User = res.filter((val:any)=>val._id === param['id'])[0]
        })
       
      });
      console.log("id",this.User)
  }
}
