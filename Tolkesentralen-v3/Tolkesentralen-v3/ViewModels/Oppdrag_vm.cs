using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.ViewModels
{
    
    public class Oppdrag_VM
    {
        public int kundeID { get; set; }
        public int oppdragID { get; set; }
        public string dato { get; set; }
        public int fraspraak { get; set; }
        public int tilspraak { get; set; }
        public string andreopplysninger { get; set; }
    }

    public class Tolking_vm : Oppdrag_VM
    {
        public string typetolk { get; set; }
        public string oppmoteadresse { get; set; }
        public int oppmotepostnr { get; set; }
        public string oppmotepoststed { get; set; }
        public DateTime fratidspunkt { get; set; }
        public DateTime tiltidspunkt { get; set; }
        public string oppdragsdato { get; set; }
        public string frakl { get; set; }
        public string tilkl { get; set; }

    }

    public class OppdragOgKunde : Kunde_VM
    {
        public int oppdragID { get; set; }
        public string dato { get; set; }
        public int fraspraak { get; set; }
        public int tilspraak { get; set; }
        public string andreopplysninger { get; set; }
        public string typetolk { get; set; }
        public string oppmoteadresse { get; set; }
        public string oppmotepoststed { get; set; }
        public int oppmotepostnr { get; set; }
        public string oppdragsdato { get; set; }
        public DateTime fratidspunkt { get; set; }
        public DateTime tiltidspunkt { get; set; }
        public string frakl { get; set; }
        public string tilkl { get; set; }
    }

    public class OversettelseOgKunde : Kunde_VM
    {
        public int oppdragID { get; set; }
        public string dato { get; set; }
        public int fraspraak { get; set; }
        public int tilspraak { get; set; }
        public string andreopplysninger { get; set; }
        public string ferdiggjoresdato { get; set; }
        public DateTime ferdiggjoresDateTime { get; set; }
    }

    public class TolkingSendt_vm : Tolking_vm
    {
        public Tolk[] tolker { get; set; }
    }

    public class Oversettelse_VM : Oppdrag_VM
    {
        public virtual List<Fil> Filer { get; set; }
        public string ferdiggjoresdato { get; set; }
    }

    // Klassen arver Person fordi ved anonym (ikke-registrert) forespørsel må info om kunden fylles ut
    public class Oppdrag_Anonym_VM : Person_VM
    {
        public int id { get; set; }
        public string dato { get; set; }
        public string sted { get; set; }
        public string tid { get; set; }
        public string type { get; set; }
        public int fraspraak { get; set; }
        public int tilspraak { get; set; }
    }

    public class Utdel
    {
        public int[] tolkArrey { get; set; }
        public int oppdragId { get; set; }
    }

    public class Svar
    {
        public int tolkID { get; set; }
        public int oppdragId { get; set; }
        public int svar { get; set; }
    }





}