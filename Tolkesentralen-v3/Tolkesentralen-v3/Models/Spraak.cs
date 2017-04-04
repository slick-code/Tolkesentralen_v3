using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Tolkesentralen_v3.Models
{
    public class Spraak
    {
        [Key]
        public int spraakId { get; set; }
        public string navn { get; set; }
       public string nivaa { get; set; }

       public virtual List<Tolk> tolk { get; set; }
    }
}