import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';

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

  constructor(private usersService: UsersService) { }

  user: Users = {
    name: '',
    email: '',
    password: ''
  };

  onLogin(name: string, password: string) {
    this.usersService.getUsers(name).subscribe((users: Users[]) => {
      if (name == users[0]?.name && password == users[0]?.password) {
        console.log('Usuario válido:', users[0]);
        this.login.emit(true);
      } else {
        console.error('Credenciales inválidas');
      }
    });
  }

  onGoRegister() {
    this.goRegister.emit(true);
  }
}