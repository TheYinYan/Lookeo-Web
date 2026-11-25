import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
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

  user: Users = {
    name: '',
    email: '',
    password: '',
  };

  constructor(public readonly authService: AuthService, public readonly router :Router) {}
}
