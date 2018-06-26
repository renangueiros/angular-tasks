import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TasksCreateComponent } from './tasks-create/tasks-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SigninComponent,
    SignupComponent,
    TasksCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
