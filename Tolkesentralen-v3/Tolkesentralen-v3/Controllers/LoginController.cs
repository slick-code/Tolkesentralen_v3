using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Tolkesentralen_v3.Models;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Controllers
{
    public class LoginController : ApiController
    {
        DbPerson repository = new DbPerson();
        
        [System.Web.Mvc.HttpPost]
        public HttpResponseMessage Post([FromBody]Post_Login_VM input)
        {
            if (ModelState.IsValid)
            {
                Get_Login_VM response = repository.AutoriserOgReturnerBruker(input.brukernavn, input.passord);
                if (response != null)
                {
                    if (response.godkjent)  return Request.CreateResponse(HttpStatusCode.Accepted, response);
                    
                    return Request.CreateResponse(HttpStatusCode.Unauthorized, response);
                }
            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent("Autorisering returnerte null")
            };
        }
    }
}
