import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { SidebarComponent } from '../../globals/components/sidebar/sidebar.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { AddMedicalRecordFormComponent } from '../../modules/medicalHistory/components/add-medical-record-form/add-medical-record-form.component';
import { PetInfoComponent } from '../../modules/pets/components/pet-info/pet-info.component';
import { Pet } from '../../models/pets/pet';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../modules/pets/services/pet.service';
import { ClientsService } from '../../modules/people/clients/services/clients.service';
import { ItemHistoryService } from '../../modules/medicalHistory/services/item-history.service';
import { Client } from '../../models/clients/client';
import { ItemHistory } from '../../models/medicalHistory/item-history';

@Component({
  selector: 'app-add-historial-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AddMedicalRecordFormComponent,
    PetInfoComponent,
  ],
  templateUrl: './add-historial-page.component.html',
  styleUrl: './add-historial-page.component.scss'
})
export class AddHistorialPageComponent implements OnInit {
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private petService: PetService,
    private clientService: ClientsService,
    private itemHistoryService: ItemHistoryService
  ) { }

  pet!: Pet;
  owner!: Client;
  itemHistory: ItemHistory[] = []
  citaId!: number


  ngOnInit(): void {
    this.citaId = this.activatedRoute.snapshot.params['idAppt'];
    console.log('ID de Cita:', this.citaId);
    
    // Cargar información de la mascota
    this.petService.getPetById(this.activatedRoute.snapshot.params['idPet']).subscribe({
      next: (data: Pet) => {
        this.pet = data;
        // Cargar información del propietario
        if (this.pet.mascotaId != null) {
          this.clientService.getClientById(this.pet.propietarioId).subscribe({
            next: (ownerData: any) => {
              this.owner = ownerData;
            },
            error: (err) => console.error('Error al cargar propietario:', err)
          });

          this.itemHistoryService.getHistoryByPetId(this.pet.mascotaId).subscribe({
            next: (historyData: ItemHistory[]) => {
              this.itemHistory = historyData;
            }
          })
          
        }
      },
      error: (err) => console.error('Error al cargar mascota:', err)
    });
  }



  // onAgregar(record: any) {
  //   console.log('Registro agregado:', record);
  // }

  goBack() {
    this.location.back();
  }

}
