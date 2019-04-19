import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Route, RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { TimerComponent } from './components/timer/timer.component';
import { WebframeComponent } from './webframe/webframe.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { EquationsComponent } from './components/equations/equations.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'user', component: UserComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'equations', component: EquationsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TimerComponent,
    WebframeComponent,
    HomeComponent,
    SignupComponent,
    EquationsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
