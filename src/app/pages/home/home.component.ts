import { Component, input } from '@angular/core';
import { Users } from '../../models/users';
import { DatePipe } from '@angular/common';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/items';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  imports: [DatePipe],
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
    if (session) this.user = session.user;
  }


}
