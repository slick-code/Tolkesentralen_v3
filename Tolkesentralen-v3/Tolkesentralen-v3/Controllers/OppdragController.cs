using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Tolkesentralen_v3.Models;

namespace Tolkesentralen_v3.Controllers
{
    public class OppdragController : ApiController
    {
        DbOppdrag repository = new DbOppdrag();


        //public HttpResponseMessage Get()
        //{
        //    List<FKunde> liste = repository.listOppdrag();

        //    var Json = new JavaScriptSerializer();
        //    string JsonString = Json.Serialize(liste);

        //    return new HttpResponseMessage()
        //    {
        //        Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
        //        StatusCode = HttpStatusCode.OK
        //    };
        //}

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
