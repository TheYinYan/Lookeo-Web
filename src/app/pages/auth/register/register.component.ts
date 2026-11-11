import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';
import { Header1Component } from '../../../components/header-1/header-1.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule, Header1Component],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  register = output<boolean>();
  goToLogin = output<boolean>();

  confirmPassword = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  termsAccepted: boolean = false;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  user: Users = {
    name: '',
    email: '',
    password: '',
  };

  IsError: boolean = false;
  errorMessage: string = '';

  onRegister() {
    this.authService.postRegister(this.user).subscribe({
      next: (newUser: Users) => {
        this.register.emit(true);
      },
      error: (err: HttpErrorResponse) => {
        this.IsError = true;
        this.errorMessage =
          err.status === 409 ? 'Email ya registrado' : 'Error inesperado';
      },
    });
  }

  onGoToLogin() {
    console.log('Going to login');
    this.goToLogin.emit(true);
  }
}
