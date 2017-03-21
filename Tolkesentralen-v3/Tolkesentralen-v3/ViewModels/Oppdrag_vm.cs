using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.ViewModels
{
    public class Oppdrag_VM
    {

        public int kundeID { get; set; }
        public string typetolk { get; set; }

        public int id { get; set; }
        public string dato { get; set; }
        //public string sted { get; set; } // <-- Adresse - Postnr - Poststed
        public string tid { get; set; }
        public string type { get; set; }

        public string fraspraak { get; set; }
        public string tilspraak { get; set; }
        public string andreopplysninger { get; set; }
    }

    public class Fremmaate_vm : Oppdrag_VM
    {


        public string sted { get; set; }
        public DateTime oppdragsdato { get; set; }

        public DateTime frakl { get; set; }

        public DateTime tilkl { get; set; }

    }

    public class Telefontolk_vm : Oppdrag_VM
    {

        public DateTime oppdragsDato { get; set; }

        public DateTime tidFra { get; set; }

        public DateTime tidTil { get; set; }

    }

    // Klassen arver Person fordi ved anonym (ikke-registrert) forespørsel må info om kunden fylles ut
    public class Oppdrag_Anonym_VM : Person_VM
    {
        public int id { get; set; }
        public string dato { get; set; }
        public string sted { get; set; }
        public string tid { get; set; }
        public string type { get; set; }
        public string fraspraak { get; set; }
        public string tilspraak { get; set; }
    }






}