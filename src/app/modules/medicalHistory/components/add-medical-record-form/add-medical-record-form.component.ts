import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ItemHistory } from '../../../../models/medicalHistory/item-history';
import { ItemHistoryService } from '../../services/item-history.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Appointment } from '../../../../models/appointments/appointment';
import { AppointmentService } from '../../../appointments/services/appointment.service';
import { formatDateToISO } from '../../../../globals/utils/dates/formatDateToISO';

@Component({
  selector: 'app-add-medical-record-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-medical-record-form.component.html',
  styleUrls: ['./add-medical-record-form.component.scss']
})
export class AddMedicalRecordFormComponent implements OnInit{
  constructor(
    private itemHistoryService: ItemHistoryService,
    private toastr: ToastrService,
    private router: Router,
    private appointmentService: AppointmentService
  ) {}

  @Input() citaId!: number;
  cita!: Appointment;

  diagnostico = '';
  tratamiento = '';
  observaciones = '';

  // @Output() agregar = new EventEmitter<any>();
  @ViewChild('form') form!: NgForm;

  ngOnInit(): void {
    this.appointmentService.getAppointmentById(this.citaId).subscribe({
      next: (data: Appointment) => {
        this.cita = data;
      }
    });
  }


  onSubmit() {
    if (this.form.invalid) {
      this.form.form.markAllAsTouched();
      this.toastr.error('Por favor, completa todos los campos obligatorios');
      return;
    }
      let item: ItemHistory = {
        mascotaId: this.cita.mascotaId,
        diagnostico: this.diagnostico,
        tratamiento: this.tratamiento,
        observaciones: this.observaciones,
        tipo: this.cita.tipoCita,
        citaId: this.cita.citaId!,
        fecha: formatDateToISO(new Date())
      }
    try {
      this.itemHistoryService.addItemHistory(item).subscribe({
        next: () => {
          this.toastr.success('Registro médico agregado con éxito');
          this.router.navigate(['cita/info', this.citaId]);
        },
        error: () => {
          this.toastr.error('Error al agregar el registro médico. Por favor, inténtalo de nuevo');
          this.form.control.markAllAsTouched();
        }
      });
 
    } catch (e) {
      this.form.control.markAllAsTouched();
    }

  }

  formatDateToISO(date: Date): string {
    return formatDateToISO(date);
  }
}