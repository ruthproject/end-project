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
    
    public partial class TStudent
    {
        public int StudentId { get; set; }
        public string Id { get; set; }
        public string PreviousName { get; set; }
        public int IdProject { get; set; }
        public int IdUser { get; set; }
        public Nullable<int> Year { get; set; }
        public Nullable<int> GradeId { get; set; }
        public Nullable<int> FinalMark { get; set; }
        public Nullable<int> IdSchool { get; set; }
    
        public virtual TGrade TGrade { get; set; }
        public virtual TSchool TSchool { get; set; }
        public virtual TUser TUser { get; set; }
    }
}
