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
import { firstValueFrom, forkJoin } from 'rxjs';
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
  ) { }

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
    this.appointmentService.getAppointmentsByVeterinarianDateStatus(this.filter)
      .subscribe({
        next: async (appointments: Appointment[]) => {
          try {
            await this.loadFullAppointmentData(appointments);
          } catch (error) {
            console.error('Error al cargar datos completos de citas:', error);
          }
        },
        error: (err) => console.error('Error al obtener citas:', err)
      });
  }

  private async loadFullAppointmentData(appointments: Appointment[]): Promise<void> {
    const dashboardAppointments: DashboardAppointment[] = [];

    // Cargar todos los datos en paralelo para mejor performance
    const petPromises = appointments.map(appt => 
      firstValueFrom(this.petService.getPetById(appt.mascotaId))
    );
    
    const schedulePromises = appointments.map(appt => 
      firstValueFrom(this.scheduleService.getScheduleById(appt.horarioId))
    );

    try {
      // Esperar a que todos los calls asíncronos terminen
      const [pets, schedules] = await Promise.all([
        Promise.all(petPromises),
        Promise.all(schedulePromises)
      ]);

      for (let i = 0; i < appointments.length; i++) {
        const appt = appointments[i];
        const pet = pets[i];
        const schedule = schedules[i];
        
        let apptDate = parseISODateToLocalDate(appt.fecha);

        dashboardAppointments.push({
          apptId: appt.citaId ?? 0,
          pet: pet,
          schedule: schedule,
          type: appt.tipoCita,
          date: formatDate(apptDate, 'dd/mm/yyyy'),
          duration: this.getAppointmentDuration(schedule)
        });

        this.pets.push(pet);
      }

      this.todaysAppointments = dashboardAppointments;
      console.log('Citas del día:', this.todaysAppointments);
      
    } catch (error) {
      console.error('Error al cargar pets o schedules:', error);
    }
  }

  private getAppointmentDuration(schedule: Schedule): number {
    if (!schedule || !schedule.horaInicio || !schedule.horaFin) {
      console.warn('Schedule data missing or invalid');
      return 0;
    }

    try {
      const start = new Date(schedule.horaInicio);
      const end = new Date(schedule.horaFin);
      
      // Verificar que las fechas sean válidas
      if (isNaN(start.getTime()) || isNaN(end.getTime())) {
        console.warn('Invalid date values in schedule:', schedule);
        return 0;
      }

      const durationMin = Math.round((end.getTime() - start.getTime()) / 60000);
      return durationMin;
    } catch (error) {
      console.error('Error calculating duration:', error);
      return 0;
    }
  }
}