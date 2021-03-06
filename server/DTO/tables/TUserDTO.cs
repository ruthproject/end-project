using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
    public class TUserDTO
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public Nullable<int> UserPermissionId { get; set; }
        public string UserPassword { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string NumbarPhone { get; set; }
        public string Mail { get; set; }
        public Nullable<bool> Status { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TAssistantDTO> TAssistant { get; set; }
        //public virtual TPermissionDTO TPermission { get; set; }
        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TStudentDTO> TStudent { get; set; }
    }
}
