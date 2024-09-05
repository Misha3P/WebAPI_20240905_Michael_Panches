import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Institucion } from 'src/app/models/models';
import { CommonService } from 'src/app/services/common.service';
import { InstitucionFormComponent } from '../institucion-form/institucion-form.component';
import { InstitucionDetailsComponent } from '../institucion-details/institucion-details.component';

@Component({
  selector: 'app-institucion-list',
  templateUrl: './institucion-list.component.html',
  styleUrls: ['./institucion-list.component.scss']
})
export class InstitucionListComponent implements OnInit {
  instituciones: Institucion[] = [];

  constructor(private institucionService: CommonService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadInstituciones();
  }

  loadInstituciones() {
    this.institucionService.getInstituciones().subscribe(instituciones => this.instituciones = instituciones);
  }

  openInstitucionFormModal(institucionId?: number) {
    const modalRef = this.modalService.open(InstitucionFormComponent);
    if (institucionId) {
      this.institucionService.getInstitucion(institucionId).subscribe(institucion => {
        modalRef.componentInstance.institucion = institucion;
        modalRef.componentInstance.isEditMode = true;
      });
    } else {
      modalRef.componentInstance.isEditMode = false;
    }
  }

  openInstitucionDetailsModal(institucionId: number) {
    const modalRef = this.modalService.open(InstitucionDetailsComponent);
    this.institucionService.getInstitucion(institucionId).subscribe(institucion => modalRef.componentInstance.institucion = institucion);

    modalRef.componentInstance.institucionUpdated.subscribe(() => {
      this.loadInstituciones(); // Recargar la lista de instituciones después de la actualización
    });
  }
}
