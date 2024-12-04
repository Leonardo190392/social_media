import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    this.authService.login(this.email, this.password).then((result) => {
      console.log('Login erfolgreich:', result);
    }).catch((error) => {
      console.error('Login fehlgeschlagen:', error);
    });
  }
}
