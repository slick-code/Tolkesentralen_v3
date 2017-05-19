using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Web;
using Tolkesentralen_v3.Models;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Models
{
    public class DbPerson
    {
        DbNetcont db = new DbNetcont();

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Sjekk om epost eksisterer. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="epost">	The epost. </param>
        ///
        /// <returns>	True if it succeeds, false if it fails. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public bool SjekkOmEpostEksisterer(string epost)
        {
			try
			{
				var objekt = db.Personer.FirstOrDefault(b => b.email == epost);
				if (objekt == null)
				{
					return false;
				}
				else
				{
					return true;
				}
			} catch (Exception feil) {
				Debug.WriteLine("Exception Message: " + feil.Message);
				return false;
			}
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Sets an utilgjengelig. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="input">	The input. </param>
        ///
        /// <returns>	True if it succeeds, false if it fails. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public bool setUtilgjengelig(Utilgjengelig_ViewModel input)
        {
            //DateTime myDate = DateTime.ParseExact("2009-05-08 14:40:52,531", "yyyy-MM-dd HH:mm:ss,fff",
            //                       System.Globalization.CultureInfo.InvariantCulture);
            DateTime fraDato = DateTime.ParseExact(input.fraDato, "yyyy-MM-dd",
                                      System.Globalization.CultureInfo.InvariantCulture);
            DateTime tilDato = DateTime.ParseExact(input.tilDato, "yyyy-MM-dd",
                                  System.Globalization.CultureInfo.InvariantCulture);
            
            try
            {
                var db = new DbNetcont();
                var periode = new Utilgjengelig()
                {
                    persId = input.persId,
                    fraDato = fraDato,
                    tilDato = tilDato
                };
                db.Utilgjengelig.Add(periode);
                db.SaveChanges();
                return true;
            }
            catch(Exception feil)
            {
				Debug.WriteLine("Exception Message: " + feil.Message);
				
				return false;
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Slett periode utilgjengelig. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="id">	The identifier. </param>
        ///
        /// <returns>	True if it succeeds, false if it fails. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public bool slettPeriodeUtilgjengelig(int id)
        {
            var db = new DbNetcont();
            try
            {
                db.Utilgjengelig.Remove(db.Utilgjengelig.Find(id));
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                Debug.WriteLine("Exception Message: " + e.Message);
                return false;
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Gets an utilgjengelig. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="persId">	. </param>
        ///
        /// <returns>	The utilgjengelig. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public List<Utilgjengelig_ViewModel> getUtilgjengelig(int persId)
        {
            try
            {
                var db = new DbNetcont();
                List<Utilgjengelig> periodeListe = db.Utilgjengelig.Where(t => t.persId == persId).ToList();
                
                var perioder = new List<Utilgjengelig_ViewModel>();
                foreach (var item in periodeListe)
                {
                    var periode = new Utilgjengelig_ViewModel();
                    periode.id = item.id;
                    periode.persId = item.persId;
                    periode.fraDato = item.fraDato.ToString("yyyy-MM-dd");
                    periode.tilDato = item.tilDato.ToString("yyyy-MM- dd");
                    perioder.Add(periode);
                }
                return perioder;
            }
            catch
            {
                return null;
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Hent en tolk. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="tolkId">	Identifier for the tolk. </param>
        ///
        /// <returns>	A Tolk_VM. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public Tolk_VM hentEnTolk(int tolkId)
        {
			try
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
						telefon = tk.telefon,
						postnr = tk.poststed.postNr,
						poststed = tk.poststed.postSted,
						epost = tk.email,
						adresse = tk.adresse,
						godkjent = tk.godkjent
					};
					return hentetTolk;
				}

			}
			catch (Exception feil)
			{
				Debug.WriteLine("Exception Message: " + feil.Message);
				return null;
			}
			
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Oppdater tolk. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="Tolk">	The tolk. </param>
        ///
        /// <returns>	True if it succeeds, false if it fails. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public bool OppdaterTolk(Tolk_VM Tolk)
        {
            //var tolkOpdate = db.Personer.Find(Tolk.persId);
            try
            {
                var dbtolk = db.Personer.Find(Tolk.persId);
                if (dbtolk != null)
                {
                    dbtolk.fornavn = Tolk.fornavn;
                    dbtolk.etternavn = Tolk.etternavn;
                    dbtolk.telefon = Tolk.telefon;
                    dbtolk.poststed.postNr = Tolk.postnr;
                    dbtolk.poststed.postSted = Tolk.poststed;
                    dbtolk.email = Tolk.epost;
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

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Hent kunde. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="id">	The identifier. </param>
        ///
        /// <returns>	A Kunde_VM. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public Kunde_VM HentKunde(int id)
        {
            try
            {
                var db = new DbNetcont();

                Person kunde = db.Personer.Find(id);
                var a = kunde;
                
            }
            catch(Exception feil)
            {

				Debug.WriteLine("Exception Message: " + feil.Message);
				return null;
			}
            return null;
            
        }




		////////////////////////////////////////////////////////////////////////////////////////////////////
		/// <summary>	Liste alle kunder./ </summary>
		/// List alle kunder. Enten godkjente (1) eller til godkjenning (0)
		/// <remarks>	Mojola, 19/05/2017. </remarks>
		///
		/// <param name="godkjent">	The godkjent. </param>
		///
		/// <returns>	A List&lt;Kunde_VM&gt; </returns>
		////////////////////////////////////////////////////////////////////////////////////////////////////

		public List<Kunde_VM> ListeAlleKunder(int godkjent)
        {
            var db = new DbNetcont();
            
            try
            {
				List<Kunde> alleKunder = db.Personer.OfType<Kunde>().ToList();
				List<Kunde_VM> vm_liste = new List<Kunde_VM>();
                foreach (var row in alleKunder)
                {
                    if(row.godkjent == godkjent)
                    {
                        var kunde = new Kunde_VM()
                        {
                            persId = row.persId,
                            firma = row.firma,
                            fornavn = row.fornavn,
                            etternavn = row.etternavn,
                            telefon = row.telefon,
                            telefax = row.telefax,
                            fakturaadresse = row.fakturaAddress,
                            postnr = row.poststed.postNr,
                            poststed = row.poststed.postSted,
                            epost = row.email
                        };
                        vm_liste.Add(kunde);
                    }
                }
                return vm_liste;
            }
            catch (Exception)
            {
                return null;
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Oppdater til godkjent kunde. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="id">	The identifier. </param>
        ///
        /// <returns>	True if it succeeds, false if it fails. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public bool OppdaterTilGodkjentKunde(int id)
        {
            try
            {
                var db = new DbNetcont();
                var kunde = db.Personer.Find(id);
                kunde.godkjent = 1;
                db.SaveChanges();
                return true;
            }
            catch (Exception feil)
            {
                Debug.WriteLine("Exception Message: " + feil.Message);
                return false;
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Sett inn kunde. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="innkunde">	. </param>
        ///
        /// <returns>	True if it succeeds, false if it fails. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public bool settInnKunde(Kunde_VM innkunde)
        {
			try
			{
				var db = new DbNetcont();

				string salt = lagSalt();
				var passordOgSalt = innkunde.passord + salt;
				byte[] dbPassword = lagHash(passordOgSalt);

				var nykunde = new Kunde()
				{

					fornavn = innkunde.fornavn,
					etternavn = innkunde.etternavn,
					telefon = innkunde.telefon,
					adresse = innkunde.adresse,
					regDato = DateTime.Now,
					godkjent = 0,
					password = dbPassword,
					email = innkunde.epost,
					Salt = salt,
					firma = innkunde.firma,
					telefax = innkunde.telefax,
					fakturaAddress = innkunde.fakturaadresse

				};

				//her finner vi et poststed ved hjelp av en postnr

				Poststed eksistererPoststed = db.Poststeder.Find(innkunde.postnr);

				if (eksistererPoststed == null)
				{
					var nyttpoststed = new Poststed()
					{
						postNr = innkunde.postnr,
						postSted = innkunde.poststed

					};
					// db.Poststeder.Add(nyttpoststed);
					nykunde.poststed = nyttpoststed;

				}
				else
				{
					nykunde.poststed = eksistererPoststed;
				}


				db.Personer.Add(nykunde);
				db.SaveChanges();
				return true;

			}
			catch (Exception feil) {

				Debug.WriteLine("Exception Message: " + feil.Message);
				return false;
			}
               
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Autoriser og returner bruker. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="brukernavn">	The brukernavn. </param>
        /// <param name="passord">   	The passord. </param>
        ///
        /// <returns>	A Get_Login_VM. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public Get_Login_VM AutoriserOgReturnerBruker(string brukernavn, string passord)
        {
            using (var db = new DbNetcont())
            {
				try
				{
					// Finner første machende rad til brukernavn
					Person dbData = db.Personer.FirstOrDefault(b => b.email == brukernavn);

					if (dbData == null) return null;

					// Sjekker om passord#hash macher brukeren
					byte[] passordForTest = lagHash(passord + dbData.Salt);
					bool riktigBruker = dbData.password.SequenceEqual(passordForTest);

					if (!riktigBruker)
					{
						return null;
					}

					var bruker = new Get_Login_VM();
					bruker.brukernavn = dbData.email;
					bruker.id = dbData.persId;
					bruker.rolle = dbData.GetType().BaseType.Name.ToLower();
					return bruker;
				}
				catch (Exception feil)
				{
					Debug.WriteLine("Exception Message: " + feil.Message);
					return null;
				}
            }
			
        }


        /*
        /// <summary>
        /// Method to check that the persons details are correct 
        /// with the inputs at the frontend and the backend  
        /// hence the database.
        /// </summary>
        /// <param name="email"></param>
        /// <param name="passord"></param>
        /// <returns></returns>

        public Login_vm reggisteret_i_db(Login_vm ny)
        {
            using (var db = new DbNetcont())
            {

                List<Kunde> alleKunder = db.Personer.OfType<Kunde>().ToList();
                byte[] dbPaasord;
                foreach (var k in alleKunder)
                {
                    dbPaasord = lagHash(ny.passord + k.Salt);

                    if(k.password.SequenceEqual(dbPaasord))
                    {
                        Login_vm retur = new Login_vm();
                        retur.email = k.email;
                        retur.id = k.persId;
                        retur.role = 1;
                        return retur;
                    }
                }

                return null;
            }
        }
        */

            
        /// <summary>

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>
        /// /**********************************************************Tolk-start************************.
        /// </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="nyTolk">	The ny tolk. </param>
        ///
        /// <returns>	True if it succeeds, false if it fails. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public bool settinnTolk(Tolk_VM nyTolk)
        {

			try
			{
				string salt = lagSalt();
				var passordOgSalt = nyTolk.passord + salt;
				byte[] dbPassword = lagHash(passordOgSalt);

				var dbTolk = new Tolk()
				{

					fornavn = nyTolk.fornavn,
					etternavn = nyTolk.etternavn,
					telefon = nyTolk.telefon,
					email = nyTolk.epost,
					adresse = nyTolk.adresse,
					regDato = DateTime.Now,
					password = dbPassword,
					Salt = salt

				};
				var db = new DbNetcont();
           
					var spraakFunnet = db.Poststeder.Find(nyTolk.postnr);

					if (spraakFunnet == null)
					{
						var nyttpoststed = new Poststed()
						{
							postNr = nyTolk.postnr,
							postSted = nyTolk.poststed

						};
						dbTolk.poststed = nyttpoststed;

					}
					else
					{
						dbTolk.poststed = spraakFunnet;
					}
					db.Personer.Add(dbTolk);
					db.SaveChanges();

					return true;
			}
            catch (Exception feil)
            {
                Debug.WriteLine("Exception Message: " + feil.Message);
                return false;
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Liste alle tolk. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <returns>	A List&lt;Tolk_VM&gt; </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public List<Tolk_VM> ListeAlleTolk()
        {
            var db = new DbNetcont();

            List<Tolk> alleTolk = db.Personer.OfType<Tolk>().ToList();
            try
            {
                List<Tolk_VM> utListe = new List<Tolk_VM>();
                foreach (var row in alleTolk)
                {
                    if (true)
                    {
                        var Tolk = new Tolk_VM()
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
                        utListe.Add(Tolk);
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


        public bool RegSprakkPåTolk(int TolkId, Spraak spraak)
        {
			try
			{

				Spraak funnetspraak = db.Spraak.Find(spraak.spraakId);

				// var funnetspraak = db.Spraak.SqlQuery(" SELECT * FROM dbo.Spraak WHERE 'navn' = Norsk").ToList();

				//(s => s.navn == spraak.navn)
				Tolk funnetTolk = db.Personer.OfType<Tolk>().FirstOrDefault(t => t.persId == TolkId);

				if (funnetspraak != null && funnetTolk != null)
				{

					funnetTolk.spraak.Add(funnetspraak);
					db.SaveChanges();
					return true;
				}
				else
				{
					return false;
				}
			} catch (Exception feil) {

				Debug.WriteLine("Exception Message: " + feil.Message);
				return false;
			}

		}

        public List<Tolk_VM> ListeAlleTolkSomSnakkeDetSprrak(int spraakId, int spraakId2)
        {

            var db = new DbNetcont();

            List<Tolk> alleTolk = db.Personer.OfType<Tolk>().ToList();
            try
            {
                List<Tolk_VM> utListe = new List<Tolk_VM>();
                foreach (var row in alleTolk)
                {
                    if (row.spraak.Contains(db.Spraak.Find(spraakId)) && row.spraak.Contains(db.Spraak.Find(spraakId2)))
                    {
                        var Tolk = new Tolk_VM()
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
                        utListe.Add(Tolk);
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



        /**********************************************************Tolk-slutt*****************************/
        /// <summary>
        /// lists all the Administrators that the company has
        /// </summary>
        /// <returns>
        /// returns the liste 
        /// </returns>
        public List<Admin> ListeAlleAdmin()
        {
			try
			{

				var db = new DbNetcont();
				List<Admin> alleAdmin = db.Personer.OfType<Admin>().ToList();
				return alleAdmin;

			}
			catch (Exception feil) {
				Debug.WriteLine("Exception Message: " + feil.Message);
				return null;
			}
        }

        ///// <summary>
        ///// Setter inn en Amdministrator
        ///// </summary>
        ///// <param name="innAdmin"></param>
        ///// <returns></returns>
        public bool settinnAdmin(FKunde innAdmin)
        {

            var nyAdmin = new Admin()
            {

                fornavn = innAdmin.fornavn,
                etternavn = innAdmin.etternavn,
                email = innAdmin.email,
                adresse = innAdmin.adresse,
                regDato = DateTime.Now,
                adminNr = "019901999",
                password = lagHash (innAdmin.password),

            };
            var db = new DbNetcont();
            try
            {
                var eksistererPostnr = db.Poststeder.Find(innAdmin.postNr);

                if (eksistererPostnr == null)
                {
                    var nyttpoststed = new Poststed()
                    {
                        postNr = innAdmin.postNr,
                        postSted = innAdmin.postSted

                    };
                    nyAdmin.poststed = nyttpoststed;

                }
                else
                {
                    nyAdmin.poststed = eksistererPostnr;
                }
                db.Personer.Add(nyAdmin);
                db.SaveChanges();

                return true;
            }
            catch (Exception feil)
            {
                Debug.WriteLine("Exception Message: " + feil.Message);
                return false;
            }
        }


   

        /// <summary>
        /// this will find and re turn a person
        /// with the help of the id as a key from the database
        /// </summary>
        /// <param name="persId"></param>
        /// <param name="innkunde"></param>
        /// <returns></returns>
        public bool endreKunde(int persId, Kunde innkunde)
        {
            var db = new DbNetcont();

            try
            {
                Person endreKunde = db.Personer.Find(innkunde.persId);
                endreKunde.fornavn = innkunde.fornavn;
                endreKunde.etternavn = innkunde.etternavn;
                endreKunde.email = innkunde.email;
                endreKunde.adresse = innkunde.adresse;
                endreKunde.regDato = innkunde.regDato;
                endreKunde.password = innkunde.password;

                if (endreKunde.poststed.postNr!=innkunde.poststed.postNr)
                { 
                        Poststed eksisterendePostdted = db.Poststeder.Find(innkunde.poststed.postNr);
                        if (eksisterendePostdted == null)
                        {
                            var nyttPoststed = new Poststed()
                            {
                               postNr = innkunde.poststed.postNr,
                               postSted = innkunde.poststed.postSted
                            };
                            db.Poststeder.Add(nyttPoststed);
                        }
                        else
                        {
                            endreKunde.poststed.postNr = innkunde.poststed.postNr;
                        }
                };
                db.SaveChanges();
                return true;
            }
            catch(Exception feil)
            {
                Debug.WriteLine("Exception Message: " + feil.Message);
                    return false;
            }
        
        }

        public bool slettKunde(int slettId)
        {
            var db = new DbNetcont();
            try
            {
                Person slettkunde = db.Personer.Find(slettId);
                db.Personer.Remove(slettkunde);
                db.SaveChanges();
                return true;
            }catch(Exception feil)
            {
                Debug.WriteLine("Exception Message: " + feil.Message);
                return false;
            }
        }
        /// <summary>
        /// Helping method to find a person 
        /// </summary>
        /// <param name="persnId"></param>
        /// <returns>
        /// returns a id
        /// </returns>
        public Person finnKunde(int persnId)
        {
            var db = new DbNetcont();
            var fankkunde = db.Personer.FirstOrDefault(k => k.persId == persnId);
            if(fankkunde == null)
            {
                return null;
            }
            return fankkunde;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="oppdragsID"></param>
        /// <returns>
        /// </returns>
        public Oppdrag HentOppdrag(int oppdragsID)
        {
            var db = new DbNetcont();
			try
			{

				var enoppdrag = db.Oppdrag.Find(oppdragsID);
				if (enoppdrag == null)
				{
					return null;
				}
				return enoppdrag;
			}
			catch (Exception feil) {
				Debug.WriteLine("Exception Message: " + feil.Message);
				return null;
			}

        }
        /// <summary>
        /// Delete a "Oppdrag" first by getting the id  
        /// </summary>
        /// <param name="oppdragsID"></param>
        /// <returns>
        /// return a "Oppdrag" after find an id
        /// </returns>
        public bool slettOppdrag (int oppdragsID)
        {
            var db = new DbNetcont();
			try
			{
				Oppdrag slettenOppdrag = db.Oppdrag.Find(oppdragsID);
				db.Oppdrag.Remove(slettenOppdrag);
				db.SaveChanges();
				return true;
			}
			catch (Exception feil) {
				Debug.WriteLine("Exception Message: " + feil.Message);
				return false;
			}
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="oppdragID"></param>
        /// <param name="innOppdrag"></param>
        /// <returns>
        /// </returns>
     

        public bool endreOppdrag (int oppdragID, Oppdrag innOppdrag)
        {
            var db = new DbNetcont();
            try
            {
                //Oppdrag endreoppdrag = db.Oppdrag.Find(oppdragID);
                //endreoppdrag.oppdragsgiver = innOppdrag.oppdragsgiver;
                //endreoppdrag.oppdragType = innOppdrag.oppdragType;
                //endreoppdrag.språkFra = innOppdrag.språkFra;
                //endreoppdrag.språkTil = innOppdrag.språkTil;
                //endreoppdrag.kunde.oppdrag = endreoppdrag.kunde.oppdrag;
                
                //db.SaveChanges();
            }
            catch(Exception feil)
            {
                Debug.WriteLine("Exception Message: " + feil.Message);
                return false;
            }
            return true;
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Liste alle oppdrag. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <returns>	A List&lt;Oppdrag&gt; </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public List<Oppdrag> ListeAlleOppdrag()
        {
            var db = new DbNetcont();
            return db.Oppdrag.ToList();
        }
        /// <summary>
        /// this i a list of files that have been 
        /// </summary>
        /// <returns></returns>
        public List<Fil> ListeAlleFil()
        {
            var db = new DbNetcont();

            return db.Filer.ToList();
        }
        /// <summary>
        /// Find the id by contacting the database and makes sure its the right id
        /// </summary>
        /// <param name="oppdragsID"></param>
        /// <returns>
        /// returns an id of oppdrag
        /// </returns>
        public Oppdrag visOppdrag(int oppdragsID)
        {
            var db = new DbNetcont();
            return db.Oppdrag.FirstOrDefault(Oppd => Oppd.oppdragID == oppdragsID);
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	/********************** Sikkerhets hjelp **********************. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="innStreng">	The inn streng. </param>
        ///
        /// <returns>	A byte[]. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public byte[] lagHash(string innStreng)
        {
            byte[] innData, utData;

            var algoritme = SHA512.Create();
            innData = Encoding.UTF8.GetBytes(innStreng);
            utData = algoritme.ComputeHash(innData);
            return utData;
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Lag salt. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <returns>	A string. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public string lagSalt()
        {
            byte[] randomArray = new byte[10];
            string randomString;

            var strg = new RNGCryptoServiceProvider();
            strg.GetBytes(randomArray);
            randomString = Convert.ToBase64String(randomArray);
            return randomString;
        }
    }
}