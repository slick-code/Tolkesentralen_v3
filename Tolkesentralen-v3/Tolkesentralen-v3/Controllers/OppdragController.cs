﻿using System;
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
        public HttpResponseMessage Post([FromBody]Oppdrag_VM input)
        {
            var breakpoint = "break";
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.OK
            };


            if (ModelState.IsValid)
            {
                //bool OK = repository.regOppdragF(input, id);
                bool OK;
                if (input.sted.Equals("Jessheim")) OK = true; else OK = false;

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


        public HttpResponseMessage Get()
        {
            var liste = new List<Oppdrag_VM>();
            var output = new Oppdrag_VM
            {
                dato = "12-12-2017",
                sted = "Jessheim",
                tid = "13:00",
                type = "Fremmedmøtetolk",
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
