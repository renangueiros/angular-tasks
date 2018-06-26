import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';

import { CoreModule } from '../core.module';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: CoreModule
})
export class UnauthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.auth.authenticated
      .pipe(
        take(1),
        tap((authenticated: boolean) => {
          if (authenticated) { this.router.navigate(['/tasks']); }
        }),
        map((authenticated: boolean) => !authenticated));
  }
}
