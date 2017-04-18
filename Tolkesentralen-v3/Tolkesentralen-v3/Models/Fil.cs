using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Tolkesentralen_v3.Models
{
    public class Fil
    {
        [Key]
        public int filID { get; set; }
        public string filNavn { get; set; }
        public string ContentType { get; set; }
        public byte[] Content { get; set; }


        public virtual Oversettelse oversettelse { get; set; }

    }
}