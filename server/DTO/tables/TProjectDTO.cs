using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
    public class TProjectDTO
    {
        public int ProjectId { get; set; }
        public string ProjectName { get; set; }
        public Nullable<bool> Status { get; set; }
        public Nullable<int> IdBeforeProject { get; set; }
        public string ClientSide { get; set; }
        public string ServerSide { get; set; }
        public Nullable<int> IdStatus { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TAssistantToProject> TAssistantToProject { get; set; }
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TDocument> TDocument { get; set; }
        //public virtual TStatus TStatus { get; set; }
    }
}
