using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
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
        DbForessporsel dbForesp = new DbForessporsel();
        OppdragRepository funk = new OppdragRepository();

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

        [System.Web.Mvc.HttpPost]
        [Route("api/oppdrag/File")]
        public HttpResponseMessage Post()
        {
            if (!Request.Content.IsMimeMultipartContent())
            {
               // var fileName = Path.GetFileName(file.FileName);
                //var path = Path.Combine(HttpContext.Current.Server.MapPath("~/uploads"), fileName);
                //file.SaveAs(path);


                return new HttpResponseMessage()
                {
                    StatusCode = HttpStatusCode.BadRequest,
                    
                };

            }
            var httpRequest = HttpContext.Current.Request;
            var filenavn =  "første fil: " +httpRequest.Files[0].FileName + "andrefil:" +httpRequest.Files[1].FileName;
            
            var Json = new JavaScriptSerializer();
            return new HttpResponseMessage()
            {
                Content = new StringContent(Json.Serialize(filenavn), Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK

            };


        }


        [Route("api/oppdrag/GetForesposlerTilTolk/{id}")]
        public HttpResponseMessage GetForesposlerTilTolk(int id)
        {

            DbForessporsel f = new DbForessporsel();
            List<Tolking_vm> liste = f.listTolkForesporslerMedID(id);

            
            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(liste);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        //[Route("api/oppdrag/GetForesposlerSendt")]
        //public HttpResponseMessage GetForesposlerSendt()
        //{
        //    DbForessporsel f = new DbForessporsel();
        //    List<Tolking_vm> liste = f.listTolkForesporslerMedID();
            
        //    var Json = new JavaScriptSerializer();
        //    string JsonString = Json.Serialize(liste);

        //    return new HttpResponseMessage()
        //    {
        //        Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
        //        StatusCode = HttpStatusCode.OK
        //    };
        //}

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

            List<Tolking_vm> liste = repository.listOppdragTolkUbehandlett();

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
            List<Tolking_vm> liste = repository.listOppdragTolkSendt();

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(liste);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]int[] TolkId, int id)
        {
            if (ModelState.IsValid)
            {
                bool OK = dbForesp.regEnForesporselPåEnEllerFlereTolk(TolkId, id);

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


        //regstrerer oppdrag på en tolk
        [Route("api/oppdrag/regOppdragPaaEnTolk/{id}/{tolkId}")]
        [HttpPost]
        public HttpResponseMessage regOppdragPaaEnTolk(int fsp,int tolkId)
        {

            if (ModelState.IsValid)
            {
                bool OK = repository.regOppdragPaaEnTolk(fsp,tolkId);

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

        [HttpGet]
        [Route("api/oppdrag/listAlleTolkMedForesporselID/{id}")]
        public HttpResponseMessage listAlleTolkMedForesporselID(int id)     //ok
        {

            List<Person_VM> liste = dbForesp.listAlleTolkMedForesporselID(id);

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