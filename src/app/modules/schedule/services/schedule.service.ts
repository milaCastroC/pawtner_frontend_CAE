import { Injectable } from '@angular/core';
import { Schedule } from '../../../models/schedule/schedule';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private readonly http: HttpClient) { }

  getScheduleById(id: number): Observable<Schedule> {
    return this.http.get<Schedule>(`${environment.apiUrl}/horarios/${id}`);
  }
}
