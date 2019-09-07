using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class StoryCategory
    {
        public StoryCategory(int categoryID, string categoryName)
        {
            CategoryID = categoryID;
            CategoryName = categoryName;
        }

        [Key]
        public int CategoryID { get; set; }
        [Required]
        [Column(TypeName = "text")]
        public string CategoryName { get; set; }
    }
}
