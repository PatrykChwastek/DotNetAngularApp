using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }
        [Required]
        [Column(TypeName = "character(20)")]
        public string UserName { get; set; }
        [Required]
        [Column(TypeName = "character(20)")]
        public string UserPass { get; set; }
        [Column(TypeName = "character(20)")]
        public string Email { get; set; }
    }
}
