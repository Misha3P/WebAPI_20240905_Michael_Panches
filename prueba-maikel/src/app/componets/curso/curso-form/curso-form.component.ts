import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Curso } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html'
})
export class CursoFormComponent {
  @Input() curso!: Curso;
  @Input() isEditMode: boolean = false; // Ensure isEditMode has a default value

  constructor(public activeModal: NgbActiveModal, private cursoService: CommonService) {}

  saveCurso() {
    if (this.isEditMode && this.curso) {
      this.cursoService.updateCurso(this.curso.cursoId, this.curso).subscribe(() => {
        this.activeModal.close('Curso updated');
      });
    } else if (this.curso) {
      this.cursoService.createCurso(this.curso).subscribe(() => {
        this.activeModal.close('Curso created');
      });
    }
  }
}
