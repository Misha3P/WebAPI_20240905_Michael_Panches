// interfaces/curso.ts
export interface Curso {
    cursoId: number;
    titulo: string;
    descripcion: string;
    fechaInicio: string; // Usar Date si prefieres trabajar con fechas
    fechaFin: string; // Usar Date si prefieres trabajar con fechas
    institucionId: number;
    instructorId: number;
    inscripciones: Inscripcion[];
    institucion: Institucion;
    instructor: Instructor;
  }
  
  // interfaces/estudiante.ts
  export interface Estudiante {
    estudianteId: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    fechaNacimiento: string; // Usar Date si prefieres trabajar con fechas
    userId: number;
    inscripciones: Inscripcion[];
    user: User;
  }
  
  // interfaces/inscripcion.ts
  export interface Inscripcion {
    inscripcionId: number;
    cursoId: number;
    estudianteId: number;
    fechaInscripcion: string; // Usar Date si prefieres trabajar con fechas
    curso: Curso;
    estudiante: Estudiante;
  }
  
  // interfaces/institucion.ts
  export interface Institucion {
    institucionId: number;
    nombre: string;
    direccion: string;
    telefono: string;
    email: string;
    cursos: Curso[];
  }
  
  // interfaces/instructor.ts
  export interface Instructor {
    instructorId: number;
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
    especialidad: string;
    userId: number;
    cursos: Curso[];
    user: User;
  }
  
  // interfaces/user.ts
  export interface User {
    id: number;
    username: string;
    passwordHash: string;
    email: string;
    role: string;
    createdAt: string; // Usar Date si prefieres trabajar con fechas
    isActive: boolean;
    estudiante: Estudiante;
    instructor: Instructor;
  }
  