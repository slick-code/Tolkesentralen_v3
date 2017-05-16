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

                var kunde = new Kunde() {
                    fornavn = "Emilie",
                    etternavn = "Nice",
                    telefon = 9595995,
                    email = "kunde@kunde.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Firma1",
                    telefax = 999999,
                    fakturaAddress = "fakAdresse"
                };

                var kunde2 = new Kunde()
                {
                    fornavn = "Arock",
                    etternavn = "Star",
                    telefon = 77734969,
                    email = "rockstar@kunde.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Firma1",
                    telefax = 999999,
                    fakturaAddress = "fakAdresse"
                };

                var kunde3 = new Kunde()
                {
                    fornavn = "Franz",
                    etternavn = "Jeger",
                    telefon = 9595995,
                    email = "jeger@kunde.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Firma1",
                    telefax = 999999,
                    fakturaAddress = "fakAdresse"
                };


                var kunde4 = new Kunde()
                {
                    fornavn = "Bob",
                    etternavn = "Marley",
                    telefon = 9595995,
                    email = "bob@kunde.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 1,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Firma1",
                    telefax = 999999,
                    fakturaAddress = "fakAdresse"
                };

                var kunde5 = new Kunde()
                {
                    fornavn = "The",
                    etternavn = "Don",
                    telefon = 9595995,
                    email = "rassmus@kunde.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 1,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Firma1",
                    telefax = 999999,
                    fakturaAddress = "fakAdresse"
                };

                var kunde6 = new Kunde()
                {
                    fornavn = "Rambo",
                    etternavn = "Ammok",
                    telefon = 9595995,
                    email = "rambo@kunde.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 1,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Firma1",
                    telefax = 999999,
                    fakturaAddress = "fakAdresse"
                };


                var kunde7 = new Kunde()
                {
                    fornavn = "Albert",
                    etternavn = "Einstein",
                    telefon = 9595995,
                    email = "alberit@einstein.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Firma1",
                    telefax = 999999,
                    fakturaAddress = "fakAdresse"
                };

                var jessheim = db.Poststeder.Find(2050);
                var gardermoden = db.Poststeder.Find(2060);
                var lillehammer = db.Poststeder.Find(2061);
                kunde.poststed = jessheim;
                kunde2.poststed = gardermoden;
                kunde3.poststed = jessheim;
                kunde4.poststed = jessheim;
                kunde5.poststed = gardermoden;
                kunde6.poststed = jessheim;
                kunde7.poststed = jessheim;

                db.Personer.Add(kunde);
                db.Personer.Add(kunde2);
                db.Personer.Add(kunde3);
                db.Personer.Add(kunde4);
                db.Personer.Add(kunde5);
                db.Personer.Add(kunde6);
                db.Personer.Add(kunde7);
                db.SaveChanges();



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
                tolk3.poststed = jessheim;
                tolk4.poststed = jessheim;

                tolk1.spraak = new List<Spraak>();
                tolk2.spraak = new List<Spraak>();
                tolk3.spraak = new List<Spraak>();
                tolk4.spraak = new List<Spraak>();
                for (int i = 1; i < 10; i++)
                {
                    tolk1.spraak.Add(db.Spraak.Find(i));
                }
                for (int i = 1; i < 10; i++)
                {
                    tolk2.spraak.Add(db.Spraak.Find(i));
                }
                for (int i = 1; i < 20; i++)
                {
                    tolk3.spraak.Add(db.Spraak.Find(i));
                }
                for (int i = 20; i < 40; i++)
                {
                    tolk4.spraak.Add(db.Spraak.Find(i));
                }

                db.SaveChanges();


                db.Personer.Add(tolk1);
                db.Personer.Add(tolk2);
                db.Personer.Add(tolk3);
                db.Personer.Add(tolk4);

                db.SaveChanges();

                
                var oppdrag1 = new Tolking_vm()
                {
                    oppdragsdato = DateTime.Now.AddDays(1).ToString("dd-MM-yyyy"),
                    dato = "12-07-2017",
                    fraspraak = 21,
                    tilspraak = 22,
                    andreopplysninger = "Dette er andre opplysninger",
                    typetolk = "Telefontolk",
                    oppmoteadresse = "HIOA pilestredet 35",
                    frakl = "13:15",
                    tilkl = "14:15"
                };

                var oppdrag2 = new Tolking_vm()
                {
                    oppdragsdato = DateTime.Now.AddDays(2).ToString("dd-MM-yyyy"),
                    dato = "12-07-2017",
                    fraspraak = 1,
                    tilspraak = 2,
                    andreopplysninger = "Dette er andre opplysninger",
                    typetolk = "Fremmedmøte",
                    oppmoteadresse = "HIOA pilestredet 35",
                    frakl = "10:15",
                    tilkl = "12:15"
                };

                var oppdrag3 = new Tolking_vm()
                {
                    oppdragsdato = DateTime.Now.AddDays(1).ToString("dd-MM-yyyy"),
                    dato = "12-07-2017",
                    fraspraak = 4,
                    tilspraak = 3,
                    andreopplysninger = "Dette er andre opplysninger",
                    typetolk = "Telefontolk",
                    oppmoteadresse = "HIOA pilestredet 35",
                    frakl = "11:15",
                    tilkl = "13:15"
                };

                var oppdrag4 = new Tolking_vm()
                {
                    oppdragsdato = DateTime.Now.AddDays(4).ToString("dd-MM-yyyy"),
                    dato = "12-07-2017",
                    fraspraak = 5,
                    tilspraak = 6,
                    andreopplysninger = "Dette er andre opplysninger",
                    typetolk = "Telefontolk",
                    oppmoteadresse = "HIOA pilestredet 35",
                    frakl = "11:15",
                    tilkl = "13:15"
                };

                var oppdrag5 = new Tolking_vm()
                {
                    oppdragsdato = DateTime.Now.AddDays(5).ToString("dd-MM-yyyy"),
                    dato = "12-07-2017",
                    fraspraak = 7,
                    tilspraak = 8,
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
                int[] tolkId = { 9 };
                de.regEnForesporselPåEnEllerFlereTolk(tolkId, 1);
                //de.regEnForesporselPåEnEllerFlereTolk(tolkId, 6);
                db.SaveChanges();
                o.regOppdragPaaEnTolk(1, 9, "ja");

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