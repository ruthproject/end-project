using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
  public  class TTechnologyDTO
    {
        public int IdTechnology { get; set; }
        public string NameTechnology { get; set; }

        //[System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        //public virtual ICollection<TTechnologyToAssDTO> TTechnologyToAss { get; set; }
    }
}
