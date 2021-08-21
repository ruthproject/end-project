﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO.tables
{
  public  class TAssistantHoursDTO
    {
        public int AssistantHoursId { get; set; }
        public Nullable<int> AssistantId { get; set; }
        public Nullable<System.DateTime> BeginningTime { get; set; }
        public Nullable<System.DateTime> EndTime { get; set; }
        public string NotesToManagement { get; set; }
        public Nullable<int> ProfessionId { get; set; }


    }
}
