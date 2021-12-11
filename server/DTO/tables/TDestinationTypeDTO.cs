using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
   public class TDestinationTypeDTO
    {
        public int DestinationTypeId { get; set; }
        public string DestinationTypeName { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TDestinationGroupDTO> TDestinationGroup { get; set; }
    }
}
