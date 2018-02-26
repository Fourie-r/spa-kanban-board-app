import { Action } from '@ngrx/store';
import { IUserModel } from './_models/IUserModel';


export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGINSUCCESS = 'LOGINSUCCESS';

export class Login implements Action {

    readonly type = LOGIN;
    constructor (public  payload: IUserModel) { }
}

export class Registration implements Action {

    readonly type = REGISTER;
    constructor (public payload: IUserModel) { }

}

export class LoginSuccess implements Action {

    readonly type = LOGINSUCCESS;
    constructor ( public payload: IUserModel[]) { }

}

export type ALL
= Login | Registration | LoginSuccess;
