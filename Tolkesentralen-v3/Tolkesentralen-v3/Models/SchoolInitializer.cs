using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.Models
{
    public class SchoolInitializer : System.Data.Entity.DropCreateDatabaseIfModelChanges<DbNetcont>
    {
        protected override void Seed(DbNetcont db)
        {
            var sp1 = new Spraak
            {
                navn = "norsk"
            };
            var admin = new Admin
            {
                fornavn = "Hussen",
                etternavn = "Ali",
                email = "h@hotmail.com",
                adresse = "tøyen",
                regDato = DateTime.Parse("2005-09-01"),
               // password = "1111",
                adminNr ="a1"

            };

            var tolk = new Tolk
            {
                fornavn = "Hussen",
                etternavn = "Ali",
                email = "h@hotmail.com",
                adresse = "tøyen",
                regDato = DateTime.Parse("2005-09-01"),
               // password = "1111",
<<<<<<< HEAD
                //tolkNr = "t1",
=======
                
>>>>>>> c113ef50d8a672acdffdfcbc3fd70e4eaeca7f78
                spraak = new List<Spraak>()
                {
                    new Spraak()
                    {
                        navn = "norsk"

                    }
                }
              
            };
            
            var kunde = new Kunde
            {
                fornavn = "Hussen",
                etternavn = "Ali",
                email = "h@hotmail.com",
                adresse = "stovner",
                regDato = DateTime.Parse("2005-09-01"),
               // password = "1111",
                
            };

            db.Personer.Add(admin);
            db.Personer.Add(tolk);
            db.Personer.Add(kunde);
            db.SaveChanges();


        }
           
        }



    }
