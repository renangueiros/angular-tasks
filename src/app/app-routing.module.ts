import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { UnauthGuard } from './core/guards/unauth.guard';

import { TasksComponent } from './tasks/tasks.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
    { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
    { path: 'tasks/create', component: TaskCreateComponent, canActivate: [AuthGuard] },
    { path: 'tasks/details', component: TaskDetailComponent, canActivate: [AuthGuard] },
    { path: 'signin', component: SigninComponent, canActivate: [UnauthGuard] },
    { path: 'signup', component: SignupComponent, canActivate: [UnauthGuard] },
    { path: 'recover-password', component: RecoverPasswordComponent, canActivate: [UnauthGuard] },
    { path: 'reset-password', component: ResetPasswordComponent, canActivate: [UnauthGuard] },
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
