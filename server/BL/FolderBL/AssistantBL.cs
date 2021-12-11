using DAL;
using DTO.tables;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using conv = BL.Convert;


namespace BL
{
    public class AssistantBL
    {
        public IEnumerable<TAssistantDTO> GetAll()
        {
            var list =new AssistantDAL().GetAllAssistant();
                foreach (var ass in list)
                {
                    yield return (TAssistantDTO)conv.convert(ass);
                }
        }

       

        public TAssistantDTO GetAssistantById(int id)
        {

            return (TAssistantDTO)conv.convert(new AssistantDAL().GetAssistant(id));
        }

        public IEnumerable<ass_by_manager_ResultDTO> GetAssistantByManger(int id)
        {
            var list = new AssistantDAL().GetAssistantByManager(id);
            foreach (var ass in list)
            {
                yield return (ass_by_manager_ResultDTO)conv.convert(ass);
            }
          
        }

        public IEnumerable<ruyhyDTO> GetAssistantByManger1(int id)
        {
            var list = new AssistantDAL().GetAssistantByManager1(id);
            foreach (var ass in list)
            {
                yield return (ruyhyDTO)conv.convert(ass);
            }

        }

        public void Post(TAssistantDTO value)
        {
            new AssistantDAL().Post((TAssistant)conv.convert(value));
        }
       

        public void Put(int id, TAssistantDTO value)
        {
            new AssistantDAL().Put(id, (TAssistant)conv.convert(value));
        }

        


        public void Delete(int id)
        {
            new AssistantDAL().Delete(id);
        }

        
    }
}
