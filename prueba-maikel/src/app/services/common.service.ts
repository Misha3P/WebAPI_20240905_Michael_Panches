import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Asume que ya tienes interfaces TS definidas
import { Curso,Estudiante,Inscripcion, Institucion, Instructor, User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private apiUrl = "https://localhost:7266"; 

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // Cursos
  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${this.apiUrl}/api/Cursos`);
  }

  getCurso(id: number): Observable<Curso> {
    return this.http.get<Curso>(`${this.apiUrl}/api/Cursos/${id}`);
  }

  createCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${this.apiUrl}/api/Cursos`, curso, { headers: this.headers });
  }

  updateCurso(id: number, curso: Curso): Observable<Curso> {
    return this.http.put<Curso>(`${this.apiUrl}/api/Cursos/${id}`, curso, { headers: this.headers });
  }

  deleteCurso(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/Cursos/${id}`);
  }

  // Estudiantes
  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${this.apiUrl}/api/Estudiantes`);
  }

  getEstudiante(id: number): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.apiUrl}/api/Estudiantes/${id}`);
  }

  createEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(`${this.apiUrl}/api/Estudiantes`, estudiante, { headers: this.headers });
  }

  updateEstudiante(id: number, estudiante: Estudiante): Observable<Estudiante> {
    return this.http.put<Estudiante>(`${this.apiUrl}/api/Estudiantes/${id}`, estudiante, { headers: this.headers });
  }

  deleteEstudiante(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/Estudiantes/${id}`);
  }

  // Inscripciones
  getInscripciones(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(`${this.apiUrl}/api/Inscripciones`);
  }

  getInscripcion(id: number): Observable<Inscripcion> {
    return this.http.get<Inscripcion>(`${this.apiUrl}/api/Inscripciones/${id}`);
  }

  createInscripcion(inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http.post<Inscripcion>(`${this.apiUrl}/api/Inscripciones`, inscripcion, { headers: this.headers });
  }

  updateInscripcion(id: number, inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http.put<Inscripcion>(`${this.apiUrl}/api/Inscripciones/${id}`, inscripcion, { headers: this.headers });
  }

  deleteInscripcion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/Inscripciones/${id}`);
  }

  // Instituciones
  getInstituciones(): Observable<Institucion[]> {
    return this.http.get<Institucion[]>(`${this.apiUrl}/api/Instituciones`);
  }

  getInstitucion(id: number): Observable<Institucion> {
    return this.http.get<Institucion>(`${this.apiUrl}/api/Instituciones/${id}`);
  }

  createInstitucion(institucion: Institucion): Observable<Institucion> {
    return this.http.post<Institucion>(`${this.apiUrl}/api/Instituciones`, institucion, { headers: this.headers });
  }

  updateInstitucion(id: number, institucion: Institucion): Observable<Institucion> {
    return this.http.put<Institucion>(`${this.apiUrl}/api/Instituciones/${id}`, institucion, { headers: this.headers });
  }

  deleteInstitucion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/Instituciones/${id}`);
  }

  // Instructores
  getInstructores(): Observable<Instructor[]> {
    return this.http.get<Instructor[]>(`${this.apiUrl}/api/Instructores`);
  }

  getInstructor(id: number): Observable<Instructor> {
    return this.http.get<Instructor>(`${this.apiUrl}/api/Instructores/${id}`);
  }

  createInstructor(instructor: Instructor): Observable<Instructor> {
    return this.http.post<Instructor>(`${this.apiUrl}/api/Instructores`, instructor, { headers: this.headers });
  }

  updateInstructor(id: number, instructor: Instructor): Observable<Instructor> {
    return this.http.put<Instructor>(`${this.apiUrl}/api/Instructores/${id}`, instructor, { headers: this.headers });
  }

  deleteInstructor(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/Instructores/${id}`);
  }

  // Users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/api/Users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/api/Users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/api/Users`, user, { headers: this.headers });
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/api/Users/${id}`, user, { headers: this.headers });
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/api/Users/${id}`);
  }
}
