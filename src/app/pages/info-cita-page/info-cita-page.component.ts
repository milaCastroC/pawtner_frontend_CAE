import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { SidebarComponent } from '../../globals/components/sidebar/sidebar.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { AppointmentInfoComponentComponent } from '../../modules/pets/components/appointment-info-component/appointment-info-component.component';
import { AppointmentPetInfoComponentComponent } from '../../modules/pets/components/appointment-pet-info-component/appointment-pet-info-component.component';
import { AppointmentRecordItemComponentComponent } from '../../modules/pets/components/appointment-record-item-component/appointment-record-item-component.component';
import { Appointment } from '../../models/appointments/appointment';
import { Pet } from '../../models/pets/pet';
import { ItemHistory } from '../../models/medicalHistory/item-history';
import { AppointmentService } from '../../modules/appointments/services/appointment.service';
import { PetService } from '../../modules/pets/services/pet.service';
import { ItemHistoryService } from '../../modules/medicalHistory/services/item-history.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from '../../models/schedule/schedule';
import { ScheduleService } from '../../modules/schedule/services/schedule.service';
import { Client } from '../../models/clients/client';
import { ClientsService } from '../../modules/people/clients/services/clients.service';


@Component({
  selector: 'app-info-cita-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AppointmentInfoComponentComponent,
    AppointmentPetInfoComponentComponent,
    AppointmentRecordItemComponentComponent,
  ],
  templateUrl: './info-cita-page.component.html',
  styleUrls: ['./info-cita-page.component.scss']
})
export class InfoCitaPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private apptService: AppointmentService,
    private petServe: PetService,
    private itemHistoryService: ItemHistoryService,
    private scheduleService: ScheduleService,
    private clientService: ClientsService
  ) { }

  appointment!: Appointment;
  pet!: Pet;
  medicalHistory: ItemHistory[] = [];
  schedule!: Schedule;
  owner!: Client;

  ngOnInit(): void {
    this.apptService.getAppointmentById(this.activatedRoute.snapshot.params['id']).subscribe({
      next: (data: Appointment) => {
        this.appointment = data;

        // Cargar horario si existe
        if (this.appointment.horarioId) {
          this.scheduleService.getScheduleById(this.appointment.horarioId).subscribe({
            next: (scheduleData: Schedule) => {
              this.schedule = scheduleData;
              
            },
            error: (error) => {
              console.error('Error loading schedule:', error);
            }
            
          });
        }

        // Cargar mascota si existe
        if (this.appointment?.mascotaId) {
          this.petServe.getPetById(this.appointment.mascotaId).subscribe({
            next: (petData: Pet) => {
              this.pet = petData;

              // Cargar historial médico de la mascota
              if (this.pet?.mascotaId) {
                this.itemHistoryService.getHistoryByPetId(this.pet.mascotaId).subscribe({
                  next: (historyData: ItemHistory[]) => {
                    this.medicalHistory = historyData;
                  },
                  error: (error) => {
                    console.error('Error loading medical history:', error);
                  }
                });

                // Cargar información del propietario
                this.clientService.getClientById(this.pet.propietarioId).subscribe({
                  next: (clientData: Client) => {
                    this.owner = clientData;
                  },
                  error: (error) => {
                    console.error('Error loading owner:', error);
                  }
                });
              }
            },
            error: (error) => {
              console.error('Error loading pet:', error);
            }
          });
        }
      },
      error: (error) => {
        console.error('Error loading appointment:', error);
      }
    });
  }

  editarItemHistorial(index: number) {
    console.log(`Editar historial en índice: ${index}`);
    // Lógica para abrir modal o navegar
  }

  eliminarItemHistorial(index: number) {
    console.log(`Eliminar item de historial en índice: ${index}`);
  }

  goToAddItemHistory() {
    this.router.navigate(['cita', this.appointment.citaId, 'agregar-historial', 'mascota', this.pet.mascotaId]);
  }

  loadData() {
    this.itemHistoryService.getHistoryByPetId(this.appointment.mascotaId).subscribe({
      next: (historyData: ItemHistory[]) => {
        this.medicalHistory = historyData;
      }
    });
  }

  onDeleteItemHistory() {
    this.loadData();
  }

  goBack() {
    this.location.back();
  }
}