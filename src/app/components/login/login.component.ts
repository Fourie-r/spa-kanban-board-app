import {Component, OnInit} from '@angular/core';
import {MessagingService} from '../../_event-bus/messaging.service';
import {UserLoginMessage} from '../../_event-bus/messages/UserLoginMessage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private _messagingService: MessagingService, private _routeService: Router) {
  }

  ngOnInit() {
  }

  loginUser() {
    // TODO: Make an API call to log the user
    this._messagingService.publish(new UserLoginMessage(this.user));
    this._routeService.navigate(['/project-list']);
  }

}
