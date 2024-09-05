using System;
using System.Collections.Generic;

namespace WebAPI_20240905_Michael_Panches.Models;

public partial class Inscripcion
{
    public int InscripcionId { get; set; }

    public int? CursoId { get; set; }

    public int? EstudianteId { get; set; }

    public DateTime? FechaInscripcion { get; set; }

    public virtual Curso? Curso { get; set; }

    public virtual Estudiante? Estudiante { get; set; }
}
