using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.Repository
{
    public class DbSpraak
    {
        DbNetcont db = new DbNetcont();

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	Registers the spraak described by nyttSpraak. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="nyttSpraak">	The nytt spraak. </param>
        ///
        /// <returns>	True if it succeeds, false if it fails. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public bool RegSpraak(Spraak nyttSpraak)
        {
			try
			{
				Spraak spraak = db.Spraak.Find(nyttSpraak.navn);
				if (spraak == null)
				{

					db.Spraak.Add(nyttSpraak);
					db.SaveChanges();
				}
				else
				{
					var nySpraak = new Spraak()
					{
						navn = nyttSpraak.navn,

					};

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
        /// <summary>	Registers the tolk oppdrag. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <param name="sp">	 	The sp. </param>
        /// <param name="tolkId">	Identifier for the tolk. </param>
        ///
        /// <returns>	True if it succeeds, false if it fails. </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public bool regTolkOppdrag(Spraak sp, int tolkId)
        {
			try
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
			catch (Exception feil)
			{
				Debug.WriteLine("Exception Message: " + feil.Message);
				return false;
			}
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////
        /// <summary>	List spraak. </summary>
        ///
        /// <remarks>	Mojola, 19/05/2017. </remarks>
        ///
        /// <returns>	A List&lt;Spraak&gt; </returns>
        ////////////////////////////////////////////////////////////////////////////////////////////////////

        public List<Spraak> ListSpraak()
        {
			try
			{
				return db.Spraak.ToList();
			}
			catch (Exception feil)
			{
				Debug.WriteLine("Exception Message: " + feil.Message);
				return null;
			}
        }



    }
}