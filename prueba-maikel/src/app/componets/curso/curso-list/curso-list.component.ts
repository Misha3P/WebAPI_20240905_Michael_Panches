import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Curso } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';
import { CursoFormComponent } from '../curso-form/curso-form.component';
import { CursoDetailsComponent } from '../curso-details/curso-details.component';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursoService: CommonService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos() {
    this.cursoService.getCursos().subscribe(cursos => this.cursos = cursos);
  }

  openCursoFormModal(cursoId?: number) {
    const modalRef = this.modalService.open(CursoFormComponent);
    if (cursoId) {
      this.cursoService.getCurso(cursoId).subscribe(curso => {
        modalRef.componentInstance.curso = curso;
        modalRef.componentInstance.isEditMode = true;
      });
    } else {
      modalRef.componentInstance.isEditMode = false;
    }
  }

  openCursoDetailsModal(cursoId: number) {
    const modalRef = this.modalService.open(CursoDetailsComponent);
    this.cursoService.getCurso(cursoId).subscribe(curso => modalRef.componentInstance.curso = curso);

    modalRef.componentInstance.cursoUpdated.subscribe(() => {
      this.loadCursos(); // Recargar la lista de cursos después de la actualización
    });
  }
}
