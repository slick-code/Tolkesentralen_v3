using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.ViewModels
{
    public class FKunde
    {
        public int persId { get; set; }

        public string fornavn { get; set; }
        public string etternavn { get; set; }
        public int tlf { get; set; }
        public string email { get; set; }
        public string adresse { get; set; }
        public int postNr { get; set; }

        public string postSted { get; set; }


        public string password { get; set; }
        public string firma { get;  set; }
        public string kontaktperson { get; set; }
        public int telefax { get;  set; }
        public string fakturaAddress { get; set; }
        
    }
}