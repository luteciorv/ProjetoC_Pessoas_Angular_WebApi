using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController : ControllerBase
    {
        private readonly Contexto _contexto;

        public PessoasController(Contexto contexto) => _contexto = contexto;        

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pessoa>>> RecuperarTodosAsync()
        {
            return await _contexto.Pessoas.ToListAsync();
        }

        [HttpGet("{id}")]        
        public async Task<ActionResult<Pessoa>> RecuperarPeloIdAsync(int id)
        {
            var pessoa = await _contexto.Pessoas.FindAsync(id);
            if(pessoa is null) return NotFound();

            return pessoa;
        }

        [HttpPost]
        public async Task<ActionResult> AdicionarAsync(Pessoa pessoa)
        {
            await _contexto.Pessoas.AddAsync(pessoa);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> AtualizarAsync(Pessoa pessoa)
        {
            _contexto.Pessoas.Update(pessoa);
            await _contexto.SaveChangesAsync();

            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeletarAsync(int id)
        {
            var pessoa = await _contexto.Pessoas.FindAsync(id);
            if(pessoa is null) return NotFound();
            
            _contexto.Remove(pessoa);
            await _contexto.SaveChangesAsync();

            return Ok();
        }
    }
}