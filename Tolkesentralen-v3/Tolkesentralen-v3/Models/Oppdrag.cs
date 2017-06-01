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
        public int oppdragID { get; set; }
        public DateTime regDato { get; set; }
        public int fraspraak { get; set; }
        public int tilspraak { get; set; }
        public string andreopplysninger { get; set; }
        public bool sendt { get; set; }

        public virtual Kunde kunde { get; set; }
        public virtual Tolk Tolk { get; set; }
    }
    
    // [Table("Fremmaate")]
    public class Tolking : Oppdrag
    {
        public string typetolk { get; set; }
        public string oppmoteadresse { get; set; }
        public DateTime fratidspunkt { get; set; }
        public DateTime tiltidspunkt { get; set; }
        public virtual Poststed poststed { get; set; }
    }

    // [Table("Oversettelse")]
    public class Oversettelse : Oppdrag
    {

        public string ferdiggjoresdato { get; set; }

        public virtual List<Fil> fil { get; set; }
    }

    public class Foresporsler
    {
        [Key]
        //[DatabaseGeneratedAttribute(DatabaseGeneratedOption.None)]
        public int foresporselID { get; set; }

        public int oppdragID { get; set; }
        public DateTime regDato { get; set; }
        public int fraspraak { get; set; }
        public int tilspraak { get; set; }
        public string andreopplysninger { get; set; }

        public string typetolk { get; set; }
        public string oppmoteadresse { get; set; }
        public DateTime fratidspunkt { get; set; }
        public DateTime tiltidspunkt { get; set; }
        public virtual Poststed poststed { get; set; }

        public virtual List<Tolk> Tolk { get; set; }

    }
}