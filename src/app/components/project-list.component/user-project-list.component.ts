import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { AngularFireAuth  } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { IUserModel } from '../../_models/IUserModel';
import { UserService } from '../../services/user.service';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-user-project-list',
  templateUrl: './user-project-list.component.html',
  styleUrls: ['./user-project-list.component.css']
})

export class UserProjectListComponent implements OnInit {


  displayList: IUserModel[];
  constructor(private router: Router, private db: AngularFireDatabase) {

  }
  ngOnInit() {

  }


}
