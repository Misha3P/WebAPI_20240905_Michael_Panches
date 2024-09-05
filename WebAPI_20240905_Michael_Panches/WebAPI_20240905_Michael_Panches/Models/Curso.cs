using System;
using System.Collections.Generic;
using WebAPI_20240905_Michael_Panches.Models;

namespace WebAPI_20240905_Michael_Panches.Models;

public partial class Curso
{
    public int CursoId { get; set; }

    public string Titulo { get; set; } = null!;

    public string? Descripcion { get; set; }

    public DateTime? FechaInicio { get; set; }

    public DateTime? FechaFin { get; set; }

    public int? InstitucionId { get; set; }

    public int? InstructorId { get; set; }

    public virtual ICollection<Inscripcion> Inscripciones { get; set; } = new List<Inscripcion>();

    public virtual Institucion? Institucion { get; set; }

    public virtual Instructor? Instructor { get; set; }
}

