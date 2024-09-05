import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Curso } from 'src/app/models/models';
import { CursoDetailsComponent } from '../../curso/curso-details/curso-details.component';

@Component({
  selector: 'app-curso-card',
  templateUrl: './curso-card.component.html',
  styleUrls: ['./curso-card.component.scss']
})
export class CursoCardComponent {
  @Input() curso!: Curso;

  constructor(private modalService: NgbModal) { }

  openCursoDetailsModal() {
    const modalRef = this.modalService.open(CursoDetailsComponent);
    modalRef.componentInstance.curso = this.curso;
  }
}
