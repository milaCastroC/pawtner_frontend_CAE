import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { SidebarComponent } from '../../globals/components/sidebar/sidebar.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { AppointmentInfoComponentComponent } from '../../modules/pets/components/appointment-info-component/appointment-info-component.component';
import { AppointmentPetInfoComponentComponent } from '../../modules/pets/components/appointment-pet-info-component/appointment-pet-info-component.component';
import { AppointmentRecordItemComponentComponent } from '../../modules/pets/components/appointment-record-item-component/appointment-record-item-component.component';


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
export class InfoCitaPageComponent {

  cita = {
    fecha: '01/02/2020',
    hora: '10:30 am',
    veterinario: 'Juancho Martínez'
  };

  mascota = {
    id: 12345,
    nombre: 'Max',
    especie: 'Perro',
    raza: 'Labrador',
    edad: 5,
    peso: 28.5,
    propietario: 'Juancho Martínez'
  };

  historial = [
    {
      fecha: '01/02/2020',
      tipo: 'Control',
      diagnostico: 'Ut enim ad minim veniam, quis nostrud exercitation.'
    },
    {
      fecha: '10/03/2021',
      tipo: 'Vacuna',
      diagnostico: 'Aplicación de vacuna antirrábica anual.'
    }
  ];

  editarHistorial(index: number) {
    console.log(`Editar historial en índice: ${index}`);
    // Lógica para abrir modal o navegar
  }

  eliminarHistorial(index: number) {
    console.log(`Eliminar historial en índice: ${index}`);
    this.historial.splice(index, 1);
  }

  agregarEntrada() {
    console.log('Agregar nueva entrada');
    // Lógica para agregar entrada nueva
  }
}
