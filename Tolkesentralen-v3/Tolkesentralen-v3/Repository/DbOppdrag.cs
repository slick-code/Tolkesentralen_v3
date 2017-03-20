using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Models
{
    public class DbOppdrag
    {
       private DbNetcont db;

        //constractor
        public DbOppdrag()
        {
            db = new DbNetcont();
        }


        
        //Registrerer Fremmøte_Tolk
        public bool regOppdrag_Fremmaate(Fremmaate_vm nyOppdrag, int kundeId)
        {

            Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == kundeId);
            if (nyOppdrag != null)
            {
                var oppdragDb = new Fremmaate()
                {

                    oppdragType = nyOppdrag.typetolk,
                    spraakFra = nyOppdrag.fraspraak,
                    spraakTil = nyOppdrag.tilspraak,
                    oppdragsAddres = nyOppdrag.oppdragsAddres,
                    oppdragsDato = nyOppdrag.oppdragsdato,
                    tidFra = nyOppdrag.frakl,
                    tidTil = nyOppdrag.tilkl,
                    AndreOpplisning = nyOppdrag.andreopplisninger,  

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

        public List<Oppdrag> listOppdrag()
        {

            return db.Oppdrag.ToList();

        }




    }
}