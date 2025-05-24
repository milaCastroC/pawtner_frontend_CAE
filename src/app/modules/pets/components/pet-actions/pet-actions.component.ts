import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pet-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-actions.component.html',
  styleUrl: './pet-actions.component.scss'
})
export class PetActionsComponent {
  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  ver() {
    console.log('Ver mascota');
    this.closeMenu();
  }

  editar() {
    console.log('Editar mascota');
    this.closeMenu();
  }

  eliminar() {
    console.log('Eliminar mascota');
    this.closeMenu();
  }
}
