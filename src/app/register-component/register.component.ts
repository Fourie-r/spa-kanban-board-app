import { Component, OnInit } from '@angular/core';
import { IUserModel } from '../_models/IUserModel';
import { FormBuilder, FormGroup, Validators, NgModel, NgForm } from '@angular/forms';
import { AngularFireAuth  } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {



  rForm: FormGroup;
  titleAlert = 'This field is required';
  passwordAlert = 'A password consisting of 6-10 characters is required';
  user: Observable<firebase.User>;

  constructor(private fb: FormBuilder, private _routeService: Router, public _authService: AngularFireAuth,
              private _userService: UserService) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
      'repeatPassword': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'email': [null, Validators.compose([Validators.required])],
      'repeatEmail': [null, Validators.compose([Validators.required])],
      'validate': ''

    });

  }



  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to enter min 3 characters';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );

  }
  addUser( form?: NgForm ) {

    this._userService.insertUsers(form.value);
    this._authService.auth.createUserWithEmailAndPassword(
      form.value.email,
      form.value.password
    ).then(
      (success) => {
        console.log(success);
        this._routeService.navigate(['/login'])
        .catch((err) => {
          console.log(err);
        });
      }
    );

    form.reset();
  }


}
