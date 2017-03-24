using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;
using Tolkesentralen_v3.Models;

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



        //public class KundeController : ApiController
        //{
        //    DbOppdrag repository = new DbOppdrag();

        //    public HttpResponseMessage Get()
        //    {
        //        //List<kunde> alleKunder = kundeDb.hentAlleKunder();

        //        var Json = new JavaScriptSerializer();
        //        //string JsonString = Json.Serialize(alleKunder);
        //        string JsonString = "";

        //        return new HttpResponseMessage()
        //        {
        //            Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
        //            StatusCode = HttpStatusCode.OK
        //        };
        //    }

            //// GET api/Kunde/5
            //public HttpResponseMessage Get(int id)
            //{
            //    //kunde enKunde = kundeDb.hentEnKunde(id);

            //    var Json = new JavaScriptSerializer();
            //    string JsonString = Json.Serialize(enKunde);

            //    return new HttpResponseMessage()
            //    {
            //        Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
            //        StatusCode = HttpStatusCode.OK
            //    };
            //}

            //// POST api/Kunde
            //[HttpPost]
            //public HttpResponseMessage Post([FromBody]kunde innKunde)
            //{

            //    if (ModelState.IsValid)
            //    {
            //        bool OK = kundeDb.lagreEnKunde(innKunde);
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
            //        Content = new StringContent("Kunne ikke sette inn kunden i DB")
            //    };
            //}

            //// PUT api/Kunde/5
            //public HttpResponseMessage Put(int id, [FromBody]kunde innKunde)
            //{
            //    if (ModelState.IsValid)
            //    {
            //        bool OK = kundeDb.endreEnKunde(id, innKunde);
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
            //        StatusCode = HttpStatusCode.NotFound,
            //        Content = new StringContent("Kunne ikke endre kunden i DB")
            //    };

            //}

            //// DELETE api/Kunde/5
            //public HttpResponseMessage Delete(int id)
            //{
            //    bool OK = kundeDb.slettEnKunde(id);
            //    if (!OK)
            //    {
            //        return new HttpResponseMessage()
            //        {
            //            StatusCode = HttpStatusCode.NotFound,
            //            Content = new StringContent("Kunne ikke slette kunden i DB")
            //        };
            //    }
            //    return new HttpResponseMessage()
            //    {
            //        StatusCode = HttpStatusCode.OK
            //    };
            //}
        }
    
}
