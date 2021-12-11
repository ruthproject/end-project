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
using BL.FolderBL;

namespace API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class MailsController : ApiController 
    {
        // GET api/Mails
        [HttpPost]
        public void Post(MailDTO mail)
        {

             new MailBL().SendMail(mail);
        }
    }
   

    
}
