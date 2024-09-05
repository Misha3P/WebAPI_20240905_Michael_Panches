import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Curso } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';
import { CursoFormComponent } from '../curso-form/curso-form.component';

@Component({
  selector: 'app-curso-details',
  templateUrl: './curso-details.component.html'
})
export class CursoDetailsComponent {
  @Input() curso?: Curso;
  @Output() cursoUpdated = new EventEmitter<void>(); // Emitirá un evento cuando se actualice el curso

  constructor(public activeModal: NgbActiveModal, private cursoService: CommonService, private modalService: NgbModal) {}

  editCurso() {
    if (this.curso) {
      const modalRef = this.modalService.open(CursoFormComponent);
      modalRef.componentInstance.curso = this.curso;
      modalRef.componentInstance.isEditMode = true;

      // Escucha el cierre del modal de edición
      modalRef.closed.subscribe(() => {
        this.cursoUpdated.emit(); // Emitir el evento cuando se cierra el modal de edición
      });

      this.activeModal.dismiss('Edit click');
    }
  }

  deleteCurso() {
    if (this.curso && this.curso.cursoId) {
      this.cursoService.deleteCurso(this.curso.cursoId).subscribe(() => {
        this.activeModal.close('Curso deleted');
        this.cursoUpdated.emit(); // Emitir evento después de la eliminación
        alert('Curso eliminado exitosamente.');
      });
    }
  }
}
