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
    public class OppdragController : ApiController
    {
        // Lagre et oppdrag fra Kunde
        // Lagre et oppdrag fra Anonym
        // Hent alle oppdrag som er behandlet
        // Hent alle oppdrag som ikke er behandlet
        // Hent alle oppdrag til kunde ID
        // Slett et oppdrag med gitt ID

        DbOppdrag repository = new DbOppdrag();

        [System.Web.Mvc.HttpPost]

        [Route("api/oppdrag/PostOppdragFraKunde")]
        public HttpResponseMessage PostOppdragFraKunde([FromBody]Tolking_vm input)
        {
            if (ModelState.IsValid)
            {
                bool OK = repository.regTolkOppdrag(input, input.kundeID);

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

        // Person må være med i ViewModellen, siden oppdraget er fra en anonym (Ikke registert)
        //[System.Web.Mvc.HttpPost]
        //[Route("api/oppdrag/PostOppdragFraAnonym")]
        //public HttpResponseMessage PostOppdragFraAnonym([FromBody]Fremmaate_vm input)

        //public HttpResponseMessage Post([FromBody]Tolking_vm input)

        //{

        //    if (ModelState.IsValid)
        //    {

        //        bool OK = repository.regOppdrag_Fremmaate(input);


        //        bool OK = repository.regTolkOppdrag(input,input.kundeID);
               

        //        {
        //            return new HttpResponseMessage()
        //            {
        //                StatusCode = HttpStatusCode.OK
        //            };

        //        }
        //    }
        //    return new HttpResponseMessage()
        //    {
        //        StatusCode = HttpStatusCode.BadRequest,
        //        Content = new StringContent("Søknaden ble ikke lagret!")
        //    };
        //}

        // Admin skal hente alle forespørsler (Ubehandlede oppdrag som skal deles ut til tolk)
        [Route("api/oppdrag/GetUbehandlet")]
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

        // Hent alle behandlede OG ubehandlede oppdrag gitt Kunde
        public HttpResponseMessage Get(int id)
        {
            var liste = new List<Tolking_vm>();
            var output = new Tolking_vm
            {
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

        // Denne er litt tricky siden vi må liste ut alle tolker som har mottat forespørsel
        [Route("api/oppdrag/GetBehandlet")]
        public HttpResponseMessage GetBehandlet()
        {

            var liste = new List<Oppdrag_VM>();
            var output = new Oppdrag_VM
            {
                dato = "12-12-2017",
                //sted = "Jessheim",
                //tid = "13:00",
                //typetolk = "Fremmedmøtetolk",
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

        //[System.Web.Mvc.HttpPost]
        //public HttpResponseMessage Post([FromBody]Kunde_vm ny)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        bool OK = repository.settInnKunde(ny);

        //        if (OK)
        //        {
        //            return new HttpResponseMessage()
        //            {
        //                StatusCode = HttpStatusCode.OK
        //            };

        //        }
        //    }
        //    return new HttpResponseMessage()
        //    {
        //        StatusCode = HttpStatusCode.BadRequest,
        //        Content = new StringContent("Søknaden ble ikke lagret!")
        //    };
        //}
    }
}
