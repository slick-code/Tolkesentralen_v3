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
        DbOppdrag repository = new DbOppdrag();

        [System.Web.Mvc.HttpPost]
        public HttpResponseMessage Post([FromBody]Tolking_vm input) //metode fot å bestille oppdrag av typen tolk

        {

            if (ModelState.IsValid)
            {
                bool OK = repository.regTolkOppdrag(input,input.kundeID);
               
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


        public HttpResponseMessage Get(int kundeID) //metode for å liste ut alle oppdrag_tolk som tilhører en kunde
        {
            List<Tolking_vm> utListe = repository.listTolkOppdragMedKundeId(kundeID);

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(utListe);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }
    }
}
