using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Repository
{
    public class DbOversettelse
    {
        private DbNetcont db;

        public DbOversettelse()
        {
            db = new DbNetcont();
        }

        public bool LagreOppdragAvTypeOversettelse(Oversettelse_VM input)
        {
            Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == input.kundeID);
            if (Bestiller != null)
            {
                var oppdragDb = new Oversettelse()
                {
                    spraakFra = input.fraspraak,
                    spraakTil = input.tilspraak,
                    regDato = DateTime.Now,
                    //typedokument = input.typedokument,
                    andreOpplisning = input.andreopplysninger,

                };

                if (Bestiller != null)
                {
                    Bestiller.oppdrag.Add(oppdragDb);
                }
                else
                {
                    return false;
                }
                db.Oppdrag.Add(oppdragDb);
                db.SaveChanges();

                return true;
            }
            return false;
        }
    }
}