import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Inscripcion } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';
import { InscripcionFormComponent } from '../inscripcion-form/inscripcion-form.component';

@Component({
  selector: 'app-inscripcion-details',
  templateUrl: './inscripcion-details.component.html'
})
export class InscripcionDetailsComponent {
  @Input() inscripcion?: Inscripcion;
  @Output() inscripcionUpdated = new EventEmitter<void>(); // Emitirá un evento cuando se actualice la inscripción

  constructor(public activeModal: NgbActiveModal, private inscripcionService: CommonService, private modalService: NgbModal) {}

  editInscripcion() {
    if (this.inscripcion) {
      const modalRef = this.modalService.open(InscripcionFormComponent);
      modalRef.componentInstance.inscripcion = this.inscripcion;
      modalRef.componentInstance.isEditMode = true;

      // Escucha el cierre del modal de edición
      modalRef.closed.subscribe(() => {
        this.inscripcionUpdated.emit(); // Emitir el evento cuando se cierra el modal de edición
      });

      this.activeModal.dismiss('Edit click');
    }
  }

  deleteInscripcion() {
    if (this.inscripcion && this.inscripcion.inscripcionId) {
      this.inscripcionService.deleteInscripcion(this.inscripcion.inscripcionId).subscribe(() => {
        this.activeModal.close('Inscripción deleted');
        this.inscripcionUpdated.emit(); // Emitir evento después de la eliminación
        alert('Inscripción eliminada exitosamente.');
      });
    }
  }
}
