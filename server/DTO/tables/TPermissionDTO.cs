using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
   public class TPermissionDTO
    {
        public int PermissionId { get; set; }
        public string PermissionName { get; set; }
        public Nullable<int> PermissionValue { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TUserDTO> TUser { get; set; }
    }
}
