using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StoryCategoryController : ControllerBase
    {
        private readonly UserContext _context;

        public StoryCategoryController(UserContext context)
        {
            _context = context;
        }

        // GET: api/StoryCategory
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StoryCategory>>> GetStoryCategory()
        {
            return await _context.StoryCategory.ToListAsync();
        }

        // GET: api/StoryCategory/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StoryCategory>> GetStoryCategory(int id)
        {
            var storyCategory = await _context.StoryCategory.FindAsync(id);

            if (storyCategory == null)
            {
                return NotFound();
            }

            return storyCategory;
        }

        // PUT: api/StoryCategory/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStoryCategory(int id, StoryCategory storyCategory)
        {
            if (id != storyCategory.CategoryID)
            {
                return BadRequest();
            }

            _context.Entry(storyCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StoryCategoryExists(id))
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

        // POST: api/StoryCategory
        [HttpPost]
        public async Task<ActionResult<StoryCategory>> PostStoryCategory(StoryCategory storyCategory)
        {
            _context.StoryCategory.Add(storyCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStoryCategory", new { id = storyCategory.CategoryID }, storyCategory);
        }

        // DELETE: api/StoryCategory/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<StoryCategory>> DeleteStoryCategory(int id)
        {
            var storyCategory = await _context.StoryCategory.FindAsync(id);
            if (storyCategory == null)
            {
                return NotFound();
            }

            _context.StoryCategory.Remove(storyCategory);
            await _context.SaveChangesAsync();

            return storyCategory;
        }

        private bool StoryCategoryExists(int id)
        {
            return _context.StoryCategory.Any(e => e.CategoryID == id);
        }
    }
}
