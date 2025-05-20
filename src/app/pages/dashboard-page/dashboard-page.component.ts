import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { AppointmentsListComponent } from '../../modules/dashboard/components/appointments-list/appointments-list.component';
import { PetCardComponent } from '../../modules/dashboard/components/pet-card/pet-card.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
interface Appointment {
  petName: string;
  type: string;
  time: Date;
  duration: number;
}

interface Pet {
  name: string;
  type: string;
  breed: string;
  lastVisit: Date;
}

@Component({
  selector: 'app-dashboard-page',
  standalone:false,
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})


export class DashboardPageComponent {
  vetName = 'Dr. Martínez';
  today = new Date();
  
  todaysAppointments: Appointment[] = [
    {
      petName: 'Max',
      type: 'Consulta general',
      time: new Date(2023, 5, 15, 10, 0),
      duration: 30
    },
    // Más citas...
  ];
  
  pets: Pet[] = [
    {
      name: 'Bella',
      type: 'Perro',
      breed: 'Labrador',
      lastVisit: new Date(2023, 5, 10)
    },
    // Más mascotas...
  ];
}
