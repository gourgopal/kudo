import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kudo';
  constructor(private authService: AuthService) {}

  login() {
    this.authService.loginWithGoogle()
      .then(user => console.log('Logged in:', user))
      .catch(error => console.error('Login error:', error));
  }

  logout() {
    this.authService.logout()
      .then(() => console.log('Logged out'))
      .catch(error => console.error('Logout error:', error));
  }
}
