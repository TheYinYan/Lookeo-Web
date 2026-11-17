import { Component } from '@angular/core';
import { Header2Component } from '../../components/header-2/header-2.component';
import { AuthService } from '../../services/auth.service';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/items';
import { Users } from '../../models/users';

@Component({
  selector: 'app-wardrobe',
  imports: [Header2Component],
  templateUrl: './wardrobe.component.html',
  styleUrl: './wardrobe.component.css'
})
export class WardrobeComponent {
    constructor(
      private readonly itemsService: ItemsService,
      private readonly authService: AuthService,
    ) { }

    items: Item[] = [];
    isLoading = false;
    errorMessage = '';


    ngOnInit(): void {
      this.getItems();
      const session = this.authService.getSession();
      console.log(session?.token);
    }

    logout() {
      this.authService.logout();
      window.location.reload();
    }

    getItems() {
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

    getCountByType(tipo: string): number {
      return this.items.filter(item => item.type === tipo).length;
    }
}
