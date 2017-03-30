using System;

namespace Tolkesentralen_v3.Models
{
    public class Fremmaate:Oppdrag
    {
        public int fremmaateNr { get; set; }
        public String oppdragsAddres { get; set; }
        public DateTime dato { get; set; }
        public DateTime tidFra { get; set; }
        public DateTime tidTil { get; set; }
    }
}