using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class AssistantToProjectDAL
    {
        public IEnumerable<TAssistantToProject> GetAllAssistantToProject()
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    return pm.TAssistantToProject.ToList();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
