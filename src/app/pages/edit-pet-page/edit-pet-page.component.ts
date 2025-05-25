// src / app / pages / edit - pet - page / edit - pet - page.component.ts
import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { SidebarComponent } from '../../globals/components/sidebar/sidebar.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { MedicalRecordComponent } from '../../modules/pets/components/medical-record/medical-record.component';
import { PetEditFormComponent } from '../../modules/pets/components/pet-edit-form/pet-edit-form.component';
import { OwnerInfoCardComponent } from '../../modules/pets/components/owner-info-card/owner-info-card.component';


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
    private location: Location
  ){}

  pet = {
    id: 12345,
    nombre: 'Manchas',
    especie: 'Perro',
    raza: 'Labrador',
    edad: 5,
    peso: 28.5,
    fechaNacimiento: '2020-02-08',
    sexo: 'Macho',
    propietario: 'Juancho Martínez',
    telefono: '310235634'
  };

  historial = [
    {
      fecha: '08/02/2020',
      tipo: 'Control',
      diagnostico: 'Vacunación anual y chequeo general.'
    },
    {
      fecha: '12/06/2021',
      tipo: 'Cirugía',
      diagnostico: 'Esterilización realizada sin complicaciones.'
    }
  ];

  owner = {
    nombre: 'Juancho Martínez',
    telefono: '310235634'
  };

  goBack() {
    this.location.back();
  }
}