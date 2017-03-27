using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.Models
{
    public class DBContextInitializer : CreateDatabaseIfNotExists<DbNetcont>
    {
        protected override void Seed(DbNetcont db)
        {
            var res = new DbPerson();
            var saltAdmin = res.lagSalt();
            var saltKunde = res.lagSalt();
            var saltTolk = res.lagSalt();

            try
            {
                

                db.Poststeder.Add(new Poststed() { postNr = 2050, postSted = "Jessheim" });
                db.Poststeder.Add(new Poststed() { postNr = 2060, postSted = "Gardermoen" });
                db.Poststeder.Add(new Poststed() { postNr = 2601, postSted = "Lillehammer" });
                db.SaveChanges();

                //Poststed errorfix = db.Poststeder.Find("2050");

                var kunde = new Kunde() {
                    fornavn = "KundeFornavn",
                    etternavn = "KundeEtternavn",
                    tlf = 9595995,
                    email = "kunde@kunde.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde,
                    firma = "Firma1",
                    kontaktperson = "Kontaktperson",
                    telefax = 999999,
                    fakturaAddress = "fakAdresse",
                    
                };

                var poststed = db.Poststeder.Find(2050);
                kunde.poststed = poststed;


                var admin = new Admin()
                {
                    fornavn = "AdminFornavn",
                    etternavn = "AdminEtternavn",
                    tlf = 9595995,
                    email = "admin@admin.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde
                };
                

                var tolk = new Tolk()
                {
                    fornavn = "TolkFornavn",
                    etternavn = "TolkEtternavn",
                    tlf = 9595995,
                    email = "tolk@tolk.no",
                    adresse = "addresse1",
                    regDato = DateTime.Now,
                    godkjent = 0,
                    password = res.lagHash("1234" + saltKunde),
                    Salt = saltKunde
                };

                db.Personer.Add(kunde);
                db.Personer.Add(admin);
                db.Personer.Add(tolk);
                db.SaveChanges();
            }
            catch (Exception e)
            {
                var breakpoint = e;
            }


        }

    }
}