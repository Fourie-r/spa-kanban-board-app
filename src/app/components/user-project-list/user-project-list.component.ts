import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { AngularFireAuth  } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { IUserModel } from '../../_models/IUserModel';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-project-list',
  templateUrl: './user-project-list.component.html',
  styleUrls: ['./user-project-list.component.css']
})
export class UserProjectListComponent implements OnInit {

  user: Observable<firebase.User>;
  userList: IUserModel[] = [];
  displayList: IUserModel[];
  constructor(private _activatedRouteService: ActivatedRoute,
     private _authService: AngularFireAuth, private router: Router, private _db: AngularFireDatabase, private _userSerivce: UserService) {

  }
  ngOnInit() {
    const data = this._userSerivce.getData();
    const user1 = firebase.auth().currentUser;
    data.snapshotChanges().subscribe( item => {
      this.userList = [];
      item.forEach(element => {
        const user = element.payload.toJSON();
        user['$id'] = element.key;
        this.userList.push(user as IUserModel);
        this.displayList = this.showNames(user1, this.userList);
      });
    });

  }

  logout() {

    this._authService.auth.signOut().then((success) => {console.log(success); } ).catch((error) => {console.log(error);
    });
    this.router.navigate(['/login']);
  }

  showNames(logedinUser: any, allUsers: IUserModel[]) {
    return allUsers.map(user => {
        if (user.email === logedinUser.email) {
          return user;
        }});
  }
}
