using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
 public   class TTechnologyToAssDTO
    {
        public int IdTechnologyToAss { get; set; }
        public Nullable<int> IdAssistant { get; set; }
        public Nullable<int> IdTechnology { get; set; }

        //public virtual TAssistantDTO TAssistant { get; set; }
        //public virtual TTechnologyDTO TTechnology { get; set; }
    }
}
