import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationModalComponent } from '../../../../globals/components/confirmation-modal/confirmation-modal.component';
import { ToastrService } from 'ngx-toastr';
import { ItemHistoryService } from '../../../medicalHistory/services/item-history.service';

@Component({
  selector: 'app-appointment-record-item-component',
  standalone: true,
  imports: [ConfirmationModalComponent],
  templateUrl: './appointment-record-item-component.component.html',
  styleUrl: './appointment-record-item-component.component.scss'
})
export class AppointmentRecordItemComponentComponent {
  constructor(
    private toastr: ToastrService,
    private itemHistoryService: ItemHistoryService
  ) { }

  @Input() record: any;
  @Input() index!: number;
  @Output() recordDeleted = new EventEmitter<void>();
  showModal = false;

  showConfirmationModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  editRecord() {
    this.toastr.warning('Esta no la hice T-T', 'Aiudaaaaaa')
  }

  deleteRecord() {
  this.itemHistoryService.deleteItemHistory(this.record.itemHistorialId).subscribe({
    next: (res) => {
      this.recordDeleted.emit();
      this.toastr.success('Historial eliminado correctamente', 'Éxito');
    },
    error: (err) => {
      this.toastr.error('Error al eliminar el historial. Por favor inténtelo más tarde', 'Error');
    }
  });
  this.closeModal();

}

}