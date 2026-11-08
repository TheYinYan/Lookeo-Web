import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';

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
  credentialValid: boolean = true;
  userExists: boolean = true;

  constructor(private usersService: UsersService) {}

  user: Users = {
    name: '',
    email: '',
    password: ''
  };

  onLogin(name: string, email: string, password: string) {
    this.usersService.getUsers(name,email).subscribe({
      next: (users: Users[]) => {
        if (users.length === 0) this.userExists = false;
        else if (email == users[0]?.email && password == users[0]?.password) {
          this.userExists = true;
          this.credentialValid = true;
          this.login.emit(true);
        } else this.credentialValid = false, this.userExists = true;
      },
    });
  }

  onGoToRegister() {
    this.goRegister.emit(true);
  }
}