using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.ViewModels
{

    public class Person_vm
    {
        public int persId { get; set; }

        public string fornavn { get; set; }
        public string etternavn { get; set; }
        public int tlf { get; set; }
        public string email { get; set; }
        public string password { get; set; }

        public string adresse { get; set; }
        public int postnr { get; set; }

        public string poststed { get; set; }

        public int godkjent { get; set; }
    }

    

    public class Kunde_vm : Person_vm {
        public string firma { get; set; }
        public string kontaktperson { get; set; }
<<<<<<< HEAD
       // public int telefon { get; set; }
=======
>>>>>>> e60c4a73eae9b513c0a006593804f1971b1b7eaa
        public int telefax { get; set; }
       // public string epost { get; set; }
        public string passord { get; set; }
        public string fakturaadresse { get; set; }
    }


}