using System;
using System.Collections.Generic;

namespace WebAPI_20240905_Michael_Panches.Models;

public partial class Instructor
{
    public int InstructorId { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido { get; set; } = null!;

    public string? Email { get; set; }

    public string? Telefono { get; set; }

    public string? Especialidad { get; set; }

    public int? UserId { get; set; }

    public virtual ICollection<Curso> Cursos { get; set; } = new List<Curso>();

    public virtual User? User { get; set; }
}
