import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { UnauthGuard } from './core/guards/unauth.guard';

import { TasksComponent } from './tasks/tasks.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TasksCreateComponent } from './tasks-create/tasks-create.component';

const routes: Routes = [
    { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
    { path: 'tasks/create', component: TasksCreateComponent, canActivate: [AuthGuard] },
    { path: 'signin', component: SigninComponent, canActivate: [UnauthGuard] },
    { path: 'signup', component: SignupComponent, canActivate: [UnauthGuard] },
    { path: '', redirectTo: 'tasks', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
