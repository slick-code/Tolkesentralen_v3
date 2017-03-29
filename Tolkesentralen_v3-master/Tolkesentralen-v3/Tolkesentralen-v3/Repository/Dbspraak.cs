using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.Repository
{
    public class Dbspraak
    {
        DbNetcont db = new DbNetcont();
        public bool RegSpraak(Spraak nyttSpraak)
        {
            if (nyttSpraak !=null)
            {

                db.Spraak.Add(nyttSpraak);
                db.SaveChanges();


                return true;
            }

            return false;
        }

        public List<Spraak> ListSpraak()
        {
            List<Spraak> liste = db.Spraak.ToList();

            db.SaveChanges();
            return liste;
        }

    }
}