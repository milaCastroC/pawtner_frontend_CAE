import { Component, Input } from '@angular/core';

interface Appointment {
  petName: string;
  type: string;
  time?: Date;
  duration?: number;
  // Agregar más propiedades según se necesite
}

@Component({
  selector: 'app-appointments-list',
  standalone: false,
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.scss'
})
export class AppointmentsListComponent {
    @Input() appointments: Appointment[] = [];
}
