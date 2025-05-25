import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pet } from '../../../../models/pets/pet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss'
})
export class PetCardComponent {
  constructor(private router: Router) {}
  @Input() pet!: Pet;

  ver(){
    this.router.navigate(['/mascotas/info', this.pet.mascotaId]);
  }
}
