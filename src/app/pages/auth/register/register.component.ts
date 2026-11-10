import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
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
    passwordHash: '',
  };

  IsError: boolean = false;
  nameError: string = '';

  onRegister() {
    this.authService.postRegister(this.user).subscribe({
      next: (newUser: Users) => {
        this.register.emit(true);
      },
      error: (err) => {
        if (err === 409) {
          ((this.IsError = true), (this.nameError = 'Email ya registrado'));
        } else {
          ((this.IsError = true), (this.nameError = 'Error inesperado'));
        }
      },
    });
  }

  onGoToLogin() {
    console.log('Going to login');
    this.goToLogin.emit(true);
  }
}
