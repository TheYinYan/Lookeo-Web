import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterComponent, LoginComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lookeo-Web';
  isLogged = false;
  isRegister = false;

  onRegistered(event: boolean) {
    this.isRegister = event;
    this.isLogged = event;
  }

  onLogin(event: boolean) {
    this.isLogged = event;
  }

  onGoToRegister() {
    this.isRegister = false;
  }

  onGoToLogin(){
    this.isRegister = true;
  }
}
