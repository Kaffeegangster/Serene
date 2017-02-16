﻿Q.ScriptData.set('Columns.Organization.Contact', [{"name":"ContactId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"Title","title":"Db.Organization.Contact.Title","editorParams":{"maxLength":30},"maxLength":30,"width":150,"editLink":true,"quickFilterSeparator":false},{"name":"FirstName","title":"Db.Organization.Contact.FirstName","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150,"editLink":true,"quickFilterSeparator":false},{"name":"LastName","title":"Db.Organization.Contact.LastName","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150,"editLink":true,"quickFilterSeparator":false},{"name":"Email","title":"Db.Organization.Contact.Email","editorType":"Email","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150,"filteringType":"Editor","filteringParams":{"editorType":"Email","useLike":true},"quickFilterSeparator":false},{"name":"IdentityNo","title":"Db.Organization.Contact.IdentityNo","editorParams":{"maxLength":20},"maxLength":20,"width":150,"quickFilterSeparator":false},{"name":"UserDisplayName","title":"Db.Organization.Contact.UserDisplayName","width":250,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Organization.BusinessUnit', [{"name":"UnitId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"Name","title":"Db.Organization.BusinessUnit.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":300,"editLink":true,"quickFilterSeparator":false},{"name":"ParentUnitName","title":"Db.Organization.BusinessUnit.ParentUnitName","editorType":"Integer","formatterType":"Number","width":300,"editLink":true,"filteringType":"Editor","filteringParams":{"idField":"ParentUnitId","editorType":"Serene.Organization.BusinessUnitEditor","useLike":false},"filteringIdField":"ParentUnitId","quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Northwind.Customer', [{"name":"CustomerID","title":"Db.Shared.RecordId","editorParams":{"maxLength":5},"maxLength":5,"required":true,"updatable":false,"width":100,"editLink":true,"quickFilterSeparator":false},{"name":"CompanyName","title":"Db.Northwind.Customer.CompanyName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":250,"editLink":true,"quickFilterSeparator":false},{"name":"ContactName","title":"Db.Northwind.Customer.ContactName","editorParams":{"maxLength":30},"maxLength":30,"width":150,"quickFilterSeparator":false},{"name":"ContactTitle","title":"Db.Northwind.Customer.ContactTitle","editorParams":{"maxLength":30},"maxLength":30,"width":150,"quickFilterSeparator":false},{"name":"Region","title":"Db.Northwind.Customer.Region","editorParams":{"maxLength":15},"maxLength":15,"width":60,"quickFilterSeparator":false},{"name":"PostalCode","title":"Db.Northwind.Customer.PostalCode","editorParams":{"maxLength":10},"maxLength":10,"width":100,"quickFilterSeparator":false},{"name":"Country","title":"Db.Northwind.Customer.Country","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.CustomerCountry","maxLength":15},"maxLength":15,"width":130,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.CustomerCountry"},"quickFilter":true,"quickFilterSeparator":false},{"name":"City","title":"Db.Northwind.Customer.City","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.CustomerCity","maxLength":15},"maxLength":15,"width":120,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.CustomerCity"},"quickFilter":true,"quickFilterParams":{"cascadeFrom":"Country"},"quickFilterSeparator":false},{"name":"Phone","title":"Db.Northwind.Customer.Phone","editorParams":{"maxLength":24},"maxLength":24,"width":120,"quickFilterSeparator":false},{"name":"Fax","title":"Db.Northwind.Customer.Fax","editorParams":{"maxLength":24},"maxLength":24,"width":120,"quickFilterSeparator":false},{"name":"Representatives","title":"Representatives","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Employee","multiple":true},"formatterType":"Serene.Northwind.EmployeeListFormatter","width":250,"sortable":false,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.Employee"},"notFilterable":true,"quickFilter":true,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Northwind.Order', [{"name":"OrderID","title":"Db.Northwind.Order.OrderID","required":true,"insertable":false,"updatable":false,"alignment":"right","width":70,"sortOrder":-1,"editLink":true,"quickFilterSeparator":false},{"name":"CustomerCompanyName","title":"Db.Northwind.Order.CustomerCompanyName","editorParams":{"maxLength":40},"maxLength":40,"width":200,"editLink":true,"filteringType":"Editor","filteringParams":{"idField":"CustomerID","editorType":"Serene.Northwind.CustomerEditor","useLike":true},"filteringIdField":"CustomerID","quickFilter":true,"quickFilterSeparator":false},{"name":"OrderDate","title":"Db.Northwind.Order.OrderDate","editorType":"Date","required":true,"formatterType":"Date","width":85,"editLink":true,"filteringType":"Date","quickFilter":true,"quickFilterSeparator":false},{"name":"EmployeeFullName","title":"Db.Northwind.Order.EmployeeFullName","formatterType":"Serene.Northwind.EmployeeFormatter","formatterParams":{"genderProperty":"EmployeeGender"},"width":140,"filteringType":"Lookup","filteringParams":{"idField":"EmployeeID","lookupKey":"Northwind.Employee"},"filteringIdField":"EmployeeID","quickFilter":true,"quickFilterSeparator":false},{"name":"RequiredDate","title":"Db.Northwind.Order.RequiredDate","editorType":"Date","formatterType":"Date","width":85,"filteringType":"Date","quickFilterSeparator":false},{"name":"ShippingState","title":"Db.Northwind.Order.ShippingState","editorType":"Enum","editorParams":{"enumKey":"Northwind.OrderShippingState"},"formatterType":"Enum","formatterParams":{"enumKey":"Northwind.OrderShippingState"},"width":65,"filteringType":"Enum","filteringParams":{"enumKey":"Northwind.OrderShippingState"},"filterOnly":true,"quickFilter":true,"quickFilterSeparator":false},{"name":"ShippedDate","title":"Db.Northwind.Order.ShippedDate","editorType":"Date","formatterType":"Date","width":85,"filteringType":"Date","quickFilterSeparator":false},{"name":"ShipViaCompanyName","title":"Db.Northwind.Order.ShipViaCompanyName","editorParams":{"maxLength":40},"maxLength":40,"formatterType":"Serene.Northwind.ShipperFormatter","width":140,"filteringType":"Lookup","filteringParams":{"idField":"ShipVia","lookupKey":"Northwind.Shipper"},"filteringIdField":"ShipVia","quickFilter":true,"quickFilterParams":{"multiple":true},"quickFilterSeparator":false},{"name":"ShipCountry","title":"Db.Northwind.Order.ShipCountry","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.OrderShipCountry","maxLength":15},"maxLength":15,"width":100,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.OrderShipCountry"},"quickFilter":true,"quickFilterSeparator":false},{"name":"ShipCity","title":"Db.Northwind.Order.ShipCity","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.OrderShipCity","maxLength":15},"maxLength":15,"width":100,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.OrderShipCity"},"quickFilter":true,"quickFilterParams":{"cascadeFrom":"ShipCountry"},"quickFilterSeparator":false},{"name":"Freight","title":"Db.Northwind.Order.Freight","editorType":"Decimal","formatterType":"Serene.Northwind.FreightFormatter","formatterParams":{"displayFormat":"#,##0.####"},"displayFormat":"#,##0.####","alignment":"right","width":85,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.####"},"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Northwind.Product', [{"name":"ProductID","title":"Db.Shared.RecordId","required":true,"insertable":false,"updatable":false,"localizable":true,"alignment":"right","width":65,"editLink":true,"quickFilterSeparator":false},{"name":"ProductName","title":"Db.Northwind.Product.ProductName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"localizable":true,"width":250,"editLink":true,"quickFilterSeparator":false},{"name":"Discontinued","title":"Db.Northwind.Product.Discontinued","editorType":"Boolean","required":true,"formatterType":"Checkbox","width":40,"filteringType":"Boolean","quickFilter":true,"quickFilterSeparator":false},{"name":"SupplierCompanyName","title":"Db.Northwind.Product.SupplierCompanyName","editorParams":{"maxLength":40},"maxLength":40,"width":150,"editLink":true,"editLinkItemType":"Northwind.Supplier","editLinkIdField":"SupplierID","filteringType":"Lookup","filteringParams":{"idField":"SupplierID","lookupKey":"Northwind.Supplier"},"filteringIdField":"SupplierID","quickFilter":true,"quickFilterSeparator":false},{"name":"CategoryName","title":"Db.Northwind.Product.CategoryName","editorParams":{"maxLength":15},"maxLength":15,"width":150,"editLink":true,"editLinkItemType":"Northwind.Category","editLinkIdField":"CategoryID","filteringType":"Lookup","filteringParams":{"idField":"CategoryID","lookupKey":"Northwind.Category"},"filteringIdField":"CategoryID","quickFilter":true,"quickFilterParams":{"multiple":true},"quickFilterSeparator":false},{"name":"QuantityPerUnit","title":"Db.Northwind.Product.QuantityPerUnit","editorParams":{"maxLength":20},"maxLength":20,"width":130,"quickFilterSeparator":false},{"name":"UnitPrice","title":"Db.Northwind.Product.UnitPrice","editorType":"Decimal","formatterType":"Number","alignment":"right","width":80,"filteringType":"Decimal","quickFilterSeparator":false},{"name":"UnitsInStock","title":"Db.Northwind.Product.UnitsInStock","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":0,"alignment":"right","width":80,"filteringType":"Integer","quickFilterSeparator":false},{"name":"UnitsOnOrder","title":"Db.Northwind.Product.UnitsOnOrder","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":0,"alignment":"right","width":80,"filteringType":"Integer","quickFilterSeparator":false},{"name":"ReorderLevel","title":"Db.Northwind.Product.ReorderLevel","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":0,"alignment":"right","width":80,"filteringType":"Integer","quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Northwind.SalesByCategory', [{"name":"CategoryName","title":"Db.Northwind.SalesByCategory.CategoryName","editorParams":{"maxLength":15},"maxLength":15,"required":true,"width":150,"sortOrder":1,"quickFilterSeparator":false},{"name":"ProductName","title":"Db.Northwind.SalesByCategory.ProductName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":250,"quickFilterSeparator":false},{"name":"ProductSales","title":"Db.Northwind.SalesByCategory.ProductSales","editorType":"Decimal","editorParams":{"minValue":"000000000000000.0000","maxValue":"999999999999999.9999"},"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":150,"sortOrder":-2,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"},"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Northwind.Category', [{"name":"CategoryID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"localizable":true,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"CategoryName","title":"Db.Northwind.Category.CategoryName","editorParams":{"maxLength":15},"maxLength":15,"required":true,"localizable":true,"width":250,"editLink":true,"quickFilterSeparator":false},{"name":"Description","title":"Db.Northwind.Category.Description","localizable":true,"width":450,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Northwind.OrderDetail', [{"name":"ProductName","title":"Db.Northwind.OrderDetail.ProductName","editorParams":{"maxLength":40},"maxLength":40,"width":200,"editLink":true,"filteringType":"Lookup","filteringParams":{"idField":"ProductID","lookupKey":"Northwind.Product"},"filteringIdField":"ProductID","quickFilterSeparator":false},{"name":"UnitPrice","title":"Db.Northwind.OrderDetail.UnitPrice","editorType":"Decimal","required":true,"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":100,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"},"quickFilterSeparator":false},{"name":"Quantity","title":"Db.Northwind.OrderDetail.Quantity","editorType":"Integer","editorParams":{"maxValue":32767},"required":true,"defaultValue":1,"alignment":"right","width":100,"filteringType":"Integer","quickFilterSeparator":false},{"name":"Discount","title":"Db.Northwind.OrderDetail.Discount","editorType":"Decimal","required":true,"defaultValue":0,"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":100,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"},"quickFilterSeparator":false},{"name":"LineTotal","title":"Db.Northwind.OrderDetail.LineTotal","editorType":"Decimal","formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":100,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"},"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Northwind.Region', [{"name":"RegionID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"RegionDescription","title":"Db.Northwind.Region.RegionDescription","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":300,"editLink":true,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Northwind.Shipper', [{"name":"ShipperID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"CompanyName","title":"Db.Northwind.Shipper.CompanyName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":300,"editLink":true,"quickFilterSeparator":false},{"name":"Phone","title":"Db.Northwind.Shipper.Phone","editorParams":{"maxLength":24},"maxLength":24,"width":150,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Northwind.Supplier', [{"name":"SupplierID","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"CompanyName","title":"Db.Northwind.Supplier.CompanyName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":250,"editLink":true,"quickFilterSeparator":false},{"name":"ContactName","title":"Db.Northwind.Supplier.ContactName","editorParams":{"maxLength":30},"maxLength":30,"width":150,"quickFilterSeparator":false},{"name":"ContactTitle","title":"Db.Northwind.Supplier.ContactTitle","editorParams":{"maxLength":30},"maxLength":30,"width":150,"quickFilterSeparator":false},{"name":"Phone","title":"Db.Northwind.Supplier.Phone","editorParams":{"maxLength":24},"maxLength":24,"width":120,"quickFilterSeparator":false},{"name":"Region","title":"Db.Northwind.Supplier.Region","editorParams":{"maxLength":15},"maxLength":15,"width":80,"quickFilterSeparator":false},{"name":"Country","title":"Db.Northwind.Supplier.Country","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.SupplierCountry","maxLength":15},"maxLength":15,"width":130,"filteringType":"Lookup","filteringParams":{"lookupKey":"Northwind.SupplierCountry"},"quickFilter":true,"quickFilterSeparator":false},{"name":"City","title":"Db.Northwind.Supplier.City","editorParams":{"maxLength":15},"maxLength":15,"width":130,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Northwind.Territory', [{"name":"TerritoryID","title":"Db.Shared.RecordId","editorType":"Integer","editorParams":{"maxLength":20},"maxLength":20,"required":true,"updatable":false,"formatterType":"Number","width":100,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"TerritoryDescription","title":"Db.Northwind.Territory.TerritoryDescription","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":200,"editLink":true,"quickFilterSeparator":false},{"name":"RegionDescription","title":"Db.Northwind.Territory.RegionDescription","editorType":"Lookup","editorParams":{"lookupKey":"Northwind.Region","maxLength":50},"maxLength":50,"width":150,"editLink":true,"editLinkItemType":"Northwind.Region","editLinkIdField":"RegionID","filteringType":"Lookup","filteringParams":{"idField":"RegionID","lookupKey":"Northwind.Region"},"filteringIdField":"RegionID","quickFilter":true,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Meeting.MeetingAgendaRelevant', [{"name":"AgendaRelevantId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"AgendaId","title":"Db.Meeting.MeetingAgendaRelevant.AgendaId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer","quickFilterSeparator":false},{"name":"ContactId","title":"Db.Meeting.MeetingAgendaRelevant.ContactId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer","quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Meeting.MeetingAgenda', [{"name":"AgendaNumber","title":"Db.Meeting.MeetingAgenda.AgendaNumber","editorType":"Integer","required":true,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"Title","title":"Db.Meeting.MeetingAgenda.Title","editorParams":{"maxLength":2000},"maxLength":2000,"width":250,"editLink":true,"quickFilterSeparator":false},{"name":"Description","title":"Db.Meeting.MeetingAgenda.Description","width":350,"quickFilterSeparator":false},{"name":"AgendaTypeName","title":"Db.Meeting.MeetingAgenda.AgendaTypeName","width":130,"filteringParams":{"idField":"AgendaTypeId"},"filteringIdField":"AgendaTypeId","quickFilterSeparator":false},{"name":"RequestedByContactFullName","title":"Db.Meeting.MeetingAgenda.RequestedByContactFullName","editorType":"Integer","formatterType":"Number","width":130,"filteringType":"Integer","quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Meeting.MeetingAgendaType', [{"name":"AgendaTypeId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"Name","title":"Db.Meeting.MeetingAgendaType.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":350,"editLink":true,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Meeting.MeetingAttendee', [{"name":"ContactFullName","title":"Db.Meeting.MeetingAttendee.ContactFullName","editorType":"Integer","formatterType":"Number","width":280,"sortable":false,"filteringType":"Integer","quickFilterSeparator":false},{"name":"AttendeeType","title":"Db.Meeting.MeetingAttendee.AttendeeType","editorType":"Enum","editorParams":{"enumKey":"Meeting.MeetingAttendeeType"},"required":true,"defaultValue":1,"formatterType":"Serene.Common.EnumSelectFormatter","formatterParams":{"enumKey":"Meeting.MeetingAttendeeType","allowClear":false},"width":180,"sortable":false,"filteringType":"Enum","filteringParams":{"enumKey":"Meeting.MeetingAttendeeType"},"quickFilterSeparator":false},{"name":"AttendanceStatus","title":"Db.Meeting.MeetingAttendee.AttendanceStatus","editorType":"Enum","editorParams":{"enumKey":"Meeting.MeetingAttendanceStatus"},"required":true,"defaultValue":0,"formatterType":"Serene.Common.EnumSelectFormatter","formatterParams":{"enumKey":"Meeting.MeetingAttendanceStatus","allowClear":false},"width":180,"sortable":false,"filteringType":"Enum","filteringParams":{"enumKey":"Meeting.MeetingAttendanceStatus"},"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Meeting.MeetingDecisionRelevant', [{"name":"DecisionRelevantId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"DecisionId","title":"Db.Meeting.MeetingDecisionRelevant.DecisionId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer","quickFilterSeparator":false},{"name":"ContactId","title":"Db.Meeting.MeetingDecisionRelevant.ContactId","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer","quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Meeting.MeetingDecision', [{"name":"DecisionNumber","title":"No","editorType":"Integer","required":true,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"Description","title":"Db.Meeting.MeetingDecision.Description","width":250,"quickFilterSeparator":false},{"name":"AgendaNumber","title":"Db.Meeting.MeetingDecision.AgendaNumber","editorType":"Integer","formatterType":"Number","width":65,"filteringType":"Integer","quickFilterSeparator":false},{"name":"ResponsibleContactFullName","title":"Db.Meeting.MeetingDecision.ResponsibleContactFullName","width":250,"quickFilterSeparator":false},{"name":"DueDate","title":"Db.Meeting.MeetingDecision.DueDate","editorType":"Date","formatterType":"Date","width":85,"filteringType":"Date","quickFilterSeparator":false},{"name":"ResolutionStatus","title":"Db.Meeting.MeetingDecision.ResolutionStatus","editorType":"Integer","required":true,"formatterType":"Number","width":65,"filteringType":"Integer","quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Meeting.MeetingLocation', [{"name":"LocationId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"Name","title":"Db.Meeting.MeetingLocation.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":350,"editLink":true,"quickFilterSeparator":false},{"name":"Address","title":"Db.Meeting.MeetingLocation.Address","editorParams":{"maxLength":300},"maxLength":300,"width":150,"quickFilterSeparator":false},{"name":"Latitude","title":"Db.Meeting.MeetingLocation.Latitude","editorType":"Decimal","required":true,"formatterType":"Number","width":85,"filteringType":"Decimal","quickFilterSeparator":false},{"name":"Longitude","title":"Db.Meeting.MeetingLocation.Longitude","editorType":"Decimal","required":true,"formatterType":"Number","width":85,"filteringType":"Decimal","quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Meeting.Meeting', [{"name":"MeetingId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"MeetingName","title":"Db.Meeting.Meeting.MeetingName","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":250,"editLink":true,"quickFilterSeparator":false},{"name":"MeetingNumber","title":"Db.Meeting.Meeting.MeetingNumber","editorParams":{"maxLength":20},"maxLength":20,"width":125,"quickFilterSeparator":false},{"name":"MeetingTypeName","title":"Db.Meeting.Meeting.MeetingTypeName","width":120,"filteringType":"Lookup","filteringParams":{"idField":"MeetingTypeId","lookupKey":"Meeting.MeetingType"},"filteringIdField":"MeetingTypeId","quickFilter":true,"quickFilterSeparator":false},{"name":"StartDate","title":"Db.Meeting.Meeting.StartDate","editorType":"DateTime","required":true,"formatterType":"DateTime","formatterParams":{"displayFormat":"g"},"displayFormat":"g","width":125,"filteringType":"DateTime","filteringParams":{"displayFormat":"g"},"quickFilterSeparator":false},{"name":"EndDate","title":"Db.Meeting.Meeting.EndDate","editorType":"DateTime","required":true,"formatterType":"DateTime","formatterParams":{"displayFormat":"g"},"displayFormat":"g","width":125,"filteringType":"DateTime","filteringParams":{"displayFormat":"g"},"quickFilterSeparator":false},{"name":"LocationName","title":"Db.Meeting.Meeting.LocationName","width":120,"filteringType":"Lookup","filteringParams":{"idField":"LocationId","lookupKey":"Meeting.MeetingLocation"},"filteringIdField":"LocationId","quickFilter":true,"quickFilterSeparator":false},{"name":"UnitName","title":"Db.Meeting.Meeting.UnitName","width":150,"filteringType":"Editor","filteringParams":{"idField":"UnitId","editorType":"Serene.Organization.BusinessUnitEditor","useLike":true},"filteringIdField":"UnitId","quickFilter":true,"quickFilterSeparator":false},{"name":"OrganizerContactFullName","title":"Db.Meeting.Meeting.OrganizerContactFullName","width":150,"filteringType":"Lookup","filteringParams":{"idField":"OrganizerContactId","lookupKey":"Organization.Contact"},"filteringIdField":"OrganizerContactId","quickFilter":true,"quickFilterSeparator":false},{"name":"ReporterContactFullName","title":"Db.Meeting.Meeting.ReporterContactFullName","width":150,"filteringType":"Lookup","filteringParams":{"idField":"ReporterContactId","lookupKey":"Organization.Contact"},"filteringIdField":"ReporterContactId","quickFilter":true,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Meeting.MeetingType', [{"name":"MeetingTypeId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"Name","title":"Db.Meeting.MeetingType.Name","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":350,"editLink":true,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.BasicSamples.InlineImageInGrid', [{"name":"ProductID","title":"Db.Shared.RecordId","required":true,"insertable":false,"updatable":false,"localizable":true,"alignment":"right","width":65,"editLink":true,"quickFilterSeparator":false},{"name":"ProductName","title":"Db.Northwind.Product.ProductName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"localizable":true,"width":250,"editLink":true,"quickFilterSeparator":false},{"name":"ProductImage","title":"Db.Northwind.Product.ProductImage","editorType":"ImageUpload","editorParams":{"maxLength":100},"maxLength":100,"formatterType":"Serene.BasicSamples.InlineImageFormatter","width":450,"filteringType":"Editor","filteringParams":{"editorType":"ImageUpload","useLike":true},"quickFilterSeparator":false},{"name":"ProductThumbnail","title":"ProductThumbnail","formatterType":"Serene.BasicSamples.InlineImageFormatter","formatterParams":{"fileProperty":"ProductImage","thumb":true},"width":450,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.BasicSamples.CustomerGrossSales', [{"name":"ContactName","title":"Db.BasicSamples.GrossSales.ContactName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":150,"sortOrder":1,"quickFilterSeparator":false},{"name":"ProductName","title":"Db.BasicSamples.GrossSales.ProductName","editorParams":{"maxLength":40},"maxLength":40,"required":true,"width":250,"quickFilterSeparator":false},{"name":"GrossAmount","title":"Db.BasicSamples.GrossSales.GrossAmount","editorType":"Decimal","editorParams":{"minValue":"00000000000000000.00","maxValue":"99999999999999999.99"},"formatterType":"Number","formatterParams":{"displayFormat":"#,##0.00"},"displayFormat":"#,##0.00","alignment":"right","width":150,"sortOrder":-2,"filteringType":"Decimal","filteringParams":{"displayFormat":"#,##0.00"},"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.BasicSamples.VSGalleryQA', [{"name":"ThreadId","title":"Thread ID","editorType":"Integer","formatterType":"Number","alignment":"right","width":70,"sortable":false,"filteringType":"Integer","quickFilterSeparator":false},{"name":"Title","title":"Title","cssClass":"wrap-text","width":200,"sortable":false,"quickFilterSeparator":false},{"name":"Posts","title":"Posts","width":800,"sortable":false,"quickFilterSeparator":false},{"name":"StartedByName","title":"Started By","editorType":"Date","formatterType":"Date","width":150,"sortable":false,"filteringType":"Date","quickFilterSeparator":false},{"name":"StartedOn","title":"Started On","editorType":"Date","formatterType":"Date","formatterParams":{"displayFormat":"g"},"displayFormat":"g","width":120,"sortable":false,"filteringType":"Date","filteringParams":{"displayFormat":"g"},"quickFilterSeparator":false},{"name":"LastPostOn","title":"Last Post On","editorType":"Date","formatterType":"Date","formatterParams":{"displayFormat":"g"},"displayFormat":"g","width":120,"sortable":false,"filteringType":"Date","filteringParams":{"displayFormat":"g"},"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.BasicSamples.DragDropSample', [{"name":"Title","title":"Db.BasicSamples.DragDropSample.Title","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":300,"editLink":true,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Administration.Language', [{"name":"LanguageId","title":"Db.Administration.Language.LanguageId","editorParams":{"maxLength":10},"maxLength":10,"required":true,"width":150,"editLink":true,"quickFilterSeparator":false},{"name":"LanguageName","title":"Db.Administration.Language.LanguageName","editorParams":{"maxLength":50},"maxLength":50,"required":true,"width":150,"editLink":true,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Administration.Role', [{"name":"RoleId","title":"Db.Shared.RecordId","editorType":"Integer","required":true,"insertable":false,"updatable":false,"formatterType":"Number","alignment":"right","width":65,"editLink":true,"filteringType":"Integer","quickFilterSeparator":false},{"name":"RoleName","title":"Db.Administration.Role.RoleName","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":300,"editLink":true,"quickFilterSeparator":false}]);

;

Q.ScriptData.set('Columns.Administration.User', [{"name":"UserId","title":"Db.Administration.User.UserId","required":true,"insertable":false,"updatable":false,"alignment":"right","width":55,"editLink":true,"quickFilterSeparator":false},{"name":"Username","title":"Db.Administration.User.Username","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150,"editLink":true,"quickFilterSeparator":false},{"name":"DisplayName","title":"Db.Administration.User.DisplayName","editorParams":{"maxLength":100},"maxLength":100,"required":true,"width":150,"quickFilterSeparator":false},{"name":"Email","title":"Db.Administration.User.Email","editorParams":{"maxLength":100},"maxLength":100,"width":250,"quickFilterSeparator":false},{"name":"Source","title":"Db.Administration.User.Source","editorParams":{"maxLength":4},"maxLength":4,"required":true,"insertable":false,"updatable":false,"defaultValue":"site","width":100,"quickFilterSeparator":false}]);

;


