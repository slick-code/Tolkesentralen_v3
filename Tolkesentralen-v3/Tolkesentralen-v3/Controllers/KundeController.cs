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
        DbPerson repository = new DbPerson();


        public HttpResponseMessage Put([FromBody]string email)
        {
            if (ModelState.IsValid)
            {
                bool OK = repository.OppdaterTilGodkjentKunde(email);
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
            List<Kunde_vm> liste = repository.ListeAlleKunder(0);

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
            List<Kunde_vm> liste = repository.ListeAlleKunder(1);

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(liste);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        [System.Web.Mvc.HttpPost]
        public HttpResponseMessage Post([FromBody]Kunde_vm ny)
        {
            Kunde_vm test = ny;
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
    }
}
