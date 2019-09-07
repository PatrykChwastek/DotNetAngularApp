using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Story
    {
        private readonly char delimiter = ',';
        private string _categories;
        public Story()
        {
        }

        public Story(int storyID, string storyTitle, string storyContent, int userID, string[] storyCategory)
        {
            StoryID = storyID;
            StoryTitle = storyTitle;
            StoryContent = storyContent;
            UserID = userID;
            Categories = storyCategory;
        }

        [Key]
        public int StoryID { get; set; }
        [Required]
        [Column(TypeName = "text")]
        public string StoryTitle { get; set; }
        [Required]
        [Column(TypeName = "text")]
        public string StoryContent { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int UserID { get; set; }
        [Required]
        [Column(TypeName = "text[]")]
        public string[] Categories { get; set; }

        }
}