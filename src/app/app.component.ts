import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Users } from './models/users';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
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

  constructor(private readonly authService: AuthService) {
    const session = this.authService.getSession();

    if (session) {
      this.user = session.user;
      this.isLogged = true;
    }
  }

  onRegistered(event: Users) {
    this.user = event;
    this.isRegistered = true;
    this.isLogged = true;
  }

  onLogin(event: Users) {
    this.isLogged = true;
    this.user = event;
  }

  onGoToRegister() {
    this.isRegistered = false;
  }

  onGoToLogin() {
    this.isRegistered = true;
  }
}
