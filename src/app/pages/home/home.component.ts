import { Component, input } from '@angular/core';
import { Header2Component } from '../../components/header-2/header-2.component';
import { Users } from '../../models/users';
import { DatePipe } from '@angular/common';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/items';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [Header2Component, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private readonly authService: AuthService) { }

  items: Item[] = [];
  isLoading = false;
  errorMessage = '';

  today = new Date();
  user: Users = {
    name: '',
    email: '',
    password: '',
  };

  ngOnInit(): void {
    const session = this.authService.getSession();
    console.log(session?.token);


    if (session) this.user = session.user;
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }
}
