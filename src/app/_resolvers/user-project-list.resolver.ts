import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {IProjectModel} from '../_models/IProjectModel';

@Injectable()
export class UserProjectListResolver implements Resolve<IProjectModel[]> {

  constructor() {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProjectModel[]> |
    Promise<IProjectModel[]> | IProjectModel[] {
    // TODO: Make an API call to get the projects for the user!
    return new Array<IProjectModel>({
      $id: '',
      name: 'One',
      description: 'This is a test!',
      userId: ''
    });
  }
}
