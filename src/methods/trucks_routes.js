const trucks_routes =  {
    "dumpEmptyRoute": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMRouteBatchService.cfc?wsdl&method=dumpEmptyRoute"
    },

    "addShipItemToRoute": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMRouteBatchService.cfc?wsdl&method=addShipItemToRoute"
    },

    "createBatchWithRoutes": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMRouteBatchService.cfc?wsdl&method=createBatchWithRoutes"
    },

    "dumpFullRoutes": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMRouteBatchService.cfc?wsdl&method=dumpFullRoutes"
    },

    "searchRoutesWithString": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMRouteBatchService.cfc?wsdl&method=searchRoutesWithString"
    },

    "getTransportStatus": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMRouteBatchService.cfc?wsdl&method=getTransportStatus"
    }
};

module.exports = trucks_routes;