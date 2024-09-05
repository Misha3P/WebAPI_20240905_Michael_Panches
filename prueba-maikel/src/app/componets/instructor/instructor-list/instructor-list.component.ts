// src/app/components/instructor-list/instructor-list.component.ts
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Instructor } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';
import { InstructorFormComponent } from '../instructor-form/instructor-form.component';
import { InstructorDetailsComponent } from '../instructor-details/instructor-details.component';

@Component({
  selector: 'app-instructor-list',
  templateUrl: './instructor-list.component.html',
  styleUrls: ['./instructor-list.component.scss']
})
export class InstructorListComponent implements OnInit {
  instructores: Instructor[] = [];

  constructor(private instructorService: CommonService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.loadInstructores();
  }

  loadInstructores() {
    this.instructorService.getInstructores().subscribe(instructores => this.instructores = instructores);
  }

  openInstructorFormModal(instructorId?: number) {
    const modalRef = this.modalService.open(InstructorFormComponent);
    if (instructorId) {
      this.instructorService.getInstructor(instructorId).subscribe(instructor => {
        modalRef.componentInstance.instructor = instructor;
        modalRef.componentInstance.isEditMode = true;
      });
    } else {
      modalRef.componentInstance.isEditMode = false;
    }
  }

  openInstructorDetailsModal(instructorId: number) {
    const modalRef = this.modalService.open(InstructorDetailsComponent);
    this.instructorService.getInstructor(instructorId).subscribe(instructor => modalRef.componentInstance.instructor = instructor);

    modalRef.componentInstance.instructorUpdated.subscribe(() => {
      this.loadInstructores(); // Recargar la lista de instructores después de la actualización
    });
  }
}
