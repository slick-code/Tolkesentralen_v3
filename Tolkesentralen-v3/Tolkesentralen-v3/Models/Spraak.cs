using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Tolkesentralen_v3.Models
{
    public class Spraak
    {
        [Key]
        public int spraakId { get; set; }
        public string navn { get; set; }
       

       public virtual List<Tolk> tolk { get; set; }
        //public virtual ICollection<SpraakTolk> SpraakTolk { get; set; }
    }

    //public class SpraakTolk
    //{
    //    [Key, Column(Order = 0)]
    //    public int spraakId { get; set; }
    //    [Key, Column(Order = 1)]
    //    public int persId { get; set; }

    //    public virtual Spraak Spraak { get; set; }
    //    public virtual Kunde Kunde { get; set; }

    //    public int nivaa { get; set; }
    //}
}