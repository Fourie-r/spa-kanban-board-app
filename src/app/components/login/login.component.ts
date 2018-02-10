import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor() {
  }

  ngOnInit() {
  }

  loginUser() {
    // TODO: Make an API call to log the user
    console.log(this.user);
  }

}
