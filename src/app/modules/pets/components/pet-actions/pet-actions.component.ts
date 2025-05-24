import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-actions.component.html',
  styleUrl: './pet-actions.component.scss'
})
export class PetActionsComponent {
  constructor(private router: Router) { }
  @Input() petId!: any;

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  ver() {
    this.router.navigate(['/mascotas/info', this.petId]);
    this.closeMenu();
  }

  editar() {
    this.router.navigate(['/mascotas/editar', this.petId]);
    this.closeMenu();
  }

  eliminar() {
    console.log('Eliminar mascota');
    this.closeMenu();
  }
}
