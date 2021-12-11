using BL;
using DTO.tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;
using System.IO;

namespace API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class FilesController : ApiController 
    {
        // GET api/Files
        [HttpPost]
        //[Route("UploadFile")]
        public void UploadFile()
        {
            for (int i = 0; i < HttpContext.Current.Request.Files.Count; i++)
            {


                var file = HttpContext.Current.Request.Files[i];
                if (file != null && file.ContentLength > 0)
                {
                    var fileName = Path.GetFileName(file.FileName);
                    var path = Path.Combine(HttpContext.Current.Server.MapPath("~/uploads"), fileName);
                    file.SaveAs(path);
                }
            }
        }
    }
   

    
}
