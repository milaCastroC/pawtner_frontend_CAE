import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../../../../models/pets/pet';
import { environment } from '../../../../../enviroments/enviroment';
import { Client } from '../../../../models/clients/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private readonly http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.http.get<any>(`${environment.apiUrl}/clientes/all`);
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<any>(`${environment.apiUrl}/clientes/${id}`);
  }
}
