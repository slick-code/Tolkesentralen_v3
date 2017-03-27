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

<<<<<<< HEAD
        public DateTime regDato { get; set; }
=======
        public DateTime  regDato { get; set; }
>>>>>>> 7b24c1909783e8ff7258e3e795d8140d715f4513
        public string spraakFra { get; set; }

        public string spraakTil { get; set; }
        public string andreOpplisning { get; set; }

        public virtual Kunde kunde { get; set; }
        public virtual Tolk Tolk { get; set; }
    }


<<<<<<< HEAD
    // [Table("Fremmaate")]
=======
   // [Table("Fremmaate")]
>>>>>>> 7b24c1909783e8ff7258e3e795d8140d715f4513
    public class Tolking : Oppdrag
    {


        public string oppdragType { get; set; }
        public string oppdragsAddres { get; set; }
        public string oppdragsDato { get; set; }
        public string tidFra { get; set; }
        public string tidTil { get; set; }
    }

<<<<<<< HEAD
    // [Table("Oversettelse")]
=======
   // [Table("Oversettelse")]
>>>>>>> 7b24c1909783e8ff7258e3e795d8140d715f4513
    public class Oversettelse : Oppdrag
    {

        public string frist { get; set; }
        public List<Fil> fil { get; set; }

    }
}