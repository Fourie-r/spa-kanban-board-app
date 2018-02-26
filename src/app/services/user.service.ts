import { IUserModel } from '../_models/IUserModel';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()

export class UserService {

    userList: AngularFireList<any>;
    user: IUserModel;

    constructor( private firebase: AngularFireDatabase) { }

    getData() {
        this.userList = this.firebase.list('users');
        return this.userList;
    }

    insertUsers(user: IUserModel) {
        this.userList.push({
            name: user.name,
            email: user.email,
            password: user.password,
            repeatPassword: user.repeatPassword,
            repeatEmail: user.repeatEmail,
        });
    }
}
