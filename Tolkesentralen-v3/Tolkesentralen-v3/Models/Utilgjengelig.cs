using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.Models
{
    public class Utilgjengelig
    {
        [Key]
        public int id { get; set; }
        public int persId { get; set; }
        public DateTime fraDato { get; set; }
        public DateTime tilDato { get; set; }
    }
}