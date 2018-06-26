import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { UnauthGuard } from './core/guards/unauth.guard';

const routes: Routes = [
    { path: 'tasks', component: null, canActivate: [AuthGuard] },
    { path: 'signin', component: null, canActivate: [UnauthGuard] },
    { path: 'signup', component: null, canActivate: [UnauthGuard] },
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
