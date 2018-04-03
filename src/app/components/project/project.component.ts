import { Component, OnInit, OnChanges } from '@angular/core';
import { IProjectModel } from '../../_models/IProjectModel';
import { ProjectService } from '../../services/project.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
    selector: 'app-project-component',
    templateUrl: './project.component.html'
})

export class ProjectComponent implements OnInit, OnChanges {
    user: firebase.User;

    constructor( private _projectService: ProjectService ) {


    }
    description: string;
    projectsList: Observable<IProjectModel[]>;


    ngOnInit() {
        this.projectsList = this._projectService.getProjects();
    }

    ngOnChanges() {
        this.projectsList = this._projectService.getProjects();

    }

    onSubmit() {
        const user = firebase.auth().currentUser;
        this._projectService.createProject(this.description, user);
    }
}

