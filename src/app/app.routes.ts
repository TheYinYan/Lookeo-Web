import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WardrobeComponent } from './pages/wardrobe/wardrobe.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OutfitsComponent } from './pages/outfits/outfits.component';
import { DetailItemComponent } from './pages/items/detail-item/detail-item.component';
import { NewItemComponent } from './pages/items/new-item/new-item.component';
import { DetailOutfitComponent } from './pages/outfits/detail-outfit/detail-outfit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'wardrobe', component: WardrobeComponent,
    children: [
      { path: '', redirectTo: 'wardrobe', pathMatch: 'full' },
      { path: 'item/:id', component: DetailItemComponent },
      { path: 'newItem/:id', component: NewItemComponent },
    ],
  },
  { path: 'favoritos', component: FavoritesComponent},
  { path: 'outfits', component: OutfitsComponent,
    children: [
      { path: '', redirectTo: 'outfits', pathMatch: 'full' },
      { path: 'outfits/:id', component: DetailOutfitComponent },
    ],
  },
  { path: 'profile', component: ProfileComponent},
  // { path: 'login', component: LoginComponent},
  // { path: 'register', component: RegisterComponent},
];
