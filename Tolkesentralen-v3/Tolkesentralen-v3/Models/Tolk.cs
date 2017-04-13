using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.Models
{
    public class Tolk : Person
    {
<<<<<<< HEAD
        
        public List<Spraak> spraak { get; set; }

        public List<Oppdrag> oppdrag { get; set; }
=======
        public virtual List<Spraak> spraak { get; set; }
        public virtual List<Oppdrag> oppdrag { get; set; }
>>>>>>> c113ef50d8a672acdffdfcbc3fd70e4eaeca7f78

        public virtual List<Foresporsler> foresporsler { get; set; }
        //public virtual ICollection<SpraakTolk> SpraakTolk { get; set; }

    }
}