using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.Models
{

    public abstract class Oppdrag
    {
        [Key]
        public int oppdragsID { get; set; }
        public DateTime  regDato { get; set; }
        public string spraakFra { get; set; }

        public string spraakTil { get; set; }
        public string andreOpplisning { get; set; }

        public virtual Kunde kunde { get; set; }
        
        public virtual Tolk Tolk { get; set; }
    }


   // [Table("Fremmaate")]
    public class Tolking : Oppdrag
    {

        public string oppdragType { get; set; }
        public string oppdragsAddres { get; set; }
        public DateTime oppdragsDato { get; set; }
        public DateTime tidFra { get; set; }
        public DateTime tidTil { get; set; }
    }

   // [Table("Oversettelse")]
    public class Oversettelse : Oppdrag
    {

        public string frist { get; set; }
        public List<Fil> fil { get; set; }

    }
}