using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CqrsWebApiSample.Api.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return new RedirectResult("index.html", true);
        }

    }
}