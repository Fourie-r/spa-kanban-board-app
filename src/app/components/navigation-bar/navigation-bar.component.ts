import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserLoginMessage} from '../../_event-bus/messages/UserLoginMessage';
import {MessagingService} from '../../_event-bus/messaging.service';
import {IUserModel} from '../../_models/IUserModel';
import {Subscription} from 'rxjs/Subscription';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  loggedInUser: IUserModel;
  isUserloggedIn: boolean;

  constructor(private _messagingService: MessagingService, private _authService: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
  }


  isUserLoggedIn() {
    const user = firebase.auth().currentUser;
    console.log(user);
 {

    if (user != null) {
      return true;
    } else {
      return false;
    }
  }
  }

  logout() {
    this._authService.auth.signOut()
    .then(success =>  console.log(success))
    .catch(error => console.log(error)
    );
    this.router.navigate(['/login']);
  }

}
