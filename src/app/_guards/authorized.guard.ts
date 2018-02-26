import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthorizedGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // TODO: Check if the user is logged in!
    return true;
  }
}



@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private auth: AngularFireAuth, private router: Router) {
  }
  canActivate(): Observable<boolean> {
    return this.auth.authState
        .take(1)
        .map(authState => !!authState)
        .do(auth => !auth ? this.router.navigate(['/login']) : true);
  }
}
