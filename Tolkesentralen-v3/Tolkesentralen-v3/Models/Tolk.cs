﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.Models
{
    public class Tolk : Person
    {
        
        public List<Spraak> spraak { get; set; }

        public List<Oppdrag> oppdrag { get; set; }


    }
}