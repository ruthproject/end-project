using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserDAL
     
    {
        public UserDAL()
        {

        }
        public IEnumerable<TUser> GetAllUser()
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {

                    return pm.TUser.ToList();
                }
            }
            catch
            {
                return null;
            }
        }


        public TUser GetUser(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    return pm.TUser.Single(s => s.UserId == id);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Delete(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    var ass = pm.TUser.Where(s => s.UserId == id);
                    pm.TUser.RemoveRange(ass);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Put(int id, TUser user)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    //מחקנו והוספנו לסוף  ולא למקום)(כמו שרצינו
                    var ass = pm.TUser.Where(assi => assi.UserId == id);
                    pm.TUser.RemoveRange(ass);
                    pm.TUser.Add(user);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Post(TUser user)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    pm.TUser.Add(user);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
