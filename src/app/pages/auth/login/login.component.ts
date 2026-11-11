import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';
import { Header1Component } from '../../../components/header-1/header-1.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, Header1Component],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login = output<boolean>();
  goRegister = output<boolean>();

  showPassword: boolean = false;
  rememberMe: boolean = false;

  IsError: boolean = false;
  nameError: string = '';

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  user: Users = {
    name: '',
    email: '',
    password: '',
  };

  onLogin(email: string, password: string) {
    this.authService.postLogin(this.user).subscribe({
      next: (newUser: Users) => {
        this.login.emit(true);
      },
      error: (err: HttpErrorResponse) => {
        this.IsError = true;
        this.nameError =
          err.status == 401 ? 'Credenciales inválidas' : 'Error inesperado';
      },
    });
  }

  onGoToRegister() {
    this.goRegister.emit(true);
  }
}
