import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from '../../../../models/schedule/schedule';
import { Appointment } from '../../../../models/appointments/appointment';
import { formatDate } from '../../../../globals/utils/dates/formatDate';

@Component({
  selector: 'app-appointment-info-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-info-component.component.html',
  styleUrl: './appointment-info-component.component.scss'
})
export class AppointmentInfoComponentComponent{
  @Input() cita!: Appointment;
  @Input() schedule!: Schedule;

  user = JSON.parse(sessionStorage.getItem('StorageUser') || '{}');
  veterinarianName: string = this.user.name;

  formatApptDate(): string {
    if (!this.cita) return '';    
    return formatDate(this.cita.fecha, 'dd/mm/yyyy');
  }

}
