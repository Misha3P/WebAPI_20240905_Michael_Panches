import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Curso } from 'src/app/models/models';

@Component({
  selector: 'app-curso-home',
  templateUrl: './curso-home.component.html',
  styleUrls: ['./curso-home.component.scss']
})
export class CursoHomeComponent implements OnInit {
  cursos: Curso[] = [];

  constructor(private cursoService: CommonService) { }

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos() {
    this.cursoService.getCursos().subscribe(cursos => this.cursos = cursos);
  }
}
