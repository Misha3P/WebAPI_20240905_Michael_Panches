// src/app/components/instructor-details/instructor-details.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Instructor } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';
import { InstructorFormComponent } from '../instructor-form/instructor-form.component';

@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html'
})
export class InstructorDetailsComponent {
  @Input() instructor?: Instructor;
  @Output() instructorUpdated = new EventEmitter<void>(); // Emitirá un evento cuando se actualice el instructor

  constructor(public activeModal: NgbActiveModal, private instructorService: CommonService, private modalService: NgbModal) {}

  editInstructor() {
    if (this.instructor) {
      const modalRef = this.modalService.open(InstructorFormComponent);
      modalRef.componentInstance.instructor = this.instructor;
      modalRef.componentInstance.isEditMode = true;

      // Escucha el cierre del modal de edición
      modalRef.closed.subscribe(() => {
        this.instructorUpdated.emit(); // Emitir el evento cuando se cierra el modal de edición
      });

      this.activeModal.dismiss('Edit click');
    }
  }

  deleteInstructor() {
    if (this.instructor && this.instructor.instructorId) {
      this.instructorService.deleteInstructor(this.instructor.instructorId).subscribe(() => {
        this.activeModal.close('Instructor deleted');
        this.instructorUpdated.emit(); // Emitir evento después de la eliminación
        alert('Instructor eliminado exitosamente.');
      });
    }
  }
}
