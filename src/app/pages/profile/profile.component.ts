import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private readonly authService: AuthService) { }

  islogout = false;

  logout() {
    this.authService.logout();
    window.location.href = '/';
  }
}
