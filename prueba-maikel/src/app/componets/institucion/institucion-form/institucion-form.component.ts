import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Institucion } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-institucion-form',
  templateUrl: './institucion-form.component.html'
})
export class InstitucionFormComponent {
  @Input() institucion!: Institucion;
  @Input() isEditMode: boolean = false; // Ensure isEditMode has a default value

  constructor(public activeModal: NgbActiveModal, private institucionService: CommonService) {}

  saveInstitucion() {
    if (this.isEditMode && this.institucion) {
      this.institucionService.updateInstitucion(this.institucion.institucionId, this.institucion).subscribe(() => {
        this.activeModal.close('Institución updated');
      });
    } else if (this.institucion) {
      this.institucionService.createInstitucion(this.institucion).subscribe(() => {
        this.activeModal.close('Institución created');
      });
    }
  }
}
