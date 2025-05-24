import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { SidebarComponent } from '../../globals/components/sidebar/sidebar.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { PetInfoComponent } from '../../modules/pets/components/pet-info/pet-info.component';
import { MedicalRecordComponent } from '../../modules/pets/components/medical-record/medical-record.component';

@Component({
  selector: 'app-pet-detail-page',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, FooterComponent, PetInfoComponent, MedicalRecordComponent],
  templateUrl: './pet-detail-page.component.html',
  styleUrl: './pet-detail-page.component.scss'
})
export class PetDetailPageComponent {
   pet = {
    id: 12345,
    nombre: 'Max',
    especie: 'Perro',
    raza: 'Labrador',
    edad: 5,
    peso: 28.5,
    sexo: 'Macho',
    fechaNacimiento: '08/02/2020',
    propietario: 'Juancho',
    telefono: '310 235634'
  };

  historial = [
    { fecha: '08/02/2020', tipo: 'Control', diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
    { fecha: '08/02/2020', tipo: 'Examen', diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' },
    { fecha: '08/02/2020', tipo: 'Control', diagnostico: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...' }
  ];

}
