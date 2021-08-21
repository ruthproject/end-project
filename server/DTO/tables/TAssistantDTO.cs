using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
  public  class TAssistantDTO
    {
        public int AssistantId { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<bool> Status { get; set; }

        public  TUserDTO TUserDTO { get; set; }
        public  ICollection<TAssistantHoursDTO> TAssistantHoursDTO { get; set; }
        //public  ICollection<TAssistantToProjectDTO> TAssistantToProjects { get; set; }
    }
}
