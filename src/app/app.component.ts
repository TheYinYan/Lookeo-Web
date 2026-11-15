import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { Users } from './models/users';

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
  isRegister = true;

  user: Users = {
    name: '',
    email: '',
    password: '',
  };

  onRegistered(event: Users) {
    this.user = event;
    this.isRegister = true;
    this.isLogged = true;
  }

  onLogin(event: Users) {
    this.isLogged = true;
    this.user = event;
  }

  onGoToRegister() {
    this.isRegister = false;
  }

  onGoToLogin() {
    this.isRegister = true;
  }
}
