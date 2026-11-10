import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login = output<boolean>();
  goRegister = output<boolean>();

  showPassword: boolean = false;
  rememberMe: boolean = false;

  IsError: boolean = false;
  nameError: string = "";

  constructor(private usersService: UsersService, private authService: AuthService) { }

  user: Users = {
    name: '',
    email: '',
    passwordHash: '',
  };

  onLogin(name: string, email: string, password: string) {
    this.authService.postLogin(this.user).subscribe({
      next: (newUser: Users) => { this.login.emit(true); },
      error: (err) => {
        if (err == 401) { this.IsError = true, this.nameError = "Credenciales inválidas" }
        else { this.IsError = true, this.nameError = "Error inesperado" }
      }
    });
  }

  onGoToRegister() {
    this.goRegister.emit(true);
  }
}
