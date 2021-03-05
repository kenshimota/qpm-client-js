const consignments = {
	
	"deleteConsignmentWithID": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl&method=deleteConsignmentWithID",
	},

	"deleteShipItemWithID": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl&method=deleteShipItemWithID"
	},

	"deleteShipmentWithID": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl&method=deleteShipmentWithID"
	},

	"dumpConsignmentPart": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl&method=dumpConsignmentPart"
	},

	"dumpEmptyConsignment": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl&method=dumpEmptyConsignment"
	},

	"dumpShipItem": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl&method=dumpShipItem"
	},

	"getConsignmentWithID": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl&method=getConsignmentWithID"
	},

	"getRecentConsignments": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl&method=getRecentConsignments"
	}
};

module.exports = consignments;