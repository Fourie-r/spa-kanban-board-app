import { Injectable } from '@angular/core';
import { IProjectModel } from '../_models/IProjectModel';
import {  AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { IUserModel } from '../_models/IUserModel';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class ProjectService {

    project: IProjectModel;
    projectList: AngularFireList<IProjectModel[]>;


    constructor( private db: AngularFireDatabase) {}

    createProject( decr: string, user: firebase.User) {
        this.project = {
            description: decr,
            date: new Date(),
            author: user.email
        };
        this.db.list('projects').push(this.project);
    }

    getProjects(): Observable<IProjectModel[]> {
        return this.db.list('projects').valueChanges();

    }

    removeProject( project: IProjectModel) {

    }

    editProject() {

    }
}
