import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { PetService } from '../../services/pet.service';
import { ToastrService } from 'ngx-toastr';
import { Pet } from '../../../../models/pets/pet';
import { Router } from '@angular/router';

@Component({
    selector: 'app-pet-edit-form',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './pet-edit-form.component.html',
    styleUrls: ['./pet-edit-form.component.scss']
})

export class PetEditFormComponent {

    constructor(
        private petService: PetService,
        private toastr: ToastrService,
        private router: Router
    ) { }

    @Input() pet!: Pet;
    @ViewChild('petForm') petForm!: NgForm;


    saveChanges() {
        if (this.petForm.invalid) {
            this.petForm.form.markAllAsTouched();
            this.toastr.error('Por favor, completa todos los campos obligatorios');
            return;
        }
        
        try {
            this.petService.updatePet(this.pet).subscribe({
                next: () => {
                    this.toastr.success('Mascota editada con éxito');
                    this.router.navigate(['/mascotas/info', this.pet.mascotaId]);
                },
                error: () => this.toastr.error('Error al editar la mascota'),
            });
        } catch (e) {
            this.petForm.control.markAllAsTouched();
        }
    }

}