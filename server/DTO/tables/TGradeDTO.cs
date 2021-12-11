using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
 public   class TGradeDTO
    {
        public int GradeId { get; set; }
        public string GradeName { get; set; }
        public Nullable<int> GradeIdSchool { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TDestinationGroupDTO> TDestinationGroup { get; set; }
        ////public virtual TSchoolDTO TSchool { get; set; }
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TMessageDTO> TMessage { get; set; }
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TStudentDTO> TStudent { get; set; }

    }
}
