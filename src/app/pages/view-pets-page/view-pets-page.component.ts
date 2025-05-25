import { CommonModule, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { SidebarComponent } from '../../globals/components/sidebar/sidebar.component';
import { PetActionsComponent } from "../../modules/pets/components/pet-actions/pet-actions.component";
import { PetService } from '../../modules/pets/services/pet.service';
import { ClientsService } from '../../modules/people/clients/services/clients.service';
import { Pet } from '../../models/pets/pet';
import { Client } from '../../models/clients/client';

@Component({
  selector: 'app-view-pets-page',
  standalone: true,
  templateUrl: './view-pets-page.component.html',
  styleUrl: './view-pets-page.component.scss',
  imports: [CommonModule, HeaderComponent, FooterComponent, SidebarComponent, PetActionsComponent],
})
export class ViewPetsPageComponent implements OnInit {
  constructor(
    private petService: PetService,
    private clientService: ClientsService,
    private location: Location
  ) { }

  allPets: Pet[] = [];
  filteredPets: Pet[] = [];

  clientMap = new Map<number, string>(); // <id, nombre>

  ngOnInit() {
    // Primero cargamos todos los propietarios
    this.clientService.getAllClients().subscribe(clients => {
      clients.forEach((client: any) => {
        this.clientMap.set(client.personaId, client.nombre + ' ' + client.apellido);
      });

      // Luego, cargamos las mascotas
      this.petService.getAllPets().subscribe(pets => {
        this.allPets = pets;
        this.filteredPets = pets;
      });
    });
  }

  getPropietarioNombre(id: number): string {
    return this.clientMap.get(id) || 'Desconocido';
  }

  goBack() {
    this.location.back();
  }
}