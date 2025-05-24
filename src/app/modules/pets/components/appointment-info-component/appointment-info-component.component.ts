import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-info-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-info-component.component.html',
  styleUrl: './appointment-info-component.component.scss'
})
export class AppointmentInfoComponentComponent {
  @Input() cita: any;
}
