﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Repository
{
    public class OppdragRepository
    {
        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Gets the count. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <returns>	The count. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public Counter getCount()
        {
            try
            {
                var db = new DbNetcont();
                var counter = new Counter()
                {
                    nyeoppdrag = db.Oppdrag.OfType<Tolking>().Count(),
                    nyekunder = db.Personer.Where(r => r is Kunde && r.godkjent == 0).Count(),
                    oppdrag = db.Oppdrag.OfType<Tolking>().Where(r => r.Tolk != null).Count()
                };

                return counter;
            }
            catch (Exception e)
            {
                var breakpoint = e;
                return null;
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Hent alle ubehandlede oppdrag. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <returns>	A List&lt;Tolking_vm&gt; </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public List<Tolking_vm> hentAlleUbehandledeOppdrag()
        {
            try
            {
                var db = new DbNetcont();
                List<Tolking_vm> vmListe = new List<Tolking_vm>();
                List<Tolking> dbListe = db.Oppdrag.OfType<Tolking>().ToList();
                foreach (var row in dbListe)
                {
                    if (row.Tolk == null) {
                        var oppdrag = new Tolking_vm()
                        {
                            kundeID = row.kunde.persId,
                            oppdragID = row.oppdragID,
                            typetolk = row.typetolk,
                            fraspraak = row.fraspraak,
                            tilspraak = row.tilspraak,
                            oppmoteadresse = row.oppmoteadresse,
                            fratidspunkt = row.fratidspunkt,
                            tiltidspunkt = row.tiltidspunkt,
                            andreopplysninger = row.andreopplysninger
                        };
                        vmListe.Add(oppdrag);
                    }
                }
                return vmListe;
            }
            catch (Exception e)
            {
                var breakpoint = e;
                return null;
            }

        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Hent alle behandlede oppdrag. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <returns>	A List&lt;Tolking_vm&gt; </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public List<Tolking_vm> hentAlleBehandledeOppdrag()
        {
            try
            {
                var db = new DbNetcont();
                List<Tolking_vm> vmListe = new List<Tolking_vm>();
                List<Tolking> dbListe = db.Oppdrag.OfType<Tolking>().ToList();
                foreach (var row in dbListe)
                {
                    if (row.Tolk == null)
                    {
                        var oppdrag = new Tolking_vm()
                        {
                            kundeID = row.kunde.persId,
                            oppdragID = row.oppdragID,
                            typetolk = row.typetolk,
                            fraspraak = row.fraspraak,
                            tilspraak = row.tilspraak,
                            oppmoteadresse = row.oppmoteadresse,
                            fratidspunkt = row.fratidspunkt,
                            tiltidspunkt = row.tiltidspunkt,
                            andreopplysninger = row.andreopplysninger
                        };
                        vmListe.Add(oppdrag);
                    }
                }
                return vmListe;
            }
            catch (Exception e)
            {
                var breakpoint = e;
                return null;
            }

        }

        //DateTime tidFra = DateTime.ParseExact(nyOppdrag.oppdragsdato + " " + nyOppdrag.frakl, "yyyy-MM-dd HH:mm",
        //                           System.Globalization.CultureInfo.InvariantCulture);
        //DateTime tidTil = DateTime.ParseExact(nyOppdrag.oppdragsdato + " " + nyOppdrag.tilkl, "yyyy-MM-dd HH:mm",
        //                       System.Globalization.CultureInfo.InvariantCulture);
    }
}