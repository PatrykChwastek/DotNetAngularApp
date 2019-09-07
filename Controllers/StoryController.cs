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
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class StoryController : ControllerBase
    {
        private readonly UserContext _context;

        public StoryController(UserContext context)
        {
            _context = context;
        }

        // GET: api/story?page=1&size=3 

        [HttpGet]
        [ActionName("all")]
        public async Task<IActionResult> GetAllAsync(int page, int size)
        {
            if (page <= 0)
            {
                page = 1;
            }

            var query = _context.Story;
            var count = query.Count();
            var totalPages = (int)Math.Ceiling(count / (float)size);

            var items = await query.OrderBy(x => x.StoryID).Skip((page - 1) * size).Take(size).ToArrayAsync();

            return Created("stories", new { page, size, totalPages, items });
        }

        [HttpGet]
        [ActionName("user")]
        public async Task<IActionResult> GetAllByUserAsync(int user,int page, int size)
        {
            if (page <= 0)
            {
                page = 1;
            }

            var query = _context.Story;
            var count = query.Where(i => i.UserID == user).Count();
            var totalPages = (int)Math.Ceiling(count / (float)size);

            var items = await query.Where(i=>i.UserID==user).OrderBy(x => x.StoryID).Skip((page - 1) * size).Take(size).ToArrayAsync();

            return Created("stories", new { page, size, totalPages, items });
        }

        //GET api/story/category?cat  = drama & page = 1 & size = 3
        [HttpGet]
        [ActionName("category")]
        public async Task<IActionResult> GetAllByCategoryAsync(string cat, int page, int size)
        {
            if (page <= 0)
            {
                page = 1;
            }

            var query = _context.Story;
            var count = query.Where(i => i.Categories.Contains(cat, StringComparer.OrdinalIgnoreCase)).Count();
            var totalPages = (int)Math.Ceiling(count / (float)size);

            var items = await query.Where(i => i.Categories.Contains(cat, StringComparer.OrdinalIgnoreCase)).OrderBy(x => x.StoryID).Skip((page - 1) * size).Take(size).ToArrayAsync();

            return Created("stories", new { page, size, totalPages, items });
        }

        //GET api/story/title?title=lorem&page=1&size=3
        [HttpGet]
        [ActionName("title")]
        public async Task<IActionResult> GetAllByTitleAsync(string title, int page, int size)
        {
            if (page <= 0)
            {
                page = 1;
            }

            var query = _context.Story;
            var count = query.Where(i =>
             i.StoryTitle.ToLower().IndexOf(title.ToLower()) > -1).Count();
            var totalPages = (int)Math.Ceiling(count / (float)size);

            var items = await query.Where(i =>
             i.StoryTitle.ToLower().IndexOf(title.ToLower()) > -1)
                .OrderBy(x => x.StoryID).Skip((page - 1) * size)
                .Take(size).ToArrayAsync();

            return Created("stories", new { page, size, totalPages, items });
        }

        //GET api/story/category&title?cat=drama&title=lorem&page=1&size=3
        [HttpGet]
        [ActionName("category&title")]
        public async Task<IActionResult> GetAllByCategoryAndTitleAsync(string cat,string title, int page, int size)
        {
            if (page <= 0)
            {
                page = 1;
            }

            var query = _context.Story;
            var count = query.Where(i => 
             i.Categories.Contains(cat, StringComparer.OrdinalIgnoreCase) && 
             i.StoryTitle.ToLower().IndexOf(title.ToLower()) > -1).Count();
            var totalPages = (int)Math.Ceiling(count / (float)size);

            var items = await query.Where(i => 
             i.Categories.Contains(cat, StringComparer.OrdinalIgnoreCase) &&
             i.StoryTitle.ToLower().IndexOf(title.ToLower()) > -1)
                .OrderBy(x => x.StoryID).Skip((page - 1) * size)
                .Take(size).ToArrayAsync();

            return Created("stories", new { page, size, totalPages, items });
        }

        // GET: api/Story/get/5
        [HttpGet("{id}")]
        [ActionName("get")]
        public async Task<ActionResult<Story>> GetStory(int id)
        {
            var story = await _context.Story.FindAsync(id);

            if (story == null)
            {
                return NotFound();
            }

            return story;
        }

        // PUT: api/Story/put/5
        [HttpPut("{id}")]
        [ActionName("put")]
        public async Task<IActionResult> PutStory(int id, Story story)
        {
            if (id != story.StoryID)
            {
                return BadRequest();
            }

            _context.Entry(story).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StoryExists(id))
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

        // POST: api/Story/post
        [HttpPost]
        [ActionName("post")]
        public async Task<ActionResult<Story>> PostStory(Story story)
        {
            _context.Story.Add(story);
            await _context.SaveChangesAsync();

            return Ok(story);
        }

        // DELETE: api/Story/delete/5
        [HttpDelete("{id}")]
        [ActionName("delete")]
        public async Task<ActionResult<Story>> DeleteStory(int id)
        {
            var story = await _context.Story.FindAsync(id);
            if (story == null)
            {
                return NotFound();
            }

            _context.Story.Remove(story);
            await _context.SaveChangesAsync();

            return story;
        }

        private bool StoryExists(int id)
        {
            return _context.Story.Any(e => e.StoryID == id);
        }
    }
}
