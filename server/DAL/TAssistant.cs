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
    
    public partial class TAssistant
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public TAssistant()
        {
            this.TAssistantHours = new HashSet<TAssistantHours>();
            this.TAssistantToProject = new HashSet<TAssistantToProject>();
            this.TTechnologyToAss = new HashSet<TTechnologyToAss>();
        }
    
        public int AssistantId { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<int> AssToManagerId { get; set; }
    
        public virtual TUser TUser { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TAssistantHours> TAssistantHours { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TAssistantToProject> TAssistantToProject { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<TTechnologyToAss> TTechnologyToAss { get; set; }
    }
}
