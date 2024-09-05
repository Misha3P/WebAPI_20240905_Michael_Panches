import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListComponent } from './componets/curso/curso-list/curso-list.component';
import { EstudianteListComponent } from './componets/estudiante/estudiante-list/estudiante-list.component';
import { InscripcionListComponent } from './componets/inscripcion/inscripcion-list/inscripcion-list.component';
import { InstitucionListComponent } from './componets/institucion/institucion-list/institucion-list.component';
import { InstructorListComponent } from './componets/instructor/instructor-list/instructor-list.component';
import { UserListComponent } from './componets/user/user-list/user-list.component';
import { CursoHomeComponent } from './componets/home/curso-home/curso-home.component';



const routes: Routes = [
  { path: 'crud/cursos', component: CursoListComponent },
  { path: 'crud/estudiantes', component: EstudianteListComponent },
  { path: 'crud/inscripciones', component: InscripcionListComponent },
  { path: 'crud/instituciones', component: InstitucionListComponent },
  { path: 'crud/instructores', component: InstructorListComponent },
  { path: 'crud/usuarios', component: UserListComponent },
  { path: 'crud', redirectTo: '/crud/usuarios', pathMatch: 'full' }, // Redirige /crud a /crud/usuarios
  { path: 'home', component: CursoHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
