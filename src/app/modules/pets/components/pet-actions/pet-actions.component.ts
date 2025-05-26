import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationModalComponent } from '../../../../globals/components/confirmation-modal/confirmation-modal.component';

@Component({
  selector: 'app-pet-actions',
  standalone: true,
  imports: [CommonModule, ConfirmationModalComponent],
  templateUrl: './pet-actions.component.html',
  styleUrl: './pet-actions.component.scss'
})
export class PetActionsComponent {
  constructor(private router: Router) { }
  @Input() petId!: any;

  isOpen = false;
  showModal = false;
  

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
    this.closeModal();
  }

  showConfirmationModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
