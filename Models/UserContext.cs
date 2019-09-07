using Microsoft.EntityFrameworkCore;

namespace WebApplication.Models
{
    public class UserContext :DbContext    
    {
        public UserContext(DbContextOptions<UserContext> options): base (options)
        {

        }

        public DbSet<User> User { get; set; }
        public DbSet<Story> Story { get; set; }
        public DbSet<StoryCategory> StoryCategory { get; set; }

    }
}
