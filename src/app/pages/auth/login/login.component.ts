import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../../../models/users';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login = output<boolean>();
  goRegister = output<boolean>();

  showPassword: boolean = false;
  rememberMe: boolean = false;

  // Modelo del usuario
  user: Users = {
    name: '',
    email: '',
    password: ''
  };

  onLogin() {
    console.log('Intentando iniciar sesión con:', this.user.name);
    // Aquí irá la llamada a tu API de login

    this.login.emit(true);
  }

  onGoRegister() {
    this.goRegister.emit(true);
  }
}