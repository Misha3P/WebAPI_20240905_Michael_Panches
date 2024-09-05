using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI_20240905_Michael_Panches.Models;

namespace WebAPI_20240905_Michael_Panches.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstitucionesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public InstitucionesController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Instituciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Institucion>>> GetInstituciones()
        {
          if (_context.Instituciones == null)
          {
              return NotFound();
          }
            return await _context.Instituciones.ToListAsync();
        }

        // GET: api/Instituciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Institucion>> GetInstitucion(int id)
        {
          if (_context.Instituciones == null)
          {
              return NotFound();
          }
            var institucion = await _context.Instituciones.FindAsync(id);

            if (institucion == null)
            {
                return NotFound();
            }

            return institucion;
        }

        // PUT: api/Instituciones/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInstitucion(int id, Institucion institucion)
        {
            if (id != institucion.InstitucionId)
            {
                return BadRequest();
            }

            _context.Entry(institucion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InstitucionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Instituciones
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Institucion>> PostInstitucion(Institucion institucion)
        {
          if (_context.Instituciones == null)
          {
              return Problem("Entity set 'DatabaseContext.Instituciones'  is null.");
          }
            _context.Instituciones.Add(institucion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInstitucion", new { id = institucion.InstitucionId }, institucion);
        }

        // DELETE: api/Instituciones/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInstitucion(int id)
        {
            if (_context.Instituciones == null)
            {
                return NotFound();
            }
            var institucion = await _context.Instituciones.FindAsync(id);
            if (institucion == null)
            {
                return NotFound();
            }

            _context.Instituciones.Remove(institucion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InstitucionExists(int id)
        {
            return (_context.Instituciones?.Any(e => e.InstitucionId == id)).GetValueOrDefault();
        }
    }
}
