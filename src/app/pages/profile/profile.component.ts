import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Header2Component } from '../../components/header-2/header-2.component';

@Component({
  selector: 'app-profile',
  imports: [Header2Component],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private readonly authService: AuthService) { }

  logout() {
    this.authService.logout();
    window.location.href = '/';
  }
}
