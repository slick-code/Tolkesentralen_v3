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
        public int telefax { get; set; }
        public string epost { get; set; }
        public string passord { get; set; }
        public string fakturaadresse { get; set; }
    }

    public class Post_Login_VM{
        public string passord { get; set; }
        public string brukernavn { get; set; }
    }

    public class Get_Login_VM
    {
        public int id { get; set; }
        public string rolle { get; set; }
        public string brukernavn { get; set; }
    }


}