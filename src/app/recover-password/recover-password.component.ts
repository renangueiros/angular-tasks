import { Component } from '@angular/core';

import { AuthService } from '../core/services/auth.service';
import { User } from '../core/models/user.model';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent {

  user: User = { email: '', password: '' };
  emailSent = false;

  constructor(public auth: AuthService) { }

  sendRecoverPasswordEmail(): void {
    this.auth.sendResetPasswordEmail(this.user).then(() => { this.emailSent = true; });
  }

}
