using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;
using Tolkesentralen_v3.Models;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Controllers
{
    public class KundeController : ApiController
    {
        
        // Post   -> Når en kunde registerer seg skal kunden registreres som ikke godkjent
        // Put    -> Admin skal oppdatere kunden-med-ID til Godkjent 
        // Delete -> Admin skal kunne slette kunden-med-ID
        // Get    -> Admin skal kunne hente alle kunder som IKKE er godkjent
        // Get    -> Admin skal kunne hente alle kunder som ER godkjent
        // Get    -> Det skal kunne hentes ut all informasjon til spesifisert kunde-med-ID
        // Get    -> Hent alle kunder som IKKE er behandlet/godkjent
        // Get    -> Hent alle kunder som ER behandlet/godkjent
      
        DbPerson repository = new DbPerson();

        public HttpResponseMessage Put(int id)
        {
            if (ModelState.IsValid)
            {
                bool OK = repository.OppdaterTilGodkjentKunde(id);
                if (OK)
                {
                    return new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.OK
                    };
                }
            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.NotFound,
                Content = new StringContent("Kunne ikke endre kunden i DB")
            };

        }

        [Route("api/kunde/getN")]
        [HttpGet]
        public HttpResponseMessage GetN()
        {
            List<Kunde_VM> liste = repository.ListeAlleKunder(0);

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(liste);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        public HttpResponseMessage Get()
        {
            List<Kunde_VM> liste = repository.ListeAlleKunder(1);

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(liste);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        [System.Web.Mvc.HttpPost]
        public HttpResponseMessage Post([FromBody]Kunde_VM ny)
        {
            var test = ny;
            if (ModelState.IsValid)
            {
                bool OK = repository.settInnKunde(ny);

                if (OK)
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

        [HttpDelete]
        public HttpResponseMessage Delete(int id) {
            bool OK = repository.slettPerson(id);

            if (OK)
            {
                return new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.OK
                };

            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent("Søknaden ble ikke lagret!")
            };
        }

        [System.Web.Mvc.HttpPost]
        [Route("api/kunde/SjekkOmEpostEksisterer")]
        public HttpResponseMessage SjekkOmEpostEksisterer([FromBody]string epost)
        {
            if (ModelState.IsValid)
            {
                bool epostErAlleredeLagret = repository.SjekkOmEpostEksisterer(epost);

                if (!epostErAlleredeLagret)
                {
                    return new HttpResponseMessage()
                    {
                        StatusCode = HttpStatusCode.Accepted
                    };
                }else
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



    }
  }


