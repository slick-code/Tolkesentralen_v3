using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Repository
{
    public class OppdragRepository
    {
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
                            oppdragID = row.oppdragsID,
                            typetolk = row.oppdragType,
                            fraspraak = row.spraakFra,
                            tilspraak = row.spraakTil,
                            sted = row.oppdragsAddres,
                            oppdragsdato = row.oppdragsDato,
                            frakl = row.tidFra,
                            tilkl = row.tidTil,
                            andreopplysninger = row.andreOpplisning
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
                            oppdragID = row.oppdragsID,
                            typetolk = row.oppdragType,
                            fraspraak = row.spraakFra,
                            tilspraak = row.spraakTil,
                            sted = row.oppdragsAddres,
                            oppdragsdato = row.oppdragsDato,
                            frakl = row.tidFra,
                            tilkl = row.tidTil,
                            andreopplysninger = row.andreOpplisning
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
    }
}