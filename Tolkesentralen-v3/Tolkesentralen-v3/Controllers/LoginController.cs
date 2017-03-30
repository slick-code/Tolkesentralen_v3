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
            if (1 == 1)//(ModelState.IsValid)
            {
                Get_Login_VM output = repository.AutoriserOgReturnerBruker(input.brukernavn, input.passord);
                if (output != null)
                {
                    return Request.CreateResponse(HttpStatusCode.Created, output);
                }
            }
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                // Midlertidlig løsning. Her må vi sende tilbake et resultat på hva som gikk galt
                Content = new StringContent("Autorisering returnerte null")
            };
        }
    }
}
