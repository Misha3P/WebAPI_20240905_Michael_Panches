import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CursoListComponent } from './componets/curso/curso-list/curso-list.component';
import { CursoDetailsComponent } from './componets/curso/curso-details/curso-details.component';
import { CursoFormComponent } from './componets/curso/curso-form/curso-form.component';
import { EstudianteListComponent } from './componets/estudiante/estudiante-list/estudiante-list.component';
import { EstudianteDetailsComponent } from './componets/estudiante/estudiante-details/estudiante-details.component';
import { EstudianteFormComponent } from './componets/estudiante/estudiante-form/estudiante-form.component';
import { InscripcionListComponent } from './componets/inscripcion/inscripcion-list/inscripcion-list.component';
import { InscripcionDetailsComponent } from './componets/inscripcion/inscripcion-details/inscripcion-details.component';
import { InscripcionFormComponent } from './componets/inscripcion/inscripcion-form/inscripcion-form.component';
import { InstitucionListComponent } from './componets/institucion/institucion-list/institucion-list.component';
import { InstitucionDetailsComponent } from './componets/institucion/institucion-details/institucion-details.component';
import { InstitucionFormComponent } from './componets/institucion/institucion-form/institucion-form.component';
import { InstructorListComponent } from './componets/instructor/instructor-list/instructor-list.component';
import { InstructorDetailsComponent } from './componets/instructor/instructor-details/instructor-details.component';
import { InstructorFormComponent } from './componets/instructor/instructor-form/instructor-form.component';
import { UserListComponent } from './componets/user/user-list/user-list.component';
import { UserDetailsComponent } from './componets/user/user-details/user-details.component';
import { UserFormComponent } from './componets/user/user-form/user-form.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { CursoHomeComponent } from './componets/home/curso-home/curso-home.component';
import { CursoCardComponent } from './componets/home/curso-card/curso-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoListComponent,
    CursoDetailsComponent,
    CursoFormComponent,
    EstudianteListComponent,
    EstudianteDetailsComponent,
    EstudianteFormComponent,
    InscripcionListComponent,
    InscripcionDetailsComponent,
    InscripcionFormComponent,
    InstitucionListComponent,
    InstitucionDetailsComponent,
    InstitucionFormComponent,
    InstructorListComponent,
    InstructorDetailsComponent,
    InstructorFormComponent,
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,
    NavbarComponent,
    CursoHomeComponent,
    CursoCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
