import { Injectable } from '@angular/core';
import { Pet } from '../../../models/pets/pet';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private readonly http: HttpClient) { }

  getAllPets(): Observable<Pet[]>{
    return this.http.get<Pet[]>(`${environment.apiUrl}/mascotas`)
  }

  getPetById(id: number): Observable<Pet> {
    return this.http.get<any>(`${environment.apiUrl}/mascotas/${id}`);
  }
}
