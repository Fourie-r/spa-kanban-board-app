import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { StoreModule } from '@ngrx/store';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './register-component/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {HomeComponent} from './components/home/home.component';
import {appRoutes} from './routes';
import {RouterModule} from '@angular/router';
import {MessagingService} from './_event-bus/messaging.service';
import {UserProjectListComponent} from './components/user-project-list/user-project-list.component';
import {AuthorizedGuard, AuthGuard} from './_guards/authorized.guard';
import {UserProjectListResolver} from './_resolvers/user-project-list.resolver';
import { reducers } from '../reducers';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavigationBarComponent,
    HomeComponent,
    UserProjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    MessagingService,
    UserProjectListResolver,
    AuthorizedGuard,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
