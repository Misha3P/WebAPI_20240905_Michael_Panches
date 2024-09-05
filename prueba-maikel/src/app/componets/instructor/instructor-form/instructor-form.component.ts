// src/app/components/instructor-form/instructor-form.component.ts
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Instructor } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html'
})
export class InstructorFormComponent {
  @Input() instructor!: Instructor;
  @Input() isEditMode: boolean = false; // Ensure isEditMode has a default value

  constructor(public activeModal: NgbActiveModal, private instructorService: CommonService) {}

  saveInstructor() {
    if (this.isEditMode && this.instructor) {
      this.instructorService.updateInstructor(this.instructor.instructorId, this.instructor).subscribe(() => {
        this.activeModal.close('Instructor updated');
      });
    } else if (this.instructor) {
      this.instructorService.createInstructor(this.instructor).subscribe(() => {
        this.activeModal.close('Instructor created');
      });
    }
  }
}
