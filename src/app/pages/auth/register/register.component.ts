import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Users } from '../../../models/users';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registre = output<boolean>();
  goLogin = output<boolean>();

  confirmPassword = '';
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  termsAccepted: boolean = false;

  constructor(private usersService: UsersService) { }

  user: Users = {
    name: '',
    email: '',
    password: ''
  };

  userExists: boolean = false;

  onRegister() {
    this.usersService.getUsers('', this.user.email).subscribe((users: Users[]) => {
      this.userExists = users.length > 0;
      if (this.userExists) {
        console.log('El usuario ya existe');
        return;
      }
      this.usersService.postUser(this.user).subscribe((newUser: Users) => {
        this.registre.emit(true);
      });
    });
  }

  onGoToLogin() {
    console.log('Going to login');
    this.goLogin.emit(true);
  }
}
