using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.Models
{

    public abstract class Oppdrag
    {
        [Key]
        public int oppdragsID { get; set; }
        
        public string oppdragType { get; set; }

        public DateTime regDato { get; set; }

        public string spraakFra { get; set; }

        public string spraakTil { get; set; }
        public DateTime tidFra { get; set; }

        public DateTime tidTil { get; set; }

        public string andreOpplisning { get; set; }

        public virtual Kunde kunde { get; set; }
    
        public virtual Tolk Tolk { get; set; }
    }


    public class Fremmaate : Oppdrag
    {

        public string oppdragsAddress { get; set; }
    }

    public class Telefontolk : Oppdrag
    {
        public int oppdragsTlf { get; set; }
    }

    public class Oversettelse : Oppdrag
    {

        public string frist { get; set; }
        public List<Fil> fil { get; set; }




    }
}