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
    
    public partial class TListValue
    {
        public int IdListprameter { get; set; }
        public Nullable<int> IdParameter { get; set; }
        public Nullable<int> IdProfession { get; set; }
    
        public virtual TParameter TParameter { get; set; }
        public virtual TProfession TProfession { get; set; }
    }
}
