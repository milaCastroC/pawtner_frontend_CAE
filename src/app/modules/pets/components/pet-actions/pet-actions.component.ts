import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationModalComponent } from '../../../../globals/components/confirmation-modal/confirmation-modal.component';
import { PetService } from '../../services/pet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pet-actions',
  standalone: true,
  imports: [CommonModule, ConfirmationModalComponent],
  templateUrl: './pet-actions.component.html',
  styleUrl: './pet-actions.component.scss'
})
export class PetActionsComponent {
  constructor(
    private router: Router,
    private petService: PetService,
    private toastr: ToastrService
  ) { }

  @Input() petId!: any;
  @Output() petDeleted = new EventEmitter<void>();

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
    this.petService.deletePet(this.petId).subscribe({
      next: () => {
        this.toastr.success('Mascota eliminada correctamente', 'Éxito');
        this.petDeleted.emit();
        console.log('Aqui entró');
        
      },
      error: (error) => {
        if(error.status === 409) {
          this.toastr.error('No se puede eliminar la mascota porque tiene citas activas. Cancela la cita para poder eliminar', 'Error');
        } else {
          this.toastr.error('Error al eliminar la mascota. Vuelva a intentar más tarde', 'Error');
        }
      }
    });
    this.closeModal();
    this.closeMenu();
  }

  showConfirmationModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
