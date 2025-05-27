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
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-pets-page',
  standalone: true,
  templateUrl: './view-pets-page.component.html',
  styleUrl: './view-pets-page.component.scss',
  imports: [CommonModule, HeaderComponent, FooterComponent, SidebarComponent, PetActionsComponent, FormsModule],
})
export class ViewPetsPageComponent implements OnInit {
  constructor(
    private petService: PetService,
    private clientService: ClientsService,
    private location: Location
  ) { }

  allPets: Pet[] = [];
  filteredPets: Pet[] = [];
  searchTerm: string = '';

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

  onSearchChange(term: string) {
  const lowerTerm = term.toLowerCase();

  if (!term.trim()) {
    this.filteredPets = this.allPets;
  } else {
    this.filteredPets = this.allPets.filter(pet =>
      pet.nombre.toLowerCase().includes(lowerTerm) ||
      this.getPropietarioNombre(pet.propietarioId).toLowerCase().includes(lowerTerm) ||
      pet.mascotaId?.toString().includes(lowerTerm) 
    );
  }
}


  getPropietarioNombre(id: number): string {
    return this.clientMap.get(id) || 'Desconocido';
  }

  goBack() {
    this.location.back();
  }

  loadData() {
    this.petService.getAllPets().subscribe((data) => {
      this.allPets = data;
      console.log('aquitoy');
      
    });
  }

  onPetDeleted() {
    this.loadData(); // Vuelve a cargar los datos tras la modificación
  }
}