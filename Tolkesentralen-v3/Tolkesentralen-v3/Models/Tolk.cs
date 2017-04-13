using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.Models
{
    public class Tolk : Person
    {
        public virtual List<Spraak> spraak { get; set; }
        public virtual List<Oppdrag> oppdrag { get; set; }

        public virtual List<Foresporsler> foresporsler { get; set; }
        //public virtual ICollection<SpraakTolk> SpraakTolk { get; set; }

    }
}