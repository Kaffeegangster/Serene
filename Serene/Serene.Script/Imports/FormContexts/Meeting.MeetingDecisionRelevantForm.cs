
namespace Serene.Meeting
{
    using Serenity;
    using Serenity.ComponentModel;
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.Runtime.CompilerServices;
    using Serene.Northwind;

    public partial class MeetingDecisionRelevantForm : PrefixedContext
    {
        public MeetingDecisionRelevantForm(string idPrefix) : base(idPrefix) {}
    
        public IntegerEditor MeetingDecisionId { get { return ById<IntegerEditor>("MeetingDecisionId"); } }
        public IntegerEditor RelevantUserId { get { return ById<IntegerEditor>("RelevantUserId"); } }
        public StringEditor IsActive { get { return ById<StringEditor>("IsActive"); } }
    }
}

