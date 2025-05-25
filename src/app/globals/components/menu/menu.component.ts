import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  imports: [CommonModule]
})
export class MenuComponent {
  constructor(private router: Router) {}
  
  redirectToSchedule(){
    this.router.navigate(['/dashboard']);
  }

  redirectToPets(){
    this.router.navigate(['/mascotas/ver-todas']);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
