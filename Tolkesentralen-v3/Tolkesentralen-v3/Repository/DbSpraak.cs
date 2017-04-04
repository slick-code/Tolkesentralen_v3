using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.Repository
{
    public class DbSpraak
    {
        DbNetcont db = new DbNetcont();

        public bool RegSpraak(Spraak nyttSpraak)
        {
            Spraak spraak = db.Spraak.Find(nyttSpraak.navn);
            if (spraak ==null)
            {
               
                db.Spraak.Add(nyttSpraak);
                db.SaveChanges();
            }else
            {
                var nySpraak = new Spraak()
                {
                    navn = nyttSpraak.navn,

                };

                return true;

            }

            return false;
        }
        public bool regTolkOppdrag(Spraak sp, int tolkId)
        {

            Tolk tolk = db.Personer.OfType<Tolk>().FirstOrDefault(k => k.persId == tolkId);
            if (tolk != null)
            {
                

                if (sp != null)
                {
                    tolk.spraak.Add(sp);
                }
                else
                {
                    return false;
                }
                db.SaveChanges();

                return true;
            }


            return false;
        }
        public List<Spraak> ListSpraak()
        {

            return db.Spraak.ToList();
        }



    }
}