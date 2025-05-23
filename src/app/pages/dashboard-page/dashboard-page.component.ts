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

  user = JSON.parse(sessionStorage.getItem('StorageUser') || '{}');
  vetName = this.user.name;
  today = formatDate(new Date(), 'dd/mm/yyyy');
  todaysAppointments: DashboardAppointment[] = [];

  filter: AppointmentFilter = {
    veterinarianId: this.user.userId,
    date: new Date(),
    status: 'Confirmada'
  }

    pets: Pet[] = [
    {
      mascotaId: 1,
      propietarioId: 1,
      nombre: 'Bella',
      especie: 'Perro',
      raza: 'Labrador',
      sexo: 'Hembra',
      fechaNacimiento: new Date(2020, 1, 1),
      edad: 3,
      peso: 25
    },
  ];

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
      const [pet, schedule] = await Promise.all([
        this.petService.getPetById(appt.mascotaId),
        this.scheduleService.getScheduleById(appt.horarioId)
      ]);

      let durationMs = schedule.horaFin.getTime() - schedule.horaInicio.getTime() ;
      let durationMin = durationMs / 60000;
      let apptDate = parseISODateToLocalDate(appt.fecha);
      
      dashboardAppointments.push({
        pet: pet,
        type: appt.tipoCita,
        date: formatDate(apptDate, 'dd/mm/yyyy'),
        schedule: schedule,
        duration: durationMin 
      });
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
  
