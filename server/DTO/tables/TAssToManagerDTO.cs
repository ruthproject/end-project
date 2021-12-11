using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
public class TAssToManagerDTO
    {
        public int AssToManager { get; set; }
        public Nullable<int> AssistantId { get; set; }
        public Nullable<int> ManagerId { get; set; }
        public Nullable<int> SchoolId { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TAssistant> TAssistant { get; set; }
        //public virtual TSchool TSchool { get; set; }
    }
}
