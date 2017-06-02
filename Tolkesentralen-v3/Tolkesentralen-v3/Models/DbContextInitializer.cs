using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IO;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;
using Tolkesentralen_v3.Repository;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Models
{
    public class DBContextInitializer : DropCreateDatabaseAlways<DbNetcont>
    {
        protected override void Seed(DbNetcont db)
        {
            var res = new DbPerson();
            var saltAdmin = res.lagSalt();
            var saltKunde = res.lagSalt();
            var saltKunde2 = res.lagSalt();
            var saltKunde3 = res.lagSalt();
            var saltKunde4 = res.lagSalt();
            var saltKunde5 = res.lagSalt();
            var saltTolk = res.lagSalt();

            try
            {
                /******************* Last inn alle språk fra fil-liste til database *******************/
                string relativePathTilListe = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, @"Repository\SpraakListe.txt");

                string line;
                StreamReader file = new StreamReader(relativePathTilListe);
                while ((line = file.ReadLine()) != null)
                {
                    db.Spraak.Add(new Spraak() { navn = line });
                }
                file.Close();



                db.Poststeder.Add(new Poststed() { postNr = 2050, postSted = "Jessheim" });
                db.Poststeder.Add(new Poststed() { postNr = 2060, postSted = "Gardermoen" });
                db.Poststeder.Add(new Poststed() { postNr = 2601, postSted = "Lillehammer" });
                db.SaveChanges();

                //Poststed errorfix = db.Poststeder.Find("2050");

                var kunde = new Kunde()
                {
                    fornavn = "Emilie",
                    etternavn = "Nice",
                    telefon = 9595995,
                    email = "kunde@kunde.no",
                    adresse = "Blåbærtråkket",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Emile&Co",
                    telefax = 999999,
                    fakturaAddress = "Blåbærtråkket"
                };

                var kunde2 = new Kunde()
                {
                    fornavn = "Arock",
                    etternavn = "Star",
                    telefon = 77734969,
                    email = "rockstar@kunde.no",
                    adresse = "Midtskogvegen",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "RockStars",
                    telefax = 999999,
                    fakturaAddress = "Midtskogvegen"
                };

                var kunde3 = new Kunde()
                {
                    fornavn = "Franz",
                    etternavn = "Jeger",
                    telefon = 9595995,
                    email = "jeger@kunde.no",
                    adresse = "Epletråkket",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Jegerforbundet",
                    telefax = 999999,
                    fakturaAddress = "Epletråkket"
                };


                var kunde4 = new Kunde()
                {
                    fornavn = "Bob",
                    etternavn = "Marley",
                    telefon = 9595995,
                    email = "bob@kunde.no",
                    adresse = "Chilloutgate",
                    regDato = DateTime.Now,
                    godkjent = 1,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Mr.Smokealot&Co",
                    telefax = 999999,
                    fakturaAddress = "Chilloutgate"
                };

                var kunde5 = new Kunde()
                {
                    fornavn = "The",
                    etternavn = "Don",
                    telefon = 9595995,
                    email = "rassmus@kunde.no",
                    adresse = "Flabyseter",
                    regDato = DateTime.Now,
                    godkjent = 1,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Boss&Co",
                    telefax = 999999,
                    fakturaAddress = "Flabyseter"
                };

                var kunde6 = new Kunde()
                {
                    fornavn = "Rambo",
                    etternavn = "Ammok",
                    telefon = 9595995,
                    email = "rambo@kunde.no",
                    adresse = "Rogntråkket",
                    regDato = DateTime.Now,
                    godkjent = 1,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Film00",
                    telefax = 999999,
                    fakturaAddress = "Rogntråkket"
                };


                var kunde7 = new Kunde()
                {
                    fornavn = "Albert",
                    etternavn = "Einstein",
                    telefon = 9595995,
                    email = "alberit@einstein.no",
                    adresse = "Ovshaugsvegen",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Brainiacs&Co",
                    telefax = 999999,
                    fakturaAddress = "Ovshaugsvegen"
                };

                var kunde8 = new Kunde()
                {
                    fornavn = "Lars",
                    etternavn = "Fleksnes",
                    telefon = 9595995,
                    email = "lars@fleksnes.no",
                    adresse = "FlexStreet",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "fleksnes&Co",
                    telefax = 999999,
                    fakturaAddress = "FlexStreet"
                };

                var kunde9 = new Kunde()
                {
                    fornavn = "Per",
                    etternavn = "Håkonsen",
                    telefon = 9595995,
                    email = "per@mail.no",
                    adresse = "Baregate",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Firma1",
                    telefax = 999999,
                    fakturaAddress = "Baregate"
                };

                var kunde10 = new Kunde()
                {
                    fornavn = "Harrald",
                    etternavn = "Esteves",
                    telefon = 9595995,
                    email = "harald@mail.no",
                    adresse = "Gate",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Esteves&Co",
                    telefax = 999999,
                    fakturaAddress = "Gate"
                };

                var kunde11 = new Kunde()
                {
                    fornavn = "Mr.",
                    etternavn = "Smoketomuch",
                    telefon = 9595995,
                    email = "m_m@mail.no",
                    adresse = "Underbrua",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Smoketomuch&Co",
                    telefax = 999999,
                    fakturaAddress = "Smoketomuch"
                };

                var kunde12 = new Kunde()
                {
                    fornavn = "Be",
                    etternavn = "Nice",
                    telefon = 9595995,
                    email = "nice@mail.no",
                    adresse = "Soltoppen",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Mokka&Co",
                    telefax = 999999,
                    fakturaAddress = "Soltoppen"
                };

                var kunde13 = new Kunde()
                {
                    fornavn = "Frans",
                    etternavn = "Bakko",
                    telefon = 9595995,
                    email = "bakko@mail.no",
                    adresse = "Bakkegata",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Bakko&Co",
                    telefax = 999999,
                    fakturaAddress = "Bakkegata"
                };

                var jessheim = db.Poststeder.Find(2050);
                var gardermoden = db.Poststeder.Find(2060);
                var lillehammer = db.Poststeder.Find(2601);
                kunde.poststed = jessheim;
                kunde2.poststed = gardermoden;
                kunde3.poststed = jessheim;
                kunde4.poststed = lillehammer;
                kunde5.poststed = gardermoden;
                kunde6.poststed = jessheim;
                kunde7.poststed = jessheim;
                kunde8.poststed = lillehammer;
                kunde9.poststed = gardermoden;
                kunde10.poststed = lillehammer;
                kunde11.poststed = jessheim;
                kunde12.poststed = gardermoden;
                kunde13.poststed = jessheim;

                db.Personer.Add(kunde);
                db.Personer.Add(kunde2);
                db.Personer.Add(kunde3);
                db.Personer.Add(kunde4);
                db.Personer.Add(kunde5);
                db.Personer.Add(kunde6);
                db.Personer.Add(kunde7);
                db.Personer.Add(kunde8);
                db.Personer.Add(kunde9);
                db.Personer.Add(kunde10);
                db.Personer.Add(kunde11);
                db.Personer.Add(kunde12);
                db.Personer.Add(kunde13);
                db.SaveChanges();

                res.OppdaterTilGodkjentKunde(11);
                res.OppdaterTilGodkjentKunde(12);
                res.OppdaterTilGodkjentKunde(13);



                var admin = new Admin()
                {
                    fornavn = "AdminFornavn",
                    etternavn = "AdminEtternavn",
                    telefon = 9595995,
                    email = "admin@admin.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde
                };
                admin.poststed = jessheim;
                db.Personer.Add(admin);
                db.SaveChanges();


                //db.Spraak.Add(spraak1);
                //db.Spraak.Add(spraak2);
                //db.Spraak.Add(spraak3);
                //db.Spraak.Add(spraak4);
                //db.SaveChanges();


                var tolk1 = new Tolk()
                {
                    fornavn = "Fredrik",
                    etternavn = "Hansen",
                    telefon = 9595995,
                    email = "tolk@tolk.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde
                };

                var tolk2 = new Tolk()
                {
                    fornavn = "Lars",
                    etternavn = "Flexnes",
                    telefon = 9595995,
                    email = "tolk2@tolk.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde
                };

                var tolk3 = new Tolk()
                {
                    fornavn = "Ine",
                    etternavn = "Tolknes",
                    telefon = 9595995,
                    email = "tolk3@tolk.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde
                };

                var tolk4 = new Tolk()
                {
                    fornavn = "Rambo",
                    etternavn = "Ammok",
                    telefon = 9595995,
                    email = "rambo1@tolk.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    //spraak = {}
                };

                var tolk5 = new Tolk()
                {
                    fornavn = "Harald",
                    etternavn = "Lystad",
                    telefon = 9595995,
                    email = "h@tolk.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    //spraak = {}
                };

                tolk1.poststed = jessheim;
                tolk2.poststed = jessheim;
                tolk3.poststed = gardermoden;
                tolk4.poststed = jessheim;
                tolk5.poststed = jessheim;

                tolk1.spraak = new List<Spraak>();
                tolk2.spraak = new List<Spraak>();
                tolk3.spraak = new List<Spraak>();
                tolk4.spraak = new List<Spraak>();
                tolk5.spraak = new List<Spraak>();
                for (int i = 40; i < 50; i++)
                {
                    tolk1.spraak.Add(db.Spraak.Find(i));
                }
                for (int i = 40; i < 50; i++)
                {
                    tolk2.spraak.Add(db.Spraak.Find(i));
                }
                for (int i = 20; i < 50; i++)
                {
                    tolk3.spraak.Add(db.Spraak.Find(i));
                }
                for (int i = 20; i < 43; i++)
                {
                    tolk4.spraak.Add(db.Spraak.Find(i));
                }
                tolk1.spraak.Add(db.Spraak.Find(93));
                tolk2.spraak.Add(db.Spraak.Find(93));
                tolk3.spraak.Add(db.Spraak.Find(93));
                tolk4.spraak.Add(db.Spraak.Find(93));
                tolk5.spraak.Add(db.Spraak.Find(93));
                tolk1.spraak.Add(db.Spraak.Find(116));
                tolk2.spraak.Add(db.Spraak.Find(116));
                tolk3.spraak.Add(db.Spraak.Find(116));
                tolk4.spraak.Add(db.Spraak.Find(116));
                tolk5.spraak.Add(db.Spraak.Find(116));
                db.SaveChanges();


                db.Personer.Add(tolk1);
                db.Personer.Add(tolk2);
                db.Personer.Add(tolk3);
                db.Personer.Add(tolk4);
                db.Personer.Add(tolk5);

                db.SaveChanges();


                var oppdrag1 = new Tolking_vm()
                {
                    oppdragsdato = DateTime.Now.AddDays(1).ToString("yyyy-MM-dd"),
                    dato = "2017-07-05",
                    fraspraak = 42,
                    tilspraak = 93,
                    andreopplysninger = "Dette er andre opplysninger",
                    typetolk = "Telefontolk",
                    oppmoteadresse = "HIOA pilestredet 35",
                    frakl = "13:15",
                    tilkl = "14:15"
                };

                var oppdrag2 = new Tolking_vm()
                {
                    oppdragsdato = DateTime.Now.AddDays(1).ToString("yyyy-MM-dd"),
                    dato = "2017-07-05",
                    fraspraak = 42,
                    tilspraak = 93,
                    andreopplysninger = "Dette er andre opplysninger",
                    typetolk = "Fremmedmøte",
                    oppmoteadresse = "HIOA pilestredet 35",
                    frakl = "10:15",
                    tilkl = "12:15"
                };

                var oppdrag3 = new Tolking_vm()
                {
                    oppdragsdato = DateTime.Now.AddDays(1).ToString("yyyy-MM-dd"),
                    dato = "2017-07-07",
                    fraspraak = 42,
                    tilspraak = 93,
                    andreopplysninger = "Dette er andre opplysninger",
                    typetolk = "Telefontolk",
                    oppmoteadresse = "HIOA pilestredet 35",
                    frakl = "11:15",
                    tilkl = "13:15"
                };

                var oppdrag4 = new Tolking_vm()
                {
                    oppdragsdato = DateTime.Now.AddDays(1).ToString("yyyy-MM-dd"),
                    dato = "2017-07-09",
                    fraspraak = 33,
                    tilspraak = 93,
                    andreopplysninger = "Dette er andre opplysninger",
                    typetolk = "Telefontolk",
                    oppmoteadresse = "HIOA pilestredet 35",
                    frakl = "11:15",
                    tilkl = "13:15"
                };

                var oppdrag5 = new Tolking_vm()
                {
                    oppdragsdato = DateTime.Now.AddDays(1).ToString("yyyy-MM-dd"),
                    dato = "2017-07-17",
                    fraspraak = 34,
                    tilspraak = 116,
                    andreopplysninger = "Dette er andre opplysninger",
                    typetolk = "Telefontolk",
                    oppmoteadresse = "HIOA pilestredet 35",
                    frakl = "11:15",
                    tilkl = "13:15"
                };
                var o = new DbOppdrag();
                o.regTolkOppdrag(oppdrag1, 4);
                o.regTolkOppdrag(oppdrag2, 5);
                o.regTolkOppdrag(oppdrag3, 6);
                o.regTolkOppdrag(oppdrag4, 4);
                o.regTolkOppdrag(oppdrag5, 5);
                o.regTolkOppdrag(oppdrag2, 6);
                db.SaveChanges();

                var de = new DbForessporsel();
                int[] tolkId = { 15 };
                de.regEnForesporselPåEnEllerFlereTolk(tolkId, 1);
                de.regEnForesporselPåEnEllerFlereTolk(tolkId, 2);
                //de.regEnForesporselPåEnEllerFlereTolk(tolkId, 6);
                db.SaveChanges();
                o.regOppdragPaaEnTolk(1, 15, "ja");

                /***************************THis runs the method to register a foresler to a tolk**************************************/
                //int[] tolkId = new int[2];
                //tolkId[0] = 8;
                //tolkId[1] = 9;
                //var ok = o.regEnForesporselPåEnEllerFlereTolk(tolkId, 1);


                db.SaveChanges();


            }
            catch (Exception e)
            {
                var breakpoint = e;
            }


        }

    }
}