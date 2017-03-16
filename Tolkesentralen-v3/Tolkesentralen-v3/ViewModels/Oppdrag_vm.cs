using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.ViewModels
{
    public class Oppdrag_vm
    {
        public int id { get; set; }
        public string dato { get; set; }
        public string sted { get; set; }
        public string tid { get; set; }
        public string type { get; set; }
        public string fraspraak { get; set; }
        public string tilspraak { get; set; }
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