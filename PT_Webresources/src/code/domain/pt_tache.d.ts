/// <reference path="../node_modules/@types/xrm/index.d.ts" />
declare namespace Pt_tacheEnum {
    const enum statecode {
        Active = 0,
        Inactive = 1,
    }

    const enum statuscode {
        Active = 1,
        Inactive = 2,
    }

}

declare namespace Pt_tache {
    const EntityLogicalName: "pt_tache";

    const enum Attributes {
        createdby = "createdby",
        createdbyname = "createdbyname",
        createdbyyominame = "createdbyyominame",
        createdon = "createdon",
        createdonbehalfby = "createdonbehalfby",
        createdonbehalfbyname = "createdonbehalfbyname",
        createdonbehalfbyyominame = "createdonbehalfbyyominame",
        importsequencenumber = "importsequencenumber",
        modifiedby = "modifiedby",
        modifiedbyname = "modifiedbyname",
        modifiedbyyominame = "modifiedbyyominame",
        modifiedon = "modifiedon",
        modifiedonbehalfby = "modifiedonbehalfby",
        modifiedonbehalfbyname = "modifiedonbehalfbyname",
        modifiedonbehalfbyyominame = "modifiedonbehalfbyyominame",
        overriddencreatedon = "overriddencreatedon",
        ownerid = "ownerid",
        owneridname = "owneridname",
        owneridtype = "owneridtype",
        owneridyominame = "owneridyominame",
        owningbusinessunit = "owningbusinessunit",
        owningbusinessunitname = "owningbusinessunitname",
        owningteam = "owningteam",
        owninguser = "owninguser",
        pt_heureallouee = "pt_heureallouee",
        pt_name = "pt_name",
        pt_projetid = "pt_projetid",
        pt_projetidname = "pt_projetidname",
        pt_tacheid = "pt_tacheid",
        statecode = "statecode",
        statuscode = "statuscode",
        timezoneruleversionnumber = "timezoneruleversionnumber",
        utcconversiontimezonecode = "utcconversiontimezonecode",
        versionnumber = "versionnumber",
    }

}

declare namespace Xrm {
    type Pt_tache = Omit<FormContext, 'getAttribute'> & Omit<FormContext, 'getControl'> & Pt_tacheAttributes;

    interface EventContext {
        getFormContext(): Pt_tache;
    }

    interface Pt_tacheAttributes {
        getAttribute(name: "createdby"): Attributes.LookupAttribute;
        getAttribute(name: "createdbyname"): Attributes.StringAttribute;
        getAttribute(name: "createdbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "createdon"): Attributes.DateAttribute;
        getAttribute(name: "createdonbehalfby"): Attributes.LookupAttribute;
        getAttribute(name: "createdonbehalfbyname"): Attributes.StringAttribute;
        getAttribute(name: "createdonbehalfbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "importsequencenumber"): Attributes.NumberAttribute;
        getAttribute(name: "modifiedby"): Attributes.LookupAttribute;
        getAttribute(name: "modifiedbyname"): Attributes.StringAttribute;
        getAttribute(name: "modifiedbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "modifiedon"): Attributes.DateAttribute;
        getAttribute(name: "modifiedonbehalfby"): Attributes.LookupAttribute;
        getAttribute(name: "modifiedonbehalfbyname"): Attributes.StringAttribute;
        getAttribute(name: "modifiedonbehalfbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "overriddencreatedon"): Attributes.DateAttribute;
        getAttribute(name: "ownerid"): Attributes.LookupAttribute;
        getAttribute(name: "owneridname"): Attributes.StringAttribute;
        getAttribute(name: "owneridtype"): Attributes.Attribute;
        getAttribute(name: "owneridyominame"): Attributes.StringAttribute;
        getAttribute(name: "owningbusinessunit"): Attributes.LookupAttribute;
        getAttribute(name: "owningbusinessunitname"): Attributes.StringAttribute;
        getAttribute(name: "owningteam"): Attributes.LookupAttribute;
        getAttribute(name: "owninguser"): Attributes.LookupAttribute;
        getAttribute(name: "pt_heureallouee"): Attributes.NumberAttribute;
        getAttribute(name: "pt_name"): Attributes.StringAttribute;
        getAttribute(name: "pt_projetid"): Attributes.LookupAttribute;
        getAttribute(name: "pt_projetidname"): Attributes.StringAttribute;
        getAttribute(name: "pt_tacheid"): Attributes.StringAttribute;
        getAttribute(name: "statecode"): Attributes.OptionSetAttribute;
        getAttribute(name: "statuscode"): Attributes.OptionSetAttribute;
        getAttribute(name: "timezoneruleversionnumber"): Attributes.NumberAttribute;
        getAttribute(name: "utcconversiontimezonecode"): Attributes.NumberAttribute;
        getAttribute(name: "versionnumber"): Attributes.NumberAttribute;
        getControl(name: "createdby"): Controls.LookupControl;
        getControl(name: "createdbyname"): Controls.StringControl;
        getControl(name: "createdbyyominame"): Controls.StringControl;
        getControl(name: "createdon"): Controls.DateControl;
        getControl(name: "createdonbehalfby"): Controls.LookupControl;
        getControl(name: "createdonbehalfbyname"): Controls.StringControl;
        getControl(name: "createdonbehalfbyyominame"): Controls.StringControl;
        getControl(name: "importsequencenumber"): Controls.NumberControl;
        getControl(name: "modifiedby"): Controls.LookupControl;
        getControl(name: "modifiedbyname"): Controls.StringControl;
        getControl(name: "modifiedbyyominame"): Controls.StringControl;
        getControl(name: "modifiedon"): Controls.DateControl;
        getControl(name: "modifiedonbehalfby"): Controls.LookupControl;
        getControl(name: "modifiedonbehalfbyname"): Controls.StringControl;
        getControl(name: "modifiedonbehalfbyyominame"): Controls.StringControl;
        getControl(name: "overriddencreatedon"): Controls.DateControl;
        getControl(name: "ownerid"): Controls.LookupControl;
        getControl(name: "owneridname"): Controls.StringControl;
        getControl(name: "owneridtype"): Controls.Control;
        getControl(name: "owneridyominame"): Controls.StringControl;
        getControl(name: "owningbusinessunit"): Controls.LookupControl;
        getControl(name: "owningbusinessunitname"): Controls.StringControl;
        getControl(name: "owningteam"): Controls.LookupControl;
        getControl(name: "owninguser"): Controls.LookupControl;
        getControl(name: "pt_heureallouee"): Controls.NumberControl;
        getControl(name: "pt_name"): Controls.StringControl;
        getControl(name: "pt_projetid"): Controls.LookupControl;
        getControl(name: "pt_projetidname"): Controls.StringControl;
        getControl(name: "pt_tacheid"): Controls.StringControl;
        getControl(name: "statecode"): Controls.OptionSetControl;
        getControl(name: "statuscode"): Controls.OptionSetControl;
        getControl(name: "timezoneruleversionnumber"): Controls.NumberControl;
        getControl(name: "utcconversiontimezonecode"): Controls.NumberControl;
        getControl(name: "versionnumber"): Controls.NumberControl;
    }

}

