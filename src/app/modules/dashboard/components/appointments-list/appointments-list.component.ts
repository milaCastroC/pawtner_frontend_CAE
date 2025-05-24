import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DashboardAppointment } from '../../../../models/appointments/dashboard-apointments';
import { formatTimeToHHmm } from '../../../../globals/utils/time/formatHour';


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
    @Input() appointments: DashboardAppointment[] = [];
    
    formatTime(date: Date): string {
      return formatTimeToHHmm(date);
    }
}
