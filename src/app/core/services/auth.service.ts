import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoreModule } from '../core.module';

import { User } from '../models/user.model';

@Injectable({
  providedIn: CoreModule
})
export class AuthService {

  authenticated: Observable<boolean>;
  uid: Observable<string>;

  constructor(public fireAuth: AngularFireAuth) {
    this.authenticated = fireAuth.authState.pipe(map((user: firebase.User) => !!user));
    this.uid = fireAuth.authState.pipe(map((user: firebase.User) => user.uid));
  }

  signin(user: User): Promise<any> {
    return this.fireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  signup(user: User): Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  signout(): Promise<void> {
    return this.fireAuth.auth.signOut();
  }

  sendResetPasswordEmail(user: User): Promise<void> {
    return this.fireAuth.auth.sendPasswordResetEmail(user.email);
  }

  createNewPassword(code: string, user: User): Promise<void> {
    return this.fireAuth.auth.confirmPasswordReset(code, user.password);
  }

}
