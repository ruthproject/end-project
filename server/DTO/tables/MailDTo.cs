using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
  public  class MailDTO
    {
        public string to { get; set; }
        public string subject { get; set; }
        public string body { get; set; }
        public string attachment { get; set; }
    }
}
