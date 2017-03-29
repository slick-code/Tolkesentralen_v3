using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Tolkesentralen_v3.Models
{
    public class Spraak
    {
        public int spraakId { get; set; }
        public string navn { get; set; }
        //public string nivaa { get; set; }

        public List<Tolk> tolker { get; set; }

       
    }
}