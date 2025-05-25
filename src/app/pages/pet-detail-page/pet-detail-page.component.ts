import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { SidebarComponent } from '../../globals/components/sidebar/sidebar.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { PetInfoComponent } from '../../modules/pets/components/pet-info/pet-info.component';
import { MedicalRecordComponent } from '../../modules/pets/components/medical-record/medical-record.component';
import { Pet } from '../../models/pets/pet';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../../modules/pets/services/pet.service';
import { Client } from '../../models/clients/client';
import { ItemHistory } from '../../models/medicalHistory/item-history';
import { ClientsService } from '../../modules/people/clients/services/clients.service';
import { ItemHistoryService } from '../../modules/medicalHistory/services/item-history.service';

@Component({
  selector: 'app-pet-detail-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, FooterComponent, PetInfoComponent, MedicalRecordComponent],
  templateUrl: './pet-detail-page.component.html',
  styleUrl: './pet-detail-page.component.scss'
})
export class PetDetailPageComponent implements OnInit {
  constructor(
    private activeRoute: ActivatedRoute,
    private petService: PetService,
    private clientService: ClientsService,
    private historyService: ItemHistoryService,
    private location: Location
  ) { }
  pet: Pet | null = null;
  owner: Client | null = null;
  medicalHistory: ItemHistory[] = [];


  ngOnInit(): void {
    this.petService.getPetById(this.activeRoute.snapshot.params['id']).subscribe((data: Pet) => {
      this.pet = data;
      
      if (this.pet?.mascotaId != null) {

        this.clientService.getClientById(this.pet.mascotaId).subscribe((data: any) => {
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
}


