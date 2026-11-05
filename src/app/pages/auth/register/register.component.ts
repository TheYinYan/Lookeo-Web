import { Component, output } from '@angular/core';
import { FormsModule , NgModel } from '@angular/forms';
import { Users } from '../../../models/users';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  registre = output<boolean>();

  user: Users = {
    name: '',
    email: '',
    password: '',
  };

  onRegister() {
    console.log(this.user)
    this.registre.emit(true); 
  }
}
