import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userToAdd: User = {
    firstName : '',
    lastName : '',
    email : '',
    phoneNumber : 0
  };

  constructor() { }

  ngOnInit() {
  }

  submit(data: User): void {
    this.userToAdd = data;
    console.log(this.userToAdd);
  }
}
