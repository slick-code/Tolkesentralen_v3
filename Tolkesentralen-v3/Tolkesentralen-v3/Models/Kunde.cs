﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.Models
{
    public class Kunde :Person
    {


        public string firma { get; set; }
        public string kontaktperson { get; set; }
        public int telefax { get; set; }
        public string fakturaAddress { get; set; }

        public virtual List <Oppdrag> oppdrag { get; set; }

    }
}