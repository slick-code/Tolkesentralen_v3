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
    public class OppdragController : ApiController
    {
        // Lagre et oppdrag fra Kunde
        // Lagre et oppdrag fra Anonym
        // Hent alle oppdrag som er behandlet
        // Hent alle oppdrag som ikke er behandlet
        // Hent alle oppdrag til kunde ID
        // Slett et oppdrag med gitt ID

        DbOppdrag repository = new DbOppdrag();
        OppdragRepository funk = new OppdragRepository();

        [System.Web.Mvc.HttpPost]
<<<<<<< HEAD
        public HttpResponseMessage Post([FromBody]Tolking_vm input) //metode fot å bestille oppdrag av typen tolk

=======
        [Route("api/oppdrag/PostOppdragFraKunde")]
        public HttpResponseMessage PostOppdragFraKunde([FromBody]Tolking_vm input)
>>>>>>> c113ef50d8a672acdffdfcbc3fd70e4eaeca7f78
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

<<<<<<< HEAD

        public HttpResponseMessage Get(int kundeID) //metode for å liste ut alle oppdrag_tolk som tilhører en kunde
        {
            List<Tolking_vm> utListe = repository.listTolkOppdragMedKundeId(kundeID);
=======
        
        [Route("api/oppdrag/GetForesposlerTilTolk/{id}")]
        public HttpResponseMessage GetForesposlerTilTolk(int id)
        {
            //List<Tolking_vm> liste = funk.hentAlleBehandledeOppdrag();
            List<Tolking_vm> liste = new List<Tolking_vm>();

            var output = new Tolking_vm
            {
                kundeID = 1,
                oppdragID = 1,
                frakl = "12:15",
                tilkl = "13:15",
                oppdragsdato = "12-07-2017",
                typetolk = "Fremmedmøtetolk",
                fraspraak = "Spansk",
                tilspraak = "Norsk"
            };
            liste.Add(output);

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(liste);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
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

            List<Tolking_vm> liste = funk.hentAlleBehandledeOppdrag();

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
            //var liste = new List<Tolking_vm>();
            //var output = new Tolking_vm
            //{
            //    typetolk = "Fremmedmøtetolk",
            //    fraspraak = "Spansk",
            //    tilspraak = "Norsk"
            //};
            //liste.Add(output);
            var liste = repository.listOppdragMedKundeId(id);

            //List<FKunde> liste = repository.listOppdrag();
>>>>>>> c113ef50d8a672acdffdfcbc3fd70e4eaeca7f78

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(utListe);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }
<<<<<<< HEAD
=======

        // Denne er litt tricky siden vi må liste ut alle tolker som har mottat forespørsel
        [Route("api/oppdrag/GetBehandlet")]
        public HttpResponseMessage GetBehandlet()
        {
            List<Tolking_vm> liste = repository.listOppdragTolkUbehandlett();

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
>>>>>>> c113ef50d8a672acdffdfcbc3fd70e4eaeca7f78
    }
}