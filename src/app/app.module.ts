import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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
import {AuthorizedGuard} from './_guards/authorized.guard';
import {UserProjectListResolver} from './_resolvers/user-project-list.resolver';

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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MessagingService,
    UserProjectListResolver,
    AuthorizedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
