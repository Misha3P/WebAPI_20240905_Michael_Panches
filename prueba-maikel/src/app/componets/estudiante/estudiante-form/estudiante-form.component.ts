import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Estudiante } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-estudiante-form',
  templateUrl: './estudiante-form.component.html'
})
export class EstudianteFormComponent {
  @Input() estudiante!: Estudiante;
  @Input() isEditMode: boolean = false; // Valor por defecto para isEditMode

  constructor(public activeModal: NgbActiveModal, private estudianteService: CommonService) {}

  saveEstudiante() {
    if (this.isEditMode && this.estudiante) {
      this.estudianteService.updateEstudiante(this.estudiante.estudianteId, this.estudiante).subscribe(() => {
        this.activeModal.close('Estudiante updated');
      });
    } else if (this.estudiante) {
      this.estudianteService.createEstudiante(this.estudiante).subscribe(() => {
        this.activeModal.close('Estudiante created');
      });
    }
  }
}
