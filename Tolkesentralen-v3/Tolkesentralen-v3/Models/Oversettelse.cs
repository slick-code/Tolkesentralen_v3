using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.Models
{
    public class Oversettelse:Oppdrag
    {
       
        public String frist { get; set; }
        public List<Fil> fil{ get; set; }
   



    }
}