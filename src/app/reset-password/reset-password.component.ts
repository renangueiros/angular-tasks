import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../core/services/auth.service';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  user: User = { email: '', password: '' };
  passwordChanged = false;
  oobCode: string;

  constructor(
    public auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.oobCode = this.route.snapshot.queryParams['oobCode'];
  }

  newPassword(): void {
    this.auth.createNewPassword(this.oobCode, this.user).then(() => {
      this.passwordChanged = true;
      setTimeout(() => {
        this.router.navigate(['/signin']);
      }, 3500);
    });
  }

}
