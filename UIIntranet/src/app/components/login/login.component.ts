import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  user:string;
  password:string;
  compare:boolean;

  user_form:string;
  password_form:string;
  
 
 constructor() { 
 	this.user="rlopez@mexq.com.mx";
 	this.password="caca";
 }

 RequestValidation(){
 console.log(this.user_form);
 console.log(this.password_form);

 if (this.user_form == this.user){
 	console.log("Usuario Válido");
 	if (this.password_form == this.password){
 		console.log("Password Válido");

 	}
 }else{
 	console.log("datos erroneos");
 }
}

}