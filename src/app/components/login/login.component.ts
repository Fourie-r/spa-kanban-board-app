import {Component, OnInit} from '@angular/core';
import {MessagingService} from '../../_event-bus/messaging.service';
import {UserLoginMessage} from '../../_event-bus/messages/UserLoginMessage';
import {Router} from '@angular/router';
import { AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import {  NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};


  constructor(private _messagingService: MessagingService, private _routeService: Router, private _authService: AngularFireAuth) {



  }

  ngOnInit() {
  }

  loginUser(form?: NgForm ) {
    // TODO: Make an API call to log the user
    // this._messagingService.publish(new UserLoginMessage(this.user));
    console.log(form);
    this._authService.auth.signInAndRetrieveDataWithEmailAndPassword(
      form.value.email,
      form.value.password
    );
    this._routeService.navigate(['/project-list']);
  }

}
