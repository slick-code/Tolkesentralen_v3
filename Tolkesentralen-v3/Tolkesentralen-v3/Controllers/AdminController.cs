using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;
using Tolkesentralen_v3.Repository;

namespace Tolkesentralen_v3.Controllers
{
    public class AdminController : ApiController
    {
        OppdragRepository funk = new OppdragRepository();

        public HttpResponseMessage Get()
        {
            var counter = funk.getCount();

            var Json = new JavaScriptSerializer();
            string JsonString = Json.Serialize(counter);

            return new HttpResponseMessage()
            {
                Content = new StringContent(JsonString, Encoding.UTF8, "application/json"),
                StatusCode = HttpStatusCode.OK
            };
        }
    }
}
