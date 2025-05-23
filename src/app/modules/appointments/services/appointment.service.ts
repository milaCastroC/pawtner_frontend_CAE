import { Injectable } from '@angular/core';
import { AppointmentFilter } from '../../../models/appointments/appointment-filter';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../enviroments/enviroment';
import { Appointment } from '../../../models/appointments/appointment';
import { formatDateToISO } from '../../../globals/utils/dates/formatDateToISO';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private readonly http: HttpClient) { }

  getAppointmentsByVeterinarianDateStatus(filter:AppointmentFilter): Observable<Appointment[]> {
    const params = new HttpParams()
      .set('veterinarioId', filter.veterinarianId)
      .set('fecha', formatDateToISO(filter.date))
      .set('estado', filter.status)

    return this.http.get<any>(`${environment.apiUrl}/citas/combinado`, {params});
  }

}
