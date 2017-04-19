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
    public class TolkController : ApiController
    {
        DbPerson repository = new DbPerson();

        public HttpResponseMessage Get(int id)
        {
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.OK
            };
        }

        [Route("api/tolk/returnTolk")]
        [System.Web.Mvc.HttpPost]
        public HttpResponseMessage Post([FromBody]SpraakID input)
        {
            List<Tolk_VM> liste = repository.ListeAlleTolkSomSnakkeDetSprrak(input.fraspraak, input.tilspraak);


            //var tolk1 = new Tolk_VM()
            //{
            //    persId = 123,
            //    fornavn = "Rambo",
            //    etternavn = "Ammok",
            //    tlf = 9595995,
            //    email = "rambo@kunde.no",
            //    adresse = "addresse1",
            //    //regDato = DateTime.Now
            //    //spraak = {}
            //};

            //var tolk2 = new Tolk_VM()
            //{
            //    persId = 124,
            //    fornavn = "Alex",
            //    etternavn = "Brettum",
            //    tlf = 7775995,
            //    email = "rambo@kunde.no",
            //    adresse = "addresse1",
            //    //regDato = DateTime.Now
            //    //spraak = {}
            //};

            //var tolk3 = new Tolk_VM()
            //{
            //    persId = 125,
            //    fornavn = "Billy",
            //    etternavn = "Blanko",
            //    tlf = 1595777,
            //    email = "rambo@kunde.no",
            //    adresse = "addresse1",
            //    //regDato = DateTime.Now
            //    //spraak = {}
            //};
            //var liste = new List<Tolk_VM>();
            //liste.Add(tolk1);
            //liste.Add(tolk2);
            //liste.Add(tolk3);
            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(liste);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        [Route("api/tolk/PostForesposler")]
        [System.Web.Mvc.HttpPost]
        public HttpResponseMessage PostForesposler([FromBody]Utdel tolkIDs)
        {
            var db = new DbForessporsel();
            bool ok = db.regEnForesporselPåEnEllerFlereTolk(tolkIDs.tolkArrey, tolkIDs.oppdragId);
            if (ok)
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

        [Route("api/tolk/PostSvar")]
        [System.Web.Mvc.HttpPost]
        public HttpResponseMessage PostSvar([FromBody]Svar input)
        {
            var db = new DbOppdrag();
            //bool ok = db.regEnForesporselPåEnEllerFlereTolk(tolkIDs.tolkArrey, tolkIDs.oppdragId);
            db.regOppdragPaaEnTolk(input.oppdragId, input.tolkID);
            bool ok = true;
            if (ok)
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

    }


}
