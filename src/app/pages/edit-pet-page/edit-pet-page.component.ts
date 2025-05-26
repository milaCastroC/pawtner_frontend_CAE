// src / app / pages / edit - pet - page / edit - pet - page.component.ts
import { Component, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { SidebarComponent } from '../../globals/components/sidebar/sidebar.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { MedicalRecordComponent } from '../../modules/pets/components/medical-record/medical-record.component';
import { PetEditFormComponent } from '../../modules/pets/components/pet-edit-form/pet-edit-form.component';
import { OwnerInfoCardComponent } from '../../modules/pets/components/owner-info-card/owner-info-card.component';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../../modules/pets/services/pet.service';
import { ClientsService } from '../../modules/people/clients/services/clients.service';
import { ItemHistoryService } from '../../modules/medicalHistory/services/item-history.service';
import { Client } from '../../models/clients/client';
import { Pet } from '../../models/pets/pet';
import { ItemHistory } from '../../models/medicalHistory/item-history';


@Component({
  selector: 'app-edit-pet-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MedicalRecordComponent,
    PetEditFormComponent,
    OwnerInfoCardComponent,
  ],
  templateUrl: './edit-pet-page.component.html',
  styleUrls: ['./edit-pet-page.component.scss']
})
export class EditPetPageComponent {
  constructor(
    private activeRoute: ActivatedRoute,
    private petService: PetService,
    private clientService: ClientsService,
    private historyService: ItemHistoryService,
    private location: Location
  ) { }

  pet: Pet = {} as Pet;
  owner: Client | null = null;
  medicalHistory: ItemHistory[] = [];

  @ViewChild('petEditFormRef') petEditForm!: PetEditFormComponent;


  ngOnInit(): void {
    this.petService.getPetById(this.activeRoute.snapshot.params['id']).subscribe((data: Pet) => {
      this.pet = data;

      if (this.pet?.mascotaId != null) {
        this.clientService.getClientById(this.pet.propietarioId).subscribe((data: any) => {
          this.owner = data;
        });

        this.historyService.getHistoryByPetId(this.pet.mascotaId).subscribe((data: ItemHistory[]) => {
          this.medicalHistory = data;
        });
      }
    });

  }

  goBack() {
    this.location.back();
  }

  onSubmit() {
  this.petEditForm.saveChanges();
}

}