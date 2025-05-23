import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-medical-record-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-medical-record-form.component.html',
  styleUrls: ['./add-medical-record-form.component.scss']
})
export class AddMedicalRecordFormComponent {
  diagnostico = '';
  tratamiento = '';
  observaciones = '';

  @Output() agregar = new EventEmitter<any>();

  onSubmit() {
    this.agregar.emit({
      diagnostico: this.diagnostico,
      tratamiento: this.tratamiento,
      observaciones: this.observaciones,
      fecha: new Date().toLocaleDateString()
    });

    this.diagnostico = '';
    this.tratamiento = '';
    this.observaciones = '';
  }
}