import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pet-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pet-info.component.html',
  styleUrl: './pet-info.component.scss'
})
export class PetInfoComponent {
   @Input() pet: any;
}
