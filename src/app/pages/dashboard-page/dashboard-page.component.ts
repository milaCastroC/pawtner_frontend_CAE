import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { AppointmentsListComponent } from '../../modules/dashboard/components/appointments-list/appointments-list.component';
import { PetCardComponent } from '../../modules/dashboard/components/pet-card/pet-card.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { SidebarComponent } from "../../globals/components/sidebar/sidebar.component";
import { formatDate } from '../../globals/utils/dates/formatDate';
import { AppointmentFilter } from '../../models/appointments/appointment-filter';
import { AppointmentService } from '../../modules/appointments/services/appointment.service';
import { Appointment } from '../../models/appointments/appointment';
import { DashboardAppointment } from '../../models/appointments/dashboard-apointments';
import { PetService } from '../../modules/pets/services/pet.service';
import { ScheduleService } from '../../modules/schedule/services/schedule.service';
import { Pet } from '../../models/pets/pet';
import { parseISODateToLocalDate } from '../../globals/utils/dates/parseISODateToLocalDate';
import { firstValueFrom } from 'rxjs';
import { Schedule } from '../../models/schedule/schedule';


@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AppointmentsListComponent,
    PetCardComponent,
    FooterComponent,
    SidebarComponent
],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})

export class DashboardPageComponent implements OnInit {

  constructor(
    private appointmentService: AppointmentService,
    private petService: PetService,
    private scheduleService: ScheduleService
  ) {}

  schedule: Schedule = {
    horaInicio: new Date(),
    horaFin: new Date()
  }

  user = JSON.parse(sessionStorage.getItem('StorageUser') || '{}');
  vetName = this.user.name;
  today = formatDate(new Date(), 'dd/mm/yyyy');
  todaysAppointments: DashboardAppointment[] = [];
  pets: Pet[] = [];

  filter: AppointmentFilter = {
    veterinarianId: this.user.userId,
    date: new Date(),
    status: 'Confirmada'
  }

  ngOnInit(): void {
    console.log(this.filter.date);
    
    this.appointmentService.getAppointmentsByVeterinarianDateStatus(this.filter)
      .subscribe({
        next: (appointments: Appointment[]) => {
          this.loadFullAppointmentData(appointments);
        },
        error: (err) => console.error('Error al obtener citas:', err)
      });
  }

  private async loadFullAppointmentData(appointments: Appointment[]) {
    const dashboardAppointments: DashboardAppointment[] = [];
    console.log(appointments);
    
    for (const appt of appointments) {
      const pet = await firstValueFrom(this.petService.getPetById(appt.mascotaId));
      //const schedule = this.scheduleService.getScheduleById(appt.horarioId)

      let durationMs = this.schedule.horaFin.getTime() - this.schedule.horaInicio.getTime() ;
      let durationMin = durationMs / 60000;
      let apptDate = parseISODateToLocalDate(appt.fecha);
      
      dashboardAppointments.push({
        apptId: appt.citaId ?? 0,
        pet: pet,
        type: appt.tipoCita,
        date: formatDate(apptDate, 'dd/mm/yyyy'),
        schedule: this.schedule,
        duration: durationMin 
      });

      this.pets.push(pet);
    }

    this.todaysAppointments = dashboardAppointments;
  }
}

  // todaysAppointments: Appointment[] = [
  //   {
  //     petName: 'Max',
  //     type: 'Consulta general',
  //     time: new Date(2023, 5, 15, 10, 0),
  //     duration: 30
  //   },
  //   // Más citas...
  // ];
  
