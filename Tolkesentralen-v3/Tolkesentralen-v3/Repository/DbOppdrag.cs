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

		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	Konverter til date time. </summary>
		///
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <param name="dato">	The dato. </param>
		/// <param name="kl">  	The kl. </param>
		///
		/// <returns>	A DateTime. </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public DateTime KonverterTilDateTime(string dato, string kl)
		{
			return DateTime.ParseExact(dato + " " + kl, "yyyy-MM-dd HH:mm",
									   System.Globalization.CultureInfo.InvariantCulture);
		}

		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	Registers the tolk oppdrag. </summary>
		///
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <param name="input">  	The input. </param>
		/// <param name="kundeId">	Identifier for the kunde. </param>
		///
		/// <returns>	True if it succeeds, false if it fails. </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public bool regTolkOppdrag(Tolking_vm input, int kundeId)
		{
			try
			{

                Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == kundeId);
				if (Bestiller != null)
				{
					var oppdragDb = new Tolking()
					{
						regDato = DateTime.Now,
						typetolk = input.typetolk,
						fraspraak = input.fraspraak,
						tilspraak = input.tilspraak,
						oppmoteadresse = input.oppmoteadresse,
						fratidspunkt = KonverterTilDateTime(input.oppdragsdato, input.frakl),
						tiltidspunkt = KonverterTilDateTime(input.oppdragsdato, input.tilkl),
						andreopplysninger = input.andreopplysninger
					};

                    Poststed eksistererPoststed = db.Poststeder.Find(input.oppmotepostnr);

                    if (eksistererPoststed == null)
                    {
                        var nyttpoststed = new Poststed()
                        {
                            postNr = input.oppmotepostnr,
                            postSted = input.oppmotepoststed

                        };
                        // db.Poststeder.Add(nyttpoststed);
                        oppdragDb.poststed = nyttpoststed;

                    }
                    else
                    {
                        oppdragDb.poststed = eksistererPoststed;
                    }

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


				}
				return true;
			}
			catch (Exception feil)
			{
				Debug.WriteLine("Exception Message: " + feil.Message);
				return false;
			}


		}

		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	Registers the oppdrag overssettelse. </summary>
		///
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <param name="input">  	The input. </param>
		/// <param name="kundeId">	Identifier for the kunde. </param>
		///
		/// <returns>	True if it succeeds, false if it fails. </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public bool regOppdragOverssettelse(Oversettelse_VM input, int kundeId)
		{
			try
			{
				Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == kundeId);
				if (Bestiller != null)
				{
					var oppdragDb = new Oversettelse()
					{
						fraspraak = input.fraspraak,
						tilspraak = input.tilspraak,
						regDato = DateTime.Now,
						ferdiggjoresdato = input.ferdiggjoresdato,
						andreopplysninger = input.andreopplysninger
					};

					foreach (var f in input.Filer)
					{
						var nyFil = new Fil()
						{
							filNavn = f.filNavn,
							ContentType = f.ContentType,
							Content = f.Content

						};

						oppdragDb.fil.Add(nyFil);
					}

					Bestiller.oppdrag.Add(oppdragDb);
					db.Oppdrag.Add(oppdragDb);
					db.SaveChanges();

					return true;
				}

				return false;
			}
			catch (Exception feil)
			{

				Debug.WriteLine("Exception Message: " + feil.Message);
				return false;
			}
		}

		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	Slett oppdrag. </summary>
		///
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <param name="oppdragsID">	Identifier for the oppdrags. </param>
		///
		/// <returns>	True if it succeeds, false if it fails. </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public bool slettOppdrag(int oppdragsID)
		{
			try
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
			catch (Exception feil) {
				Debug.WriteLine("Exception Message: " + feil.Message);
				return false;
			}
		}

		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	Endre oppdrag. </summary>
		///
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <param name="oppdrag">	The oppdrag. </param>
		///
		/// <returns>	True if it succeeds, false if it fails. </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

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

		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	Finn oppdrag. </summary>
		///
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <param name="oppdragsID">	Identifier for the oppdrags. </param>
		///
		/// <returns>	An Oppdrag. </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public Oppdrag finnOppdrag(int? oppdragsID)
		{
			try
			{
				var oppdrag = db.Oppdrag.Find(oppdragsID);

				if (oppdrag != null)
				{

					return oppdrag;
				}

				return null;
			} catch (Exception feil) {

				Debug.WriteLine("Exception Message: " + feil.Message);
				return null;
			}
		}

		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	List oppdrag fremmate. </summary>
		///
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <returns>	A List&lt;Tolking_vm&gt; </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public List<Tolking_vm> listOppdrag_fremmate()
		{
			
			try
			{
				// return db.Oppdrag.ToList();
				List<Tolking> alleFramaate = db.Oppdrag.OfType<Tolking>().ToList();

				List<Tolking_vm> vm_listeframmate = new List<Tolking_vm>();
				foreach (var row in alleFramaate)
				{

					var framaater = new Tolking_vm()
					{
						kundeID = row.kunde.persId,
						dato = row.regDato.ToString("dd-MM-yyyy"),
						oppdragID = row.oppdragID,
						typetolk = row.typetolk,
						fraspraak = row.fraspraak,
						tilspraak = row.tilspraak,
						oppmoteadresse = row.oppmoteadresse,
						fratidspunkt = row.fratidspunkt,
						tiltidspunkt = row.tiltidspunkt,
						andreopplysninger = row.andreopplysninger,
                        oppmotepostnr = row.poststed.postNr,
                        oppmotepoststed = row.poststed.postSted
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

		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	List oppdrag tolk ubehandlett. </summary>
		///
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <returns>	A List&lt;OppdragOgKunde&gt; </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public List<OppdragOgKunde> listOppdragTolkUbehandlett()
		{
			
			try
			{
				// return db.Oppdrag.ToList();
				List<Tolking> alleFramaate = db.Oppdrag.OfType<Tolking>().Where(O => O.sendt == false).ToList();

				var liste = new List<OppdragOgKunde>();
				foreach (var row in alleFramaate)
				{
					var ny = new OppdragOgKunde()
					{
						dato = row.regDato.ToString("dd-MM-yyyy, HH:mm"),
						oppdragID = row.oppdragID,
						typetolk = row.typetolk,
						fraspraak = row.fraspraak,
						tilspraak = row.tilspraak,
						oppmoteadresse = row.oppmoteadresse,
                        oppmotepostnr = row.poststed.postNr,
                        oppmotepoststed = row.poststed.postSted,
                        fratidspunkt = row.fratidspunkt,
						tiltidspunkt = row.tiltidspunkt,
						andreopplysninger = row.andreopplysninger,

						persId = row.kunde.persId,
						firma = row.kunde.firma,
						fornavn = row.kunde.fornavn,
						etternavn = row.kunde.etternavn,
						telefon = row.kunde.telefax,
						epost = row.kunde.email,
						adresse = row.kunde.adresse,
						postnr = row.kunde.poststed.postNr,
						poststed = row.kunde.poststed.postSted
					};
					liste.Add(ny);
				}
				return liste;

			}
			catch (Exception feil)
			{
				Debug.WriteLine("Exception Message: " + feil.Message);
				return null;
			}

		}

		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	List oppdrag tolk sendt. </summary>
		///
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <returns>	A List&lt;Tolking_vm&gt; </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public List<Tolking_vm> listOppdragTolkSendt()
		{
			

			try
			{
				List<Tolking> alleFramaate = db.Oppdrag.OfType<Tolking>().Where(O => O.sendt == true && O.Tolk == null).ToList();


				List<Tolking_vm> vm_listeframmate = new List<Tolking_vm>();
				foreach (var row in alleFramaate)
				{
					var framaater = new Tolking_vm()
					{
						dato = row.regDato.ToString("dd-MM-yyyy, HH:mm"),
						kundeID = row.kunde.persId,
						oppdragID = row.oppdragID,
						typetolk = row.typetolk,
						fraspraak = row.fraspraak,
						tilspraak = row.tilspraak,
						oppmoteadresse = row.oppmoteadresse,
						fratidspunkt = row.fratidspunkt,
						tiltidspunkt = row.tiltidspunkt,
						andreopplysninger = row.andreopplysninger,
                        oppmotepostnr = row.poststed.postNr,
                        oppmotepoststed = row.poststed.postSted
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


		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	Registers the oppdrag paa en tolk. </summary>
		///etter godkjenelser av tolk slette oppdgrad fra foresporsle fra table
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <param name="fspId"> 	Identifier for the fsp. </param>
		/// <param name="tolkId">	Identifier for the tolk. </param>
		/// <param name="svar">  	The svar. </param>
		///
		/// <returns>	True if it succeeds, false if it fails. </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public bool regOppdragPaaEnTolk(int fspId, int tolkId, string svar)
		{
			try
			{
				var fp = db.foresporelse.Find(fspId);
				//finner oppdraget  og Tolken
				var oppdrag = finnOppdrag(fp.oppdragID);
				var Tolk = db.Personer.OfType<Tolk>().FirstOrDefault(T => T.persId == tolkId);

				if (svar.Equals("ja"))
				{

					if (Tolk != null && oppdrag != null && fp != null)
					{
						//registrerer oppdrag på Tolken som takket ja 
						Tolk.oppdrag.Add(oppdrag);

						//sletter  føresspørslet 
						db.foresporelse.Remove(fp);

						db.SaveChanges();
						return true;
					}
					else
					{

						return false;
					}
				}
				else
				{
					//sletter  føresspørslet 
					Tolk.foresporsler.Remove(fp);

					db.SaveChanges();
					return false;
				}
			}
			catch (Exception feil)
			{

				Debug.WriteLine("Exception Message: " + feil.Message);
				return false;
			}

		}



		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	List oppdrag median kunde identifier. </summary>
		/// Lister Tolkinger som tilhører en kunde
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <param name="kundeId">	Identifier for the kunde. </param>
		///
		/// <returns>	A List&lt;Tolking_vm&gt; </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public List<Tolking_vm> listOppdragMedKundeId(int kundeId)
		{

			List<Tolking> alleTolkingAvKunde = db.Oppdrag.OfType<Tolking>().ToList();
			// var lb = alleFramaate.OfType<Oppdrag>().FirstOrDefault(Opd => Opd.kunde.persId == kundeId);
			try
			{
				List<Tolking_vm> utListe = new List<Tolking_vm>();

				foreach (var row in alleTolkingAvKunde)
				{

					if (row.kunde.persId == kundeId)
					{

						var Tolking_vm = new Tolking_vm()
						{
							kundeID = row.kunde.persId,
							oppdragID = row.oppdragID,
							typetolk = row.typetolk,
							fraspraak = row.fraspraak,
							tilspraak = row.tilspraak,
							oppmoteadresse = row.oppmoteadresse,
							fratidspunkt = row.fratidspunkt,
							tiltidspunkt = row.tiltidspunkt,
							andreopplysninger = row.andreopplysninger,
                            oppmotepostnr = row.poststed.postNr,
                            oppmotepoststed = row.poststed.postSted
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
		/// <summary>	List oppdrag bestillinger. </summary>
		///
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <returns>	A List&lt;OppdragOgKunde&gt; </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public List<OppdragOgKunde> listOppdragBestillinger()
		{
			try
			{
				var dbOppdrag = db.Oppdrag.OfType<Tolking>().Where(O => O.Tolk != null).ToList();
				var liste = new List<OppdragOgKunde>();
				foreach (var row in dbOppdrag)
				{
					var ny = new OppdragOgKunde()
					{
						dato = row.regDato.ToString("dd-MM-yyyy, HH:mm"),
						oppdragID = row.oppdragID,
						typetolk = row.typetolk,
						fraspraak = row.fraspraak,
						tilspraak = row.tilspraak,
						oppmoteadresse = row.oppmoteadresse,
						fratidspunkt = row.fratidspunkt,
						tiltidspunkt = row.tiltidspunkt,
						andreopplysninger = row.andreopplysninger,
                        oppmotepostnr = row.poststed.postNr,
                        oppmotepoststed = row.poststed.postSted,


                        persId = row.kunde.persId,
						firma = row.kunde.firma,
						fornavn = row.kunde.fornavn,
						etternavn = row.kunde.etternavn,
						telefon = row.kunde.telefax,
						epost = row.kunde.email,
						adresse = row.kunde.adresse,
						postnr = row.kunde.poststed.postNr,
						poststed = row.kunde.poststed.postSted,

						tolkId = row.Tolk.persId,
						tolkepost = row.Tolk.email,
						tolktelefon = row.Tolk.telefon,
						tolkfornavn = row.Tolk.fornavn,
						tolketternavn = row.Tolk.etternavn
					};
					liste.Add(ny);
				}
				return liste;

			}
			catch (Exception feil)
			{
				Debug.WriteLine("Exception Message: " + feil.Message);
				return null;
			}

		}

		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	List oppdrag median tolk identifier. </summary>
		///
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <param name="tolkId">	Identifier for the tolk. </param>
		///
		/// <returns>	A List&lt;Tolking_vm&gt; </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public List<Tolking_vm> listOppdragMedTolkId(int tolkId)
		{
			Tolk tolk = db.Personer.OfType<Tolk>().FirstOrDefault(T => T.persId == tolkId);
			List<Tolking_vm> utListe = new List<Tolking_vm>();
			try
			{
				if (tolk != null)
				{
					foreach (var row in tolk.oppdrag.OfType<Tolking>())
					{
						var Tolking_vm = new Tolking_vm()
						{
							kundeID = row.kunde.persId,
							oppdragID = row.oppdragID,
							typetolk = row.typetolk,
							fraspraak = row.fraspraak,
							tilspraak = row.tilspraak,
							oppmoteadresse = row.oppmoteadresse,
							fratidspunkt = row.fratidspunkt,
							tiltidspunkt = row.tiltidspunkt,
							andreopplysninger = row.andreopplysninger,
                            oppmotepostnr = row.poststed.postNr,
                            oppmotepoststed = row.poststed.postSted
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



	}
}