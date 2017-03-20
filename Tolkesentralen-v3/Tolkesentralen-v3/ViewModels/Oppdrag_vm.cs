using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.ViewModels
{
    public class Oppdrag_VM
    {
        public int id { get; set; }
        public string dato { get; set; }
        public string sted { get; set; } // <-- Adresse - Postnr - Poststed
        public string tid { get; set; }
        public string type { get; set; }
        public string fraspraak { get; set; }
        public string tilspraak { get; set; }
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