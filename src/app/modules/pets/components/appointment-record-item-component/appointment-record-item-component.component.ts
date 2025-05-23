import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-appointment-record-item-component',
  standalone: true,
  templateUrl: './appointment-record-item-component.component.html',
  styleUrl: './appointment-record-item-component.component.scss'
})
export class AppointmentRecordItemComponentComponent {
   @Input() record: any;
  @Input() index!: number;

  @Output() editar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();
}
