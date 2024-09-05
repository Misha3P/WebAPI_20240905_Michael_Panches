// InscripcionListComponent
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Inscripcion } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';
import { InscripcionFormComponent } from '../inscripcion-form/inscripcion-form.component';
import { InscripcionDetailsComponent } from '../inscripcion-details/inscripcion-details.component';
import { Curso, Estudiante } from 'src/app/models/models';

@Component({
  selector: 'app-inscripcion-list',
  templateUrl: './inscripcion-list.component.html',
  styleUrls: ['./inscripcion-list.component.scss']
})
export class InscripcionListComponent implements OnInit {
  inscripciones: Inscripcion[] = [];

  constructor(private inscripcionService: CommonService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadInscripciones();
  }

  loadInscripciones() {
    this.inscripcionService.getInscripciones().subscribe(inscripciones => {
      this.inscripciones = inscripciones;
      this.inscripciones.forEach(inscripcion => {
        this.loadCurso(inscripcion);
        this.loadEstudiante(inscripcion);
      });
    });
  }

  loadCurso(inscripcion: Inscripcion) {
    this.inscripcionService.getCurso(inscripcion.cursoId).subscribe(curso => {
      inscripcion.curso = curso;
    });
  }

  loadEstudiante(inscripcion: Inscripcion) {
    this.inscripcionService.getEstudiante(inscripcion.estudianteId).subscribe(estudiante => {
      inscripcion.estudiante = estudiante;
    });
  }

  openInscripcionFormModal(inscripcionId?: number) {
    const modalRef = this.modalService.open(InscripcionFormComponent);
    if (inscripcionId) {
      this.inscripcionService.getInscripcion(inscripcionId).subscribe(inscripcion => {
        modalRef.componentInstance.inscripcion = inscripcion;
        modalRef.componentInstance.isEditMode = true;
      });
    } else {
      modalRef.componentInstance.isEditMode = false;
    }
  }

  openInscripcionDetailsModal(inscripcionId: number) {
    const modalRef = this.modalService.open(InscripcionDetailsComponent);
    this.inscripcionService.getInscripcion(inscripcionId).subscribe(inscripcion => {
      modalRef.componentInstance.inscripcion = inscripcion;
      this.loadCurso(inscripcion);
      this.loadEstudiante(inscripcion);
    });

    modalRef.componentInstance.inscripcionUpdated.subscribe(() => {
      this.loadInscripciones(); // Recargar la lista de inscripciones después de la actualización
    });
  }
}
