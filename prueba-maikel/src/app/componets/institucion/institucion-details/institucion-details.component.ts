import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Institucion } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';
import { InstitucionFormComponent } from '../institucion-form/institucion-form.component';

@Component({
  selector: 'app-institucion-details',
  templateUrl: './institucion-details.component.html'
})
export class InstitucionDetailsComponent {
  @Input() institucion?: Institucion;
  @Output() institucionUpdated = new EventEmitter<void>(); // Emitirá un evento cuando se actualice la institución

  constructor(public activeModal: NgbActiveModal, private institucionService: CommonService, private modalService: NgbModal) {}

  editInstitucion() {
    if (this.institucion) {
      const modalRef = this.modalService.open(InstitucionFormComponent);
      modalRef.componentInstance.institucion = this.institucion;
      modalRef.componentInstance.isEditMode = true;

      // Escucha el cierre del modal de edición
      modalRef.closed.subscribe(() => {
        this.institucionUpdated.emit(); // Emitir el evento cuando se cierra el modal de edición
      });

      this.activeModal.dismiss('Edit click');
    }
  }

  deleteInstitucion() {
    if (this.institucion && this.institucion.institucionId) {
      this.institucionService.deleteInstitucion(this.institucion.institucionId).subscribe(() => {
        this.activeModal.close('Institución deleted');
        this.institucionUpdated.emit(); // Emitir evento después de la eliminación
        alert('Institución eliminada exitosamente.');
      });
    }
  }
}
