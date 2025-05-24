import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    constructor(private router: Router) {}
  
  redirectToSchedule(){
    this.router.navigate(['/dashboard']);
  }

  redirectToPets(){
    this.router.navigate(['/mascotas/ver-todas']);
  }
}
