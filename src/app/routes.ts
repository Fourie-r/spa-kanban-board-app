import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './register-component/register.component';
import {UserProjectListComponent} from './components/project-list.component/user-project-list.component';
import {UserProjectListResolver} from './_resolvers/user-project-list.resolver';
import {AuthorizedGuard, AuthGuard } from './_guards/authorized.guard';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'project-list', component: UserProjectListComponent, resolve: {projects: UserProjectListResolver}},
    ]
  },
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];
