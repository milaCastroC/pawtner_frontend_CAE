import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-pet-info-component',
  standalone: true,
  templateUrl: './appointment-pet-info-component.component.html',
  styleUrl: './appointment-pet-info-component.component.scss'
})
export class AppointmentPetInfoComponentComponent {
  constructor(
    private router: Router
  ){}

  @Input() pet: any;
  @Input() owner: any;

  goToEditPet() {
    this.router.navigate(['/mascotas/editar', this.pet.mascotaId]);
  }
}
