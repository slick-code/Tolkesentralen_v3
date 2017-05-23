using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Tolkesentralen_v3.ViewModels;

namespace Tolkesentralen_v3.Controllers
{
public class DemoController : ApiController
{
    public HttpResponseMessage Post([FromBody]ViewModel input)
    {
        // bool OK = repository.Lagre(id);
        return new HttpResponseMessage() { };
    }

    public HttpResponseMessage Get(int id)
    {
        // var objekt = repository.Hent(id);
        return new HttpResponseMessage() { };
    }

    public HttpResponseMessage Get()
    {
        // var liste = repository.Hent();
        return new HttpResponseMessage() { };
    }

    public HttpResponseMessage Put(int id)
    {
        // bool OK = repository.Oppdater(id);
        return new HttpResponseMessage(){};
    }

    public HttpResponseMessage Delete(int id)
    {
        // bool OK = repository.Slett(id);
        return new HttpResponseMessage() { };
    }
}
}
