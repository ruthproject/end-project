using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
 public class ass_by_manager_ResultDTO
    {
        public int? ManagerId { get; set; }
        public string SchoolName { get; set; }
        public int? sumHours { get; set; }
        public int? AssistantId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Mail { get; set; }
        public string NumbarPhone { get; set; }
        public bool? Status { get; set; }
    }
}
