import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../../../../models/pets/pet';
import { environment } from '../../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private readonly http: HttpClient) { }

  getAllClients(): Observable<Pet[]> {
    return this.http.get<any>(`${environment.apiUrl}/clientes/all`);
  }

  getClientById(id: number): Observable<Pet> {
    return this.http.get<any>(`${environment.apiUrl}/clientes/${id}`);
  }
}
