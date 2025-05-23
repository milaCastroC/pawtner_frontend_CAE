import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-pet-info-component',
  standalone: true,
  templateUrl: './appointment-pet-info-component.component.html',
  styleUrl: './appointment-pet-info-component.component.scss'
})
export class AppointmentPetInfoComponentComponent {
  @Input() mascota: any;
}
