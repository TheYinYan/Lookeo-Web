import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lookeo-Web';
  isLogged = false;
  isRegistered = true;

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
