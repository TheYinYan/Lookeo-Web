import { Component } from '@angular/core';
import { Header2Component } from '../../components/header-2/header-2.component';

@Component({
  selector: 'app-home',
  imports: [Header2Component, Header2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
