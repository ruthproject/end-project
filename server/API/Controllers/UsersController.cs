using BL;
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
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class UsersController : ApiController
    {
        // GET api/Users

        public IEnumerable<TUserDTO> Get()
        {
            var list = new UserBL().GetAll();
            foreach (var u in list)
            {
                u.UserName = null;
                u.UserPassword = null;
            }

            return list;
        }

        // GET api/User
        public TUserDTO Get(int id)
        {
            return new UserBL().GetUserById(id);
        }
        [HttpPost]
        public IHttpActionResult Login(TUserDTO user)
        {
            var list = new UserBL().GetAll();
            foreach (var u in list)
            {
                if (u.UserName == user.UserName)
                {

                    if (u.UserPassword == user.UserPassword)
                    {
                        u.UserName = null;
                        u.UserPassword = null;
                        return Ok(u);
                    }
                        
                    return Conflict();
                }
            }
            return NotFound();
        }

        ///////////////////////////////////////////////////////////

        //POST api/values
        public void Post([FromBody] TUserDTO value)
        {
            new UserBL().Post(value);
        }

        //// PUT api/User
        public void Put(int id, [FromBody] TUserDTO value)
        {
            new UserBL().Put(id, value);
        }

        //// DELETE api/User
        public void Delete(int id)
        {
            new UserBL().Delete(id);
        }
    }
}