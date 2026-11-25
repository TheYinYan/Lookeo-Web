import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { Header2Component } from './components/header-2/header-2.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { Users } from './models/users';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header2Component,
    NavComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lookeo-Web';
  isLogged = false;
  isRegistered = true;

  user: Users = {
    name: '',
    email: '',
    password: '',
  };

  constructor(public readonly authService: AuthService) {
    const session = this.authService.getSession();

    if (session) {
      this.user = session.user;
      this.isLogged = true;
    }
  }

  onRegistered(event: boolean) {
    this.isRegistered = event;
    this.isLogged = event;
  }

  onLogin(event: boolean) {
    this.isLogged = event;
  }

  onGoToRegister() {
    this.isRegistered = false;
  }

  onGoToLogin() {
    this.isRegistered = true;
  }
}
