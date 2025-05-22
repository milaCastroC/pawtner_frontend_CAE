import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../../globals/components/header/header.component';
import { FooterComponent } from '../../globals/components/footer/footer.component';
import { SidebarComponent } from '../../globals/components/sidebar/sidebar.component';
import { PetActionsComponent } from "../../modules/pets/components/pet-actions/pet-actions.component";

@Component({
  selector: 'app-view-pets-page',
  standalone: true,
  templateUrl: './view-pets-page.component.html',
  styleUrl: './view-pets-page.component.scss',
  imports: [CommonModule, HeaderComponent, FooterComponent, SidebarComponent, PetActionsComponent],
})
export class ViewPetsPageComponent {
  pets = [
    { nombre: 'Max', especie: 'Perro', raza: 'Labrador', edad: 5, peso: 30, propietario: 'Ana Pérez' },
    { nombre: 'Mimi', especie: 'Gato', raza: 'Persa', edad: 3, peso: 4, propietario: 'Carlos Ruiz' },
    // ... más datos mock
  ];
}
