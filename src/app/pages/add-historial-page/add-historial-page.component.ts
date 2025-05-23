import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { SidebarComponent } from '../../globals/components/sidebar/sidebar.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { AddMedicalRecordFormComponent } from '../../modules/medicalHistory/components/add-medical-record-form/add-medical-record-form.component';
import { PetInfoComponent } from '../../modules/pets/components/pet-info/pet-info.component';

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
export class AddHistorialPageComponent {
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


  onAgregar(record: any) {
    console.log('Registro agregado:', record);
  }
}
