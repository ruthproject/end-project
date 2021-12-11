using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
   public class TMessageDTO
    {
        public int MessageId { get; set; }
        public Nullable<int> IdSchool { get; set; }
        public Nullable<int> IdGrade { get; set; }
        public Nullable<bool> StudentsOrAssistants { get; set; }

      //  public virtual TGradeDTO TGrade { get; set; }
        //public virtual TSchoolDTO TSchool { get; set; }
    }
}
