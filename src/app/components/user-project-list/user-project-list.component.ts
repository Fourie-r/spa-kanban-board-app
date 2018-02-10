import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-project-list',
  templateUrl: './user-project-list.component.html',
  styleUrls: ['./user-project-list.component.css']
})
export class UserProjectListComponent implements OnInit {

  constructor(private _activatedRouteService: ActivatedRoute) {
  }

  ngOnInit() {
    this._activatedRouteService.data.subscribe(data => {
      console.log(data);
    });
  }

}
