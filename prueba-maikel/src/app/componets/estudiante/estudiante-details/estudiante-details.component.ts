import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Estudiante } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';
import { EstudianteFormComponent } from '../estudiante-form/estudiante-form.component';

@Component({
  selector: 'app-estudiante-details',
  templateUrl: './estudiante-details.component.html'
})
export class EstudianteDetailsComponent {
  @Input() estudiante?: Estudiante;
  @Output() estudianteUpdated = new EventEmitter<void>(); // Emitirá un evento cuando se actualice el estudiante

  constructor(public activeModal: NgbActiveModal, private estudianteService: CommonService, private modalService: NgbModal) {}

  editEstudiante() {
    if (this.estudiante) {
      const modalRef = this.modalService.open(EstudianteFormComponent);
      modalRef.componentInstance.estudiante = this.estudiante;
      modalRef.componentInstance.isEditMode = true;

      // Escucha el cierre del modal de edición
      modalRef.closed.subscribe(() => {
        this.estudianteUpdated.emit(); // Emitir el evento cuando se cierra el modal de edición
      });

      this.activeModal.dismiss('Edit click');
    }
  }

  deleteEstudiante() {
    if (this.estudiante && this.estudiante.estudianteId) {
      this.estudianteService.deleteEstudiante(this.estudiante.estudianteId).subscribe(() => {
        this.activeModal.close('Estudiante deleted');
        this.estudianteUpdated.emit(); // Emitir evento después de la eliminación
        alert('Estudiante eliminado exitosamente.');
      });
    }
  }
}
