

using System.Web.Http;
using Tolkesentralen_v3.Repository;

namespace Tolkesentralen_v3
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);
            //var a = new Class1();

        }
    }
}
