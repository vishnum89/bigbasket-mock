import { Component } from '@angular/core';
import { User } from '../../../models/user';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

constructor(private router : Router){}

user : User = {
    username : '',
    password : ''
  }

onLogin() {
  if(this.user.username == 'admin' && this.user.password == '12345'){
  this.router.navigateByUrl('/products')
  }else{
    alert('Wrong Credentials!!')
  }
}



}
