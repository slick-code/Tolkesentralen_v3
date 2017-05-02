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

        [Route("api/tolk/GetTolk/{id}")]
        public HttpResponseMessage GetTolk(int id)
        {
            //List<Tolking_vm> liste = repository.listOppdragMedTolkId(tolkID);
            Tolk_VM tolk = repository.hentEnTolk(id);


            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(tolk);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        [Route("api/tolk/UpdateTolk")]
        [System.Web.Mvc.HttpPost]
        public HttpResponseMessage UpdateTolk([FromBody]Tolk_VM tolk)
        {
            bool ok = repository.OppdaterTolk(tolk);
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

        [Route("api/tolk/returnTolk")]
        [System.Web.Mvc.HttpPost]
        public HttpResponseMessage Post([FromBody]SpraakID input)
        {
            List<Tolk_VM> liste = repository.ListeAlleTolkSomSnakkeDetSprrak(input.fraspraak, input.tilspraak);
            
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

        [Route("api/tolk/PostUtilgjengelig")]
        [System.Web.Mvc.HttpPost]
        public HttpResponseMessage PostUtilgjengelig([FromBody]Utilgjengelig_ViewModel input)
        {
            var db = new DbPerson();
            bool ok = db.setUtilgjengelig(input);
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
            bool ok;
            //bool ok = db.regEnForesporselPåEnEllerFlereTolk(tolkIDs.tolkArrey, tolkIDs.oppdragId);
            if (input.svar == 1)
            {
                // Hvis tolk svarer ja
                ok = db.regOppdragPaaEnTolk(input.oppdragId, input.tolkID, "ja");
            }
            else
            {
                // Hvis tolk svarer ja
                // ok = dbFunkjson
                ok = true;
            }
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

        [Route("api/tolk/GetPerioderUtilgjenelig/{id}")]
        public HttpResponseMessage GetPerioderUtilgjenelig(int id)
        {
            var repository = new DbPerson();

            List<Utilgjengelig_ViewModel> liste = repository.getUtilgjengelig(id);
            
            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(liste);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }

        [HttpDelete]
        public HttpResponseMessage Delete(int id)
        {
            bool OK = repository.slettPeriodeUtilgjengelig(id);

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



    }


}
