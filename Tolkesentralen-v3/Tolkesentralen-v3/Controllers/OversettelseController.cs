using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;
using Tolkesentralen_v3.Models;
using Tolkesentralen_v3.Repository;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Controllers
{
    public class OversettelseController : ApiController
    {
        // Hent alle oversettelser som er behandlet
        // Hent alle oversettelser som ikke er behandlet
        // Hent alle oversettelser til kunde ID
        // Lagre et oversettelser fra Kunde
        // Lagre et oversettelser fra Anonym
        // Slett et oversettelser med gitt ID

        DbOversettelse repository = new DbOversettelse();

        [System.Web.Mvc.HttpPost]
        [Route("api/oversettelse/PostOppdragFraKunde")]
        public HttpResponseMessage PostOppdragFraKunde([FromBody]Oversettelse_VM input)
        {
            if (ModelState.IsValid)
            {
                bool OK = repository.LagreOppdragAvTypeOversettelse(input);

                if(true)
                {
                    return new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
                    };

                }
            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent("Søknaden ble ikke lagret!")
            };
        }

        // Hent alle behandlede OG ubehandlede oversettelser til gitt Kunde
        public HttpResponseMessage Get(int id)
        {
            var liste = new[] { new { fraspraak = "spansk", tilspraak = "engelsk" } };

            //List<FKunde> liste = repository.listOppdrag();

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(liste);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        // Admin skal hente alle forespørsler (Ubehandlede oppdrag som skal deles ut til tolk)
        [Route("api/oversettelse/GetUbehandlet")]
        public HttpResponseMessage GetUbehandlet()
        {
            var liste = new List<Tolking_vm>();
            var output = new Tolking_vm
            {
                dato = "12-12-2017",
                //sted = "Jessheim",
                frakl = "13:00",
                typetolk = "Fremmedmøtetolk",
                fraspraak = "Spansk",
                tilspraak = "Norsk"
            };
            liste.Add(output);

            //List<FKunde> liste = repository.listOppdrag();

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(liste);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

    }
    
}
