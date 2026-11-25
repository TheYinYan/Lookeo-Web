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
import { authGuard } from './pages/auth/guards/authGuard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard]  },
  {
    path: 'wardrobe',
    component: WardrobeComponent, canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'wardrobe', pathMatch: 'full' },
      { path: 'item/:id', component: DetailItemComponent },
      { path: 'newItem/:id', component: NewItemComponent },
    ],
  },
  { path: 'favoritos', component: FavoritesComponent, canActivate: [authGuard] },
  {
    path: 'outfits',
    component: OutfitsComponent, canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'outfits', pathMatch: 'full' },
      { path: 'outfits/:id', component: DetailOutfitComponent },
    ],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
]
