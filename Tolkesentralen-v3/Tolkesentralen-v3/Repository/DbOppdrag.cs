using System;
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
      

        public bool regOppdrag_Fremmaate(Fremmaate_vm input)
=======
        public bool regTolkOppdrag(Tolking_vm nyOppdrag, int kundeId)
>>>>>>> 387bfbba9463ee0dabdfcae3efd7a43ddf9200a3
        {

            Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == kundeId);
            if (Bestiller != null)
            {
                var oppdragDb = new Tolking()
                {
<<<<<<< HEAD
                    oppdragType = input.typetolk,
                    spraakFra = input.fraspraak,
                    spraakTil = input.tilspraak,
                    oppdragsAddress = input.sted,
                    regDato = input.oppdragsdato,
                    tidFra = input.frakl,
                    tidTil = input.tilkl,
                    andreOpplisning = input.andreopplysninger,
=======
>>>>>>> 387bfbba9463ee0dabdfcae3efd7a43ddf9200a3

                    oppdragType = nyOppdrag.typetolk,
                    spraakFra = nyOppdrag.fraspraak,
                    spraakTil = nyOppdrag.tilspraak,
                    oppdragsAddres = nyOppdrag.sted,
                    regDato = DateTime.Now,
                    oppdragsDato = nyOppdrag.oppdragsdato,
                    tidFra = nyOppdrag.frakl,
                    tidTil = nyOppdrag.tilkl,
                    andreOpplisning = nyOppdrag.andreopplysninger,
                    
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
        

        public bool regOppdragO(Oversettelse_vm oppdragOV, int kundeID)
        {
            Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == kundeID);

            if (oppdragOV != null)
            {
                var oppdragOverset = new Oversettelse()
                {
                  

                    fil = oppdragOV.fil,

                };
                if (Bestiller != null)
                {
                    Bestiller.oppdrag.Add(oppdragOverset);

                }
                else
                {
                    return false;
                }

                db.Oppdrag.Add(oppdragOverset);
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
<<<<<<< HEAD
        //liste alle Framåter til kunder
        public List<Fremmaate_vm> listOppdrag_fremmate()
=======

        public List<Tolking_vm> listOppdrag_fremmate()
>>>>>>> 387bfbba9463ee0dabdfcae3efd7a43ddf9200a3
        {
            // return db.Oppdrag.ToList();
            List<Tolking> alleFramaate = db.Oppdrag.OfType<Tolking>().ToList();
            try
            {

                List<Tolking_vm> vm_listeframmate = new List<Tolking_vm>();
                foreach (var rowf in alleFramaate)
                {
<<<<<<< HEAD
                    
                  
                    var framaater = new Fremmaate_vm()
=======

                    var framaater = new Tolking_vm()
>>>>>>> 387bfbba9463ee0dabdfcae3efd7a43ddf9200a3
                    {
                        kundeID = rowf.kunde.persId,
                        oppdragID = rowf.oppdragsID,
                        typetolk = rowf.oppdragType,
                        fraspraak = rowf.spraakFra,
                        tilspraak = rowf.spraakTil,
                        sted = rowf.oppdragsAddress,
                        oppdragsdato = rowf.regDato,
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



        //Lister fremåte som tilhører en kunde 
        //public List<Fremmaate_vm> listOppdragMedKundeId(int kundeId)
        //{
        //    // return db.Oppdrag.ToList();
        //    List<Oppdrag> alleFramaate = db.Oppdrag.ToList();
        //   // var lb = alleFramaate.OfType<Oppdrag>().FirstOrDefault(Opd => Opd.kunde.persId == kundeId);
        //    try
        //    {

        //        List<Oppdrag_VM> utListe = new List<Oppdrag_VM>();

        //        foreach (var rowf in alleFramaate)
        //        {

        //            if(rowf.kunde.persId == kundeId)
        //            {


        //                var framaater = new Fremmaate_vm()
        //                {
        //                    kundeID = rowf.kunde.persId,
        //                    id = rowf.oppdragsID,
        //                    typetolk = rowf.oppdragType,
        //                    fraspraak = rowf.spraakFra,
        //                    tilspraak = rowf.spraakTil,
        //                    sted = rowf.
        //                    oppdragsdato = rowf.oppdragsDato,
        //                    frakl = rowf.tidFra,
        //                    tilkl = rowf.tidTil,

        //                    andreopplysninger = rowf.AndreOpplisning,


        //                };
        //                utListe.Add(framaater);


        //            }

                    
        //        }

        //        return utListe;
        //    }
        //    catch (Exception feil)
        //    {
        //        Debug.WriteLine("Exception Message: " + feil.Message);
        //        return null;
        //    }

        //}


    }
}