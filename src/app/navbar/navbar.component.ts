import { INavbar } from './../interface/INavbar';
import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() title:string = ""; // taking props equilivant to
  navBarLink:INavbar[] =[]
  currentUser:any
  constructor(private ls: LocalStorageService,private router:Router){
   this.currentUser = JSON.parse((this.ls.getItemFromStorage('currentUser')|| 'null'))
   if(this.currentUser === null){
     
    this.navBarLink = [{path:"login",name:"Login"}, {path:"signup",name:'Sign Up'}]
  }else{

    this.navBarLink = [{path:"home",name:'Home'}]
  }
  }
// Logout User 
logout():void{
console.log("logout")
this.ls.clearAllLocalStorage();

this.router.navigate(['login']);
this.navBarLink = [{path:"login",name:"Login"}, {path:"signup",name:'Sign Up'}]
this.currentUser =  JSON.parse((this.ls.getItemFromStorage('currentUser')|| 'null'))

}

// display/hide button
hideBtn():boolean{
  return this.currentUser !== null ? true :false
}
}
