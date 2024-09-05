import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Estudiante } from 'src/app/models/models'; // Asegúrate de que el modelo Estudiante esté bien definido.
import { CommonService } from 'src/app/services/common.service';
import { EstudianteFormComponent } from '../estudiante-form/estudiante-form.component';
import { EstudianteDetailsComponent } from '../estudiante-details/estudiante-details.component';

@Component({
  selector: 'app-estudiante-list',
  templateUrl: './estudiante-list.component.html',
  styleUrls: ['./estudiante-list.component.scss']
})
export class EstudianteListComponent implements OnInit {
  estudiantes: Estudiante[] = [];

  constructor(private estudianteService: CommonService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadEstudiantes();
  }

  loadEstudiantes() {
    this.estudianteService.getEstudiantes().subscribe(estudiantes => this.estudiantes = estudiantes);
  }

  openEstudianteFormModal(estudianteId?: number) {
    const modalRef = this.modalService.open(EstudianteFormComponent);
    if (estudianteId) {
      this.estudianteService.getEstudiante(estudianteId).subscribe(estudiante => {
        modalRef.componentInstance.estudiante = estudiante;
        modalRef.componentInstance.isEditMode = true;
      });
    } else {
      modalRef.componentInstance.isEditMode = false;
    }
  }

  openEstudianteDetailsModal(estudianteId: number) {
    const modalRef = this.modalService.open(EstudianteDetailsComponent);
    this.estudianteService.getEstudiante(estudianteId).subscribe(estudiante => modalRef.componentInstance.estudiante = estudiante);

    modalRef.componentInstance.estudianteUpdated.subscribe(() => {
      this.loadEstudiantes(); // Recargar la lista de estudiantes después de la actualización
    });
  }
}
