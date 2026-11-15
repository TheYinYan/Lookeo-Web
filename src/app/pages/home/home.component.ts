import { Component, input } from '@angular/core';
import { Header2Component } from '../../components/header-2/header-2.component';
import { Users } from '../../models/users';
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-home',
  imports: [Header2Component,DatePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  today = new Date();
  user = input.required<Users>();
  
}
