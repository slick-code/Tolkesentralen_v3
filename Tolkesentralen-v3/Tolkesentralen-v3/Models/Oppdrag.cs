﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Tolkesentralen_v3.Models
{
    public abstract class Oppdrag
    {
        [Key]
        public int oppdragsID { get; set; }
        public  String oppdragType{ get; set; }

        public String oppdragsgiver { get; set; }

        public String språkFra { get; set; }

        public String språkTil { get; set; }

        public virtual Kunde kunde { get; set; }
      

        public virtual Tolk Tolk { get; set; }
    }
}