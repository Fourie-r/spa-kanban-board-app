import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserLoginMessage} from '../../_event-bus/messages/UserLoginMessage';
import {MessagingService} from '../../_event-bus/messaging.service';
import {IUserModel} from '../../_models/IUserModel';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  loggedInUser: IUserModel;
  userLoginSubscription: Subscription;

  constructor(private _messagingService: MessagingService) {
  }

  ngOnInit() {
    this.userLoginSubscription = this._messagingService.of(UserLoginMessage)
      .subscribe(message => {
        this.loggedInUser = message.user;
      });
  }

  ngOnDestroy(): void {
    this.userLoginSubscription.unsubscribe();
  }

  isUserLoggedIn() {
    return this.loggedInUser != null;
  }

}
