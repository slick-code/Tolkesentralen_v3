using System;
using System.Collections.Generic;
using System.Diagnostics;
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

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Lagre oppdrag av type oversettelse. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="input">	The input. </param>
        ///
        /// <returns>	True if it succeeds, false if it fails. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public bool LagreOppdragAvTypeOversettelse(Oversettelse_VM input)
        {
			try
			{
				Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == input.kundeID);
				if (Bestiller != null)
				{
					var oppdragDb = new Oversettelse()
					{
						fraspraak = input.fraspraak,
						tilspraak = input.tilspraak,
						regDato = DateTime.Now,
						//typedokument = input.typedokument,
						andreopplysninger = input.andreopplysninger,

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
			catch (Exception feil) {
				Debug.WriteLine("Exception Message: " + feil.Message);
				return false;
			}
        }
    }
}