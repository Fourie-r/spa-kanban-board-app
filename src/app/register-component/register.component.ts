import {Component, OnInit} from '@angular/core';
import {IUserModel} from '../_models/IUserModel';
import { FormBuilder, FormGroup, Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {



  rForm: FormGroup;
  titleAlert = 'This field is required';
  passwordAlert = 'A password consisting of 6-10 characters is required';


  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'name': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])],
      'repeatPassword': [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      'email': [null, Validators.compose([Validators.required])],
      'repeatEmail': [null, Validators.compose([Validators.required])],
      'validate': ''

    });
  }

  registerModel: IUserModel = {
    id: 1,
    name: '',
    password: '',
    repeatPassword: '',
    email: '',
    repeatEmail: ''
  };


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
  addUser( input ) {

    this.registerModel.name = input.name;
    this.registerModel.password = input.password;
    this.registerModel.repeatPassword = input.password;
    this.registerModel.email = input.email;
    this.registerModel.repeatEmail = input.repeatEmail;
    console.log(this.registerModel);
  }


}
