import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './register.model';

@Component({
    selector: 'app-register-component',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent   {

registerModel: RegisterModel = {
    id: 1,
    name: 'ivan',
    password: 'sss',
    rpassword: 'sss',
    email: 'a@a',
    remail: 'a@a'
};


registerUser() {

    console.log(this.registerModel);
}


}
