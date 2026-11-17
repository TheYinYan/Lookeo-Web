import { Component, input } from '@angular/core';
import { Header2Component } from '../../components/header-2/header-2.component';
import { Users } from '../../models/users';
import { DatePipe } from '@angular/common';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/items';

@Component({
  selector: 'app-home',
  imports: [Header2Component, DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private readonly itemsService: ItemsService) {}

  items: Item[] = [];
  isLoading = false;
  errorMessage = '';

  today = new Date();
  user = input.required<Users>();

  ngOnInit(): void {
    this.onItems();
  }

  onItems() {
    this.itemsService.getItems().subscribe({
      next: (data) => {
        console.log(data);

        this.items = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar las prendas:', err);
        this.errorMessage = 'No se pudieron cargar tus prendas.';
        this.isLoading = false;
      },
    });
  }
}
