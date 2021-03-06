using BL;
using DAL.FolderDAL;
using DTO.tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace API.Controllers
{
    [EnableCors(origins:"*",headers:"*",methods:"*")]
    public class AssistantsController : ApiController
    {
        // GET api/Assistants
        
        public IEnumerable<TAssistantDTO> Get()
        {
            
            return new AssistantBL().GetAll();
        }

        // GET api/Assistant
        public TAssistantDTO Get(int id)
        {
            return new AssistantBL().GetAssistantById(id);
        }
        // GET api/Assistant
        [HttpGet]
        public IEnumerable<ass_by_manager_ResultDTO> GetByManger(int id)
        {
            return new AssistantBL().GetAssistantByManger(id);
        }
        public IEnumerable<ruyhyDTO> GetByManger1(int id)
        {
            return new AssistantBL().GetAssistantByManger1(id);
        }

        //POST api/values
        public void Post([FromBody] TAssistantDTO value)
        {
            new AssistantBL().Post(value);
        }

        // PUT api/Assistant
        public void Put(int id, [FromBody] TAssistantDTO value)
        {
            new AssistantBL().Put(id,value);
        }

        // DELETE api/Assistant
        public void Delete(int id)
        {
            new AssistantBL().Delete(id);
        }
    }
}
