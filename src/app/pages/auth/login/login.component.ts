import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../../../models/users';
import { AuthService } from '../../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthResponse } from '../../../models/auth-response';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  showPassword: boolean = false;
  rememberMe: boolean = false;

  IsError: boolean = false;
  nameError: string = '';

  constructor(
    private readonly authService: AuthService,
    private readonly router :Router
  ) {}

  user: Users = {
    name: '',
    email: '',
    password: '',
  };

  onLogin() {
    this.authService.postLogin(this.user).subscribe({
      next: (response: AuthResponse) => {
        this.authService.saveSession(response);
        this.router.navigate(['/home'])
      },
      error: (err: HttpErrorResponse) => {
        this.IsError = true;
        this.nameError =
          err.status == 401 ? 'Credenciales inválidas' : 'Error inesperado';
      },
    });
  }
}
