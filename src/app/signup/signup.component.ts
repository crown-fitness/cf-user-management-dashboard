import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
 signUpFrom = this.fb.group(
  {
    "first_name": "brian",
    "last_name": "cole",
    "email": "briancole1994@hotmail.com",
    "password":"Shadow18!",
      "bio": "testing",
      "age": "29",
      "sex": "f",
      "crown_member": false,
      "experience": "expert",
      "device": "android"
    
  }
  
)
constructor(private fb:FormBuilder){

}

handleSubmit():void{
  console.log("form",this.signUpFrom.value)
}

}
