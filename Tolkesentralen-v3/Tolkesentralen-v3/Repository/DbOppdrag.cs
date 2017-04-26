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


		public bool regTolkOppdrag(Tolking_vm nyOppdrag, int kundeId)
		{

			Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == kundeId);
			if (Bestiller != null)
			{
				var oppdragDb = new Tolking()
				{

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


		public bool regOppdragOverssettelse(Oversettelse_VM nyOppdrag, int kundeId)
		{

			Kunde Bestiller = db.Personer.OfType<Kunde>().FirstOrDefault(k => k.persId == kundeId);
			if (Bestiller != null)
			{
				var oppdragDb = new Oversettelse()
				{

					spraakFra = nyOppdrag.fraspraak,
					spraakTil = nyOppdrag.tilspraak,
					regDato = DateTime.Now,
					ferdiggjoresdato = nyOppdrag.ferdiggjoresdato,
					andreOpplisning = nyOppdrag.andreopplysninger

				};

				foreach (var f in nyOppdrag.Filer)
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
						dato = rowf.regDato.ToString("yyyyMMdd"),
						oppdragID = rowf.oppdragsID,
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

		public List<Tolking_vm> listOppdragTolkUbehandlett()
		{
			// return db.Oppdrag.ToList();
			List<Tolking> alleFramaate = db.Oppdrag.OfType<Tolking>().Where(O => O.sendt == false).ToList();

			try
			{

				List<Tolking_vm> vm_listeframmate = new List<Tolking_vm>();
				foreach (var rowf in alleFramaate)
				{

					var framaater = new Tolking_vm()
					{
						kundeID = rowf.kunde.persId,
						oppdragID = rowf.oppdragsID,
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

		public List<Tolking_vm> listOppdragTolkSendt()
		{
			// return db.Oppdrag.ToList();
			List<Tolking> alleFramaate = db.Oppdrag.OfType<Tolking>().Where(O => O.sendt == true).ToList();

			try
			{

				List<Tolking_vm> vm_listeframmate = new List<Tolking_vm>();
				foreach (var rowf in alleFramaate)
				{

					var framaater = new Tolking_vm()
					{
						kundeID = rowf.kunde.persId,
						oppdragID = rowf.oppdragsID,
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
		//etter godkjenelser av tolk slette oppdgrad fra foresporsle fra table
		public bool regOppdragPaaEnTolk(int fspId, int tolkId, string svar)
		{

			var fp = db.foresporelse.Find(fspId);
			//finner oppdraget  og Tolken
			var oppdrag = finnOppdrag(fp.oppdragsID);
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

		//public bool regOppdragPaaEnTolk(Foresporsler fsp, int tolkId)
		//{

		//    //finner oppdraget  og Tolken
		//    var oppdrag = finnOppdrag(fsp.oppdragsID);
		//    var Tolk = db.Personer.OfType<Tolk>().FirstOrDefault(T => T.persId == tolkId);

		//    if (Tolk != null && oppdrag != null)
		//    {
		//        Tolk.oppdrag.Add(oppdrag);
		//        //fjerner føresspørslet 
		//        db.foresporelse.Remove(fsp);
		//        db.SaveChanges();
		//        return true;
		//    }
		//    else
		//    {

		//        return false;
		//    }
		//}

		// Lister Tolkinger som tilhører en kunde
		public List<Tolking_vm> listOppdragMedKundeId(int kundeId)
		{

			List<Tolking> alleTolkingAvKunde = db.Oppdrag.OfType<Tolking>().ToList();
			// var lb = alleFramaate.OfType<Oppdrag>().FirstOrDefault(Opd => Opd.kunde.persId == kundeId);
			try
			{

				List<Tolking_vm> utListe = new List<Tolking_vm>();

				foreach (var rowf in alleTolkingAvKunde)
				{

					if (rowf.kunde.persId == kundeId)
					{

						var Tolking_vm = new Tolking_vm()
						{
							kundeID = rowf.kunde.persId,
							oppdragID = rowf.oppdragsID,
							typetolk = rowf.oppdragType,
							fraspraak = rowf.spraakFra,
							tilspraak = rowf.spraakTil,
							sted = rowf.oppdragsAddres,
							oppdragsdato = rowf.oppdragsDato,
							frakl = rowf.tidFra,
							tilkl = rowf.tidTil,
							andreopplysninger = rowf.andreOpplisning,


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


		public List<Tolking_vm> listOppdragMedTolkId(int tolkId)
		{


			Tolk tolk = db.Personer.OfType<Tolk>().FirstOrDefault(T => T.persId == tolkId);
			List<Tolking_vm> utListe = new List<Tolking_vm>();
			try
			{

				if (tolk != null)
				{

					foreach (var rowf in tolk.oppdrag.OfType<Tolking>())
					{

						var Tolking_vm = new Tolking_vm()
						{
							kundeID = rowf.kunde.persId,
							oppdragID = rowf.oppdragsID,
							typetolk = rowf.oppdragType,
							fraspraak = rowf.spraakFra,
							tilspraak = rowf.spraakTil,
							sted = rowf.oppdragsAddres,
							oppdragsdato = rowf.oppdragsDato,
							frakl = rowf.tidFra,
							tilkl = rowf.tidTil,
							andreopplysninger = rowf.andreOpplisning,

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

		public Tolk_VM hentEnTolk(int tolkId)
		{

			var tk = db.Personer.OfType<Tolk>().FirstOrDefault(T => T.persId == tolkId);


			if (tk == null)
			{
				return null;
			}
			else
			{
				var hentetTolk = new Tolk_VM()
				{
					persId = tk.persId,
					fornavn = tk.fornavn,
					etternavn = tk.etternavn,
					tlf = tk.tlf,
					postnr = tk.poststed.postNr,
					poststed = tk.poststed.postSted,
					email = tk.email,
					adresse = tk.adresse,
					godkjent = tk.godkjent
				};
				return hentetTolk;
			}

		}


		public bool OppdaterTolk(Tolk_VM Tolk)
		{
			//var tolkOpdate = db.Personer.Find(Tolk.persId);
			try
			{
				var dbtolk = db.Personer.Find(Tolk.persId);
				if (dbtolk != null)
				{
					dbtolk.fornavn = Tolk.fornavn;
					dbtolk.etternavn = Tolk.fornavn;
					dbtolk.tlf = Tolk.tlf;
					dbtolk.poststed.postNr = Tolk.postnr;
					dbtolk.poststed.postSted = Tolk.poststed;
					dbtolk.email = Tolk.email;
					dbtolk.adresse = Tolk.adresse;

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


	}
}