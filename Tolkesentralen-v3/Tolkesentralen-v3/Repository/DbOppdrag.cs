﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Diagnostics;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Models
{
    public class DbOppdrag
    {
         private DbNetcont db; 

        public DbOppdrag()
        {
             db = new DbNetcont();
             
        }

<<<<<<< HEAD
        public bool regOppdrag_Fremmaate(Tolking_vm nyOppdrag, int kundeId)
=======
        public bool regOppdrag_Fremmaate(Fremmaate_vm input)
>>>>>>> e81aaa2886ed4329a3434e79604bcde5eff2dad2
        {

            Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == input.id);
            if (input != null)
            {
                var oppdragDb = new Tolking()
                {
<<<<<<< HEAD

                    oppdragType = nyOppdrag.typetolk,
                    spraakFra = nyOppdrag.fraspraak,
                    spraakTil = nyOppdrag.tilspraak,
                    oppdragsAddres = nyOppdrag.sted,
                    regDato = DateTime.Now,
                    oppdragsDato = nyOppdrag.oppdragsdato,
                    tidFra = nyOppdrag.frakl,
                    tidTil = nyOppdrag.tilkl,
                    andreOpplisning = nyOppdrag.andreopplysninger,
                    
=======
                    oppdragType = input.typetolk,
                    spraakFra = input.fraspraak,
                    spraakTil = input.tilspraak,
                    oppdragsAddres = input.sted,
                    oppdragsDato = input.oppdragsdato,
                    tidFra = input.frakl,
                    tidTil = input.tilkl,
                    AndreOpplisning = input.andreopplysninger,
>>>>>>> e81aaa2886ed4329a3434e79604bcde5eff2dad2

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
        //public bool regOppdragF(Oppdrag_VM input, int kundeId)
        //{
        //    var kunde = new Fremmaate()
        //    {

        //    };
        //    Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == kundeId);
        //    if (oppdrag != null)
        //    {

        //        if (Bestiller != null)
        //        {
        //            Bestiller.oppdrag.Add(oppdrag);
        //        }
        //        else
        //        {
        //            return false;
        //        }
        //        db.Oppdrag.Add(input);
        //        db.SaveChanges();

        //        return true;
        //    }

        //    return false;
        //}

        public bool regOppdragO(Oversettelse oppdrag, int kundeID)
        {
            Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == kundeID);

            if (oppdrag != null)
            {
                if (Bestiller != null)
                {
                    Bestiller.oppdrag.Add(oppdrag);

                }
                else
                {
                    return false;
                }

                db.Oppdrag.Add(oppdrag);
                db.SaveChanges();

                return true;
            }


            return false;
        }


        public bool slettOppdrag(int oppdragsID)
        {
            var oppdrag = db.Oppdrag.Find(oppdragsID);

            if (oppdrag != null)
            {

                db.Oppdrag.Remove(oppdrag);
                db.SaveChanges();

                return true;
            }

            return false;
        }

        public bool endreOppdrag(Oppdrag oppdrag)
        {


            if (oppdrag != null)
            {
                db.Entry(oppdrag).State = EntityState.Modified;
                db.SaveChanges();

                return true;
            }

            return false;
        }


        public Oppdrag finnOppdrag(int? oppdragsID)
        {
            var oppdrag = db.Oppdrag.Find(oppdragsID);

            if (oppdrag != null)
            {

                return oppdrag;
            }

            return null;
        }

        public List<Tolking_vm> listOppdrag_fremmate()
        {
            // return db.Oppdrag.ToList();
            List<Tolking> alleFramaate = db.Oppdrag.OfType<Tolking>().ToList();
            try
            {

                List<Tolking_vm> vm_listeframmate = new List<Tolking_vm>();
                foreach (var rowf in alleFramaate)
                {

                    var framaater = new Tolking_vm()
                    {
                        kundeID = rowf.kunde.persId,
                        id = rowf.oppdragsID,
                        typetolk = rowf.oppdragType,
                        fraspraak = rowf.spraakFra,
                        tilspraak = rowf.spraakTil,
                        sted = rowf.oppdragsAddres,
                        oppdragsdato = rowf.oppdragsDato,
                        frakl = rowf.tidFra,
                        tilkl = rowf.tidTil,

                        andreopplysninger = rowf.andreOpplisning,


                    };
                    vm_listeframmate.Add(framaater);
                }

                return vm_listeframmate;
            }
            catch (Exception feil)
            {
                Debug.WriteLine("Exception Message: " + feil.Message);
                return null;
            }

        }




    }
}