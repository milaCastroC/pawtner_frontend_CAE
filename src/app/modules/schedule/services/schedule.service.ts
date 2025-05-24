import { Injectable } from '@angular/core';
import { Schedule } from '../../../models/schedule/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  getScheduleById(id: number): Schedule {
    return {
      horaInicio: new Date(2023, 10, 1, 9, 0),
      horaFin: new Date(2023, 10, 1, 9, 30)
    }
  }
}
