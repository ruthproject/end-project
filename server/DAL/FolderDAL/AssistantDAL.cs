using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using DAL.FolderDAL;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;


namespace DAL
{
    public class AssistantDAL
    {
        public AssistantDAL()
        {

        }
        public IEnumerable<TAssistant> GetAllAssistant()
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {

                    return pm.TAssistant.ToList();
                }
            }
            catch
            {
                return null;
            }
        }


        public TAssistant GetAssistant(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    return pm.TAssistant.Single(s => s.AssistantId == id);
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
        public IEnumerable<ass_by_manager_Result> GetAssistantByManager(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    return pm.ass_by_manager(id).ToList();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public IEnumerable<ruyhy> GetAssistantByManager1(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {

                    //select aa.ManagerId,s.SchoolId,s.SchoolName,ah.AssistantId,sum(datediff(SECOND,[BeginningTime],[EndTime])) as sumHours,count(ah.ProjectId) as countProject 
                    //from[dbo].[TAssistantHours]ah
                    // join[dbo].[TAssToManager] aa on aa.AssToManagerId=ah.[AssToManagerId]
                    // join[dbo].[TSchool] s on s.SchoolId=aa.SchoolId
                    //group by aa.ManagerId, s.SchoolId, s.SchoolName, ah.AssistantId



                    var cc = pm.TAssistantHours
                         .Join(pm.TAssToManager, ah => ah.AssToManagerId, aa => aa.AssToManagerId, (ah, aa) =>
                         new { ManagerId = aa.ManagerId, AssistantId = ah.AssistantId, SchoolId = aa.SchoolId, projectId = ah.ProjectId }).Join(pm.TSchool, a1 => a1.SchoolId, s => s.SchoolId, (a1, s) => new { ManagerId = a1.ManagerId, AssistantId = a1.AssistantId, SchoolName = s.SchoolName, SchoolId = s.SchoolId, projectId = a1.projectId })
                         .GroupBy(e => new {e.ManagerId,e.AssistantId,e.SchoolName,e.SchoolId })
                         .Select(e => new { ManagerId = e.Key.ManagerId, AssistantId = e.Key.AssistantId, SchoolName = e.Key.SchoolName, SchoolId=e.Key.SchoolId, countProject = e.Count() })
                         .ToList();

                    //var cc = pm.TAssistantHours
                    //     .Join(pm.TAssToManager, ah => ah.AssToManagerId, aa => aa.AssToManagerId, (ah, aa) =>
                    //     new { ManagerId = aa.ManagerId, AssistantId = ah.AssistantId, SchoolId = aa.SchoolId, projectId = ah.ProjectId }).Join(pm.TSchool, a1 => a1.SchoolId, s => s.SchoolId, (a1, s) => new { ManagerId = a1.ManagerId, AssistantId = a1.AssistantId, SchoolName = s.SchoolName, SchoolId = s.SchoolId, projectId = pm.TAssistantHours.Count(c => c.ProjectId > 0) })
                    //     //.GroupBy(e=>new { ManagerId = e.ManagerId, AssistantId = e.AssistantId, SchoolName = e.SchoolName })
                    //     .Select(e => new { ManagerId = e.ManagerId, AssistantId = e.AssistantId, SchoolName = e.SchoolName, SchoolId = e.SchoolId, countProject = e.projectId })
                    //     .ToList();


                    var q = pm.TUser.Join(pm.TAssistant, u => u.UserId, a => a.UserId, (u, a) => new { AssistantId = a.AssistantId, FirstName = u.FirstName, LastName = u.LastName, Mail = u.Mail, NumbarPhone = u.NumbarPhone, Status = u.Status })
                        .Join(cc, q2 => q2.AssistantId, c => c.AssistantId, (q2, c) => new { AssistantId = q2.AssistantId, FirstName = q2.FirstName, LastName = q2.LastName, Mail = q2.Mail, NumbarPhone = q2.NumbarPhone, Status = q2.Status, ManagerId = c.ManagerId, SchoolId = c.SchoolId, SchoolName = c.SchoolName, countProject = c.countProject })
                        .Join(pm.TAssistantToProject, q1 => q1.AssistantId, ap => ap.IdAssistant, (q1, ap) => new { AssistantId = q1.AssistantId, FirstName = q1.FirstName, LastName = q1.LastName, Mail = q1.Mail, NumbarPhone = q1.NumbarPhone, Status = q1.Status, ManagerId = q1.ManagerId, SchoolName = q1.SchoolName, countProject = q1.countProject })
                        .Where(a => a.ManagerId == id).ToList();

                    List<ruyhy> r = new List<ruyhy>();

                    //var cc = pm.TSchool.GroupJoin(pm.TAssToManager, s => s.SchoolId, a => a.SchoolId, (s, a) => new { schoolname = s.SchoolName }).ToList();

                    foreach (var item in cc)
                    {
                        ruyhy r2 = new ruyhy();
                        r2.SchoolName = item.SchoolName;
                        r2.ManagerId = item.ManagerId;
                        r2.AssistantId = item.AssistantId;
                        r2.sumPrijects = item.countProject;
                        r.Add(r2);
                    }
                    return r;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }


        /////////////////////////////////////////////////////////////////////


        public void Delete(int id)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    var ass = pm.TAssistant.Where(s => s.AssistantId == id);
                    pm.TAssistant.RemoveRange(ass);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Put(int id, TAssistant assistant)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    //מחקנו והוספנו לסוף  ולא למקום)(כמו שרצינו
                    var ass = pm.TAssistant.Where(assi => assi.AssistantId == id);
                    pm.TAssistant.RemoveRange(ass);
                    pm.TAssistant.Add(assistant);
                    pm.SaveChanges();
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Post(TAssistant assistant)
        {
            try
            {
                using (ProjectsManagementEntities pm = new ProjectsManagementEntities())
                {
                    pm.TAssistant.Add(assistant);
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

namespace DAL.FolderDAL
{
    //[System.AttributeUsage(System.AttributeTargets.Class, AllowMultiple = false)]
    //public sealed class ruyhy : Attribute
    //{
    //    public int? ManagerId { get; set; }
    //    public string SchoolName { get; set; }
    //    public int? sumHours { get; set; }
    //    public int? AssistantId { get; set; }
    //    public string FirstName { get; set; }
    //    public string LastName { get; set; }
    //    public string Mail { get; set; }
    //    public string NumbarPhone { get; set; }
    //    public bool? Status { get; set; }
    //}
    //[ModelMetadataType(typeof(ruyhyModelMetaData))]
    public partial class ruyhy
    {
        public int? ManagerId { get; set; }
        public string SchoolName { get; set; }
        //  public int? sumHours { get; set; }
        public int? sumPrijects { get; set; }
        public int? AssistantId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Mail { get; set; }
        public string NumbarPhone { get; set; }
        public bool? Status { get; set; }



    }
}