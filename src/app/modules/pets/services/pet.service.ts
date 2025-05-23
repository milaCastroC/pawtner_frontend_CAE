import { Injectable } from '@angular/core';
import { Pet } from '../../../models/pets/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor() { }

  getPetById(id: number): Pet {
    // Aquí iría la lógica para obtener la mascota por ID
    return {
      mascotaId: 5,
      propietarioId: 5,
      nombre: "Firulais",
      especie: "Perro",
      raza: "Labrador",
      sexo: "Macho",
      fechaNacimiento: new Date(2020, 1, 1),
      edad: 3,
      peso: 20
    };
  }
}
