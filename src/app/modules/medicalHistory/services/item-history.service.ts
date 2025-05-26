import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemHistory } from '../../../models/medicalHistory/item-history';
import { environment } from '../../../../enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemHistoryService {

  constructor(private readonly http: HttpClient) { }

  getHistoryByPetId(petId: number): Observable<ItemHistory[]> {
    return this.http.get<ItemHistory[]>(`${environment.apiUrl}/api/historial/by-mascota/${petId}`);
  }

  addItemHistory(item: ItemHistory): Observable<ItemHistory> {
    return this.http.post<ItemHistory>(`${environment.apiUrl}/api/historial/create`, item);
  }

  deleteItemHistory(itemId: number): Observable<string> {
    return this.http.delete(`${environment.apiUrl}/api/historial/delete/${itemId}`, {
      responseType: 'text'
    });
  }

}
