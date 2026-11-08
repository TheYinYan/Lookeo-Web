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

  onRegister() {
    this.usersService.postUser(this.user).subscribe((newUser: Users) => {
      console.log('Usuario registrado:', newUser);
      this.registre.emit(true);
    });
  }

  onGoLogin() {
    this.goLogin.emit(true);
  }
}
