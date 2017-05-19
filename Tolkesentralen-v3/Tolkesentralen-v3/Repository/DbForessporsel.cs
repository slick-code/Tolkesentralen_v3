using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Tolkesentralen_v3.Models;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Repository
{
    public class DbForessporsel
    {

        private DbNetcont db;
        
        public DbForessporsel()
        {
            db = new DbNetcont();

        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>
        /// /*****************Registerer en foresporsel på en tolk av typen Tolking eller flere
        /// tolk****************.
        /// </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="tolkId">	 	Identifier for the tolk. </param>
        /// <param name="opprdragId">	Identifier for the opprdrag. </param>
        ///
        /// <returns>	True if it succeeds, false if it fails. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public bool regEnForesporselPåEnEllerFlereTolk(int[] tolkId, int opprdragId)
        {


			try
			{
				Tolking oppdrag = db.Oppdrag.OfType<Tolking>().FirstOrDefault(T => T.oppdragID == opprdragId);
				if (oppdrag != null)
				{
					//oppretter forespørler
					var foresp = new Foresporsler()
					{
						regDato = oppdrag.regDato,
						oppdragID = oppdrag.oppdragID,
						typetolk = oppdrag.typetolk,
						fraspraak = oppdrag.fraspraak,
						tilspraak = oppdrag.tilspraak,
						oppmoteadresse = oppdrag.oppmoteadresse,
						fratidspunkt = oppdrag.fratidspunkt,
						tiltidspunkt = oppdrag.tiltidspunkt,
						andreopplysninger = oppdrag.andreopplysninger
					};

					foreach (int tolk_ID in tolkId)
					{
						//finner alle TOLK som oppdraget skal sendes til
						var tolk = db.Personer.OfType<Tolk>().FirstOrDefault(T => T.persId == tolk_ID);

						if (tolk != null)
						{

							tolk.foresporsler.Add(foresp);
							oppdrag.sendt = true;

							db.SaveChanges();


						}
						else
						{

							return false;
						}


					}

					return true;


				}


				return false;


			} catch (Exception feil) {
				Debug.WriteLine("Exception Message: " + feil.Message);
				return false;

			}
		}

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	List tolk foresporsler. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <returns>	A List&lt;Tolking_vm&gt; </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public List<Tolking_vm> listTolkForesporsler()
        {


            var foresp = db.foresporelse.ToList();
            try
            {

                List<Tolking_vm> utListe = new List<Tolking_vm>();

                foreach (var row in foresp)
                {

                    var Tolking_vm = new Tolking_vm()
                    {
                        oppdragID = row.oppdragID,
                        typetolk = row.typetolk,
                        fraspraak = row.fraspraak,
                        tilspraak = row.tilspraak,
                        oppmoteadresse = row.oppmoteadresse,
                        fratidspunkt = row.fratidspunkt,
                        tiltidspunkt = row.tiltidspunkt,
                        andreopplysninger = row.andreopplysninger
                    };

                    utListe.Add(Tolking_vm);


                }


                return utListe;
            }
            catch (Exception feil)
            {
                Debug.WriteLine("Exception Message: " + feil.Message);
                return null;
            }

        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	List tolk foresporsler median identifier. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="tolkId">	Identifier for the tolk. </param>
        ///
        /// <returns>	A List&lt;Tolking_vm&gt; </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public List<Tolking_vm> listTolkForesporslerMedID(int tolkId)
        {


            Tolk tolk = db.Personer.OfType<Tolk>().FirstOrDefault(T => T.persId == tolkId);
            List<Tolking_vm> utListe = new List<Tolking_vm>();
            try
            {

                if (tolk != null)
                {
                    
                    foreach (var row in tolk.foresporsler)
                    {
                       
                        var Tolking_vm = new Tolking_vm()
                        {
                            oppdragID = row.oppdragID,
                            typetolk = row.typetolk,
                            fraspraak = row.fraspraak,
                            tilspraak = row.tilspraak,
                            oppmoteadresse = row.oppmoteadresse,
                            fratidspunkt = row.fratidspunkt,
                            tiltidspunkt = row.tiltidspunkt,
                            andreopplysninger = row.andreopplysninger
                        };

                        utListe.Add(Tolking_vm);

                    }

                }
                return utListe;

            }
            catch (Exception feil)
            {
                Debug.WriteLine("Exception Message: " + feil.Message);
                return null;
            }

        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	List alle tolk median foresporsel identifier. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="forespID">	Identifier for the foresp. </param>
        ///
        /// <returns>	A List&lt;Person_VM&gt; </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public List<Person_VM> listAlleTolkMedForesporselID(int forespID)
        {

            var  utListe = new List<Person_VM>();

            var foresp = db.foresporelse.Find(forespID);

            try
            {

                if(foresp != null)
                {
                    foreach (var row in foresp.Tolk)
                    {

                        //var tolk = db.Personer.OfType<Tolk>().FirstOrDefault(T => T.persId == rowf.persId);
                        if (row != null)
                        {
                            var tolkvm = new Person_VM()
                            {
                                persId = row.persId,
                                fornavn = row.fornavn,
                                etternavn = row.etternavn,
                                telefon = row.telefon,
                                postnr = row.poststed.postNr,
                                poststed = row.poststed.postSted,
                                epost = row.email,
                                adresse = row.adresse,
                                godkjent = row.godkjent
                            };
                            utListe.Add(tolkvm);
                        }

                    } 

                }


                return utListe;
            }
            catch (Exception feil)
            {
                Debug.WriteLine("Exception Message: " + feil.Message);
                return null;
            }

        }
        


    }
}