using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
  public  class TAssistantDTO
    {

        public int AssistantId { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<int> AssToManagerId { get; set; }




        //public virtual TAssToManager TAssToManager { get; set; }
        //public virtual TUser TUser { get; set; }
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TAssistantHours> TAssistantHours { get; set; }
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TAssistantToProject> TAssistantToProject { get; set; }
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TTechnologyToAss> TTechnologyToAss { get; set; }

    }
}
