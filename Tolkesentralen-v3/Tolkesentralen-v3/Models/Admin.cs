using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.Models
{
    public class Admin:Person
    {
        
        public string adminNr { get; set; }
       // public int postNr { get; set; }
    }
}