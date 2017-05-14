using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.ViewModels
{

    public class Person_VM
    {
        public int persId { get; set; }
        public string fornavn { get; set; }
        public string etternavn { get; set; }
        public int telefon { get; set; }
        public string epost { get; set; }
        public string passord { get; set; }
        public string adresse { get; set; }
        public int postnr { get; set; }
        public string poststed { get; set; }
        public int godkjent { get; set; }
    }

    public class Kunde_VM : Person_VM {
        public string firma { get; set; }
        public int telefax { get; set; }
        public string fakturaadresse { get; set; }
    }

    public class Post_Login_VM{
        public string passord { get; set; }
        public string brukernavn { get; set; }
    }

    public class Spraak
    {
        public int id { get; set; }
        public string spraak { get; set; }
    }

    public class Get_Login_VM
    {
        public int id { get; set; }
        public string rolle { get; set; }
        public string brukernavn { get; set; }
    }

    public class SpraakID
    {
        public int fraspraak { get; set; }
        public int tilspraak { get; set; }
    }

    public class Tolk_VM: Person_VM
    {

    }

    public class Utilgjengelig_ViewModel
    {
        public int id { get; set; }
        public int persId { get; set; }
        public string fraDato { get; set; }
        public string tilDato { get; set; }
    }


}