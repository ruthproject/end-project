//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class TMessage
    {
        public int MessageId { get; set; }
        public Nullable<int> IdSchool { get; set; }
        public Nullable<int> IdGrade { get; set; }
        public Nullable<bool> StudentsOrAssistants { get; set; }
    
        public virtual TGrade TGrade { get; set; }
        public virtual TSchool TSchool { get; set; }
    }
}
