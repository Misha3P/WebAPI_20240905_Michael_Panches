import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Inscripcion } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html'
})
export class InscripcionFormComponent {
  @Input() inscripcion!: Inscripcion;
  @Input() isEditMode: boolean = false; // Ensure isEditMode has a default value

  constructor(public activeModal: NgbActiveModal, private inscripcionService: CommonService) {}

  saveInscripcion() {
    if (this.isEditMode && this.inscripcion) {
      this.inscripcionService.updateInscripcion(this.inscripcion.inscripcionId, this.inscripcion).subscribe(() => {
        this.activeModal.close('Inscripción updated');
      });
    } else if (this.inscripcion) {
      this.inscripcionService.createInscripcion(this.inscripcion).subscribe(() => {
        this.activeModal.close('Inscripción created');
      });
    }
  }
}
