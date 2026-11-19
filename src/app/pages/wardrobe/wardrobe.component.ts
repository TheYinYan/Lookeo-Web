import { Component } from '@angular/core';
import { Header2Component } from '../../components/header-2/header-2.component';
import { AuthService } from '../../services/auth.service';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/items';
import { Users } from '../../models/users';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-wardrobe',
  imports: [Header2Component],
  templateUrl: './wardrobe.component.html',
  styleUrl: './wardrobe.component.css'
})
export class WardrobeComponent {
  constructor(private readonly itemsService: ItemsService, private readonly authService: AuthService,) { }

  items: Item[] = [];
  isLoading = false;
  errorMessage = '';
  IsError: boolean = false;
  openMenuId: number | null = null;

  ngOnInit(): void {
    this.getItems();
    const session = this.authService.getSession();
    console.log(session?.token);
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

  onClick(id: number) {
    this.itemsService.getItem(id).subscribe({
      next: (item: Item) => {
        console.log(item);
      },
      error: (err: HttpErrorResponse) => {
        console.error('Prenda no encontrada:', err);
        alert('No se pudo encontrada la prenda');
      },
    })
  }

  onOption(id: number) {
    if (this.openMenuId === id) {
      this.openMenuId = null;
    } else {
      this.openMenuId = id;
    }
  }

  eliminarPrenda(id: number) {
    if (confirm('¿Estás seguro de que quieres eliminar esta prenda?')) {
      this.itemsService.deleteItem(id).subscribe({
        next: () => {
          this.openMenuId = null;
          console.log('Prenda eliminada');
          this.getItems()
        },
        error: (err) => {
          console.error('Error al eliminar:', err);
          alert('No se pudo eliminar la prenda');
        }
      });
    }
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
