import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DashboardAppointment } from '../../../../models/appointments/dashboard-apointments';
import { formatTimeToHHmm } from '../../../../globals/utils/time/formatHour';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appointments-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './appointments-list.component.html',
  styleUrl: './appointments-list.component.scss'
})
export class AppointmentsListComponent {
  constructor(private router: Router) { }

  @Input() appointments: DashboardAppointment[] = [];

  formatTime(date: Date): string {
    console.log(date);
    
    let hora = formatTimeToHHmm(date);
    console.log(hora);
    
    return hora;
  }

  goToAppointmentDetails(appointmentId: number) {
    this.router.navigate(['cita/info/', appointmentId]);
  }
}
