using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Tolkesentralen_v3.Models
{
    public class Fil
    {
        [Key]
        public int filID { get; set; }
        public int size { get; set; }
        public string type { get; set; }

        public virtual Oversettelse  oversettelse { get; set; }


    }
}