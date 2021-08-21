using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
    class TStudentDTO
    {
        public int StudentId { get; set; }
        public string SFirstName { get; set; }
        public string SLastName { get; set; }
        public string Id { get; set; }
        public string SPreviousName { get; set; }
        public string SPhone { get; set; }
        public string SMail { get; set; }
        public int SIdProject { get; set; }
        public int SIdUser { get; set; }
        public string SPassword { get; set; }
        public Nullable<int> SYear { get; set; }
        public Nullable<int> SGradeId { get; set; }
        public Nullable<int> SIdStatus { get; set; }
        public Nullable<int> SFinalMark { get; set; }
        public Nullable<int> SIdSchool { get; set; }
        public Nullable<int> ProjectId { get; set; }
    }
}
