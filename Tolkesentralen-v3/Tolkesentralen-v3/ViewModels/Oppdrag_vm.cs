using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.ViewModels
{
    public class Oppdrag_vm
    {
        public int kundeID { get; set; }
        public string typetolk { get; set; }   
        public string fraspraak { get; set; }
        public string tilspraak { get; set; }
        public string andreopplisninger { get; set; }
    }

    public class Fremmaate_vm : Oppdrag_vm
    {


        public string oppdragsAddres { get; set; }
        public DateTime oppdragsdato { get; set; }

        public DateTime frakl { get; set; }

        public DateTime tilkl { get; set; }
       
    }

    public class Telefontolk_vm : Oppdrag_vm
    {

        public DateTime oppdragsDato { get; set; }

        public DateTime tidFra { get; set; }

        public DateTime tidTil { get; set; }
       
    }

    // Klassen arver Person fordi ved anonym (ikke-registrert) forespørsel må info om kunden fylles ut
    public class Oppdrag_anonym_vm : Person_vm
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