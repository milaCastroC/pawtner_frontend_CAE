import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pet {
  name: string;
  type: string;
  breed: string;
  lastVisit: Date;
}

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.scss'
})
export class PetCardComponent {
  @Input() pet!: Pet;
}
