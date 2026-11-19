import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Users } from './models/users';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, RouterLink, RouterLinkActive, RegisterComponent, LoginComponent, FooterComponent, ],
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
