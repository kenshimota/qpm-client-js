const shipments =  {
    "createNewShipment": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMShipmentService.cfc?wsdl&method=createNewShipment"
    },

    "deleteCalcsWithShipmentID": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMShipmentService.cfc?wsdl&method=deleteCalcsWithShipmentID"
    },

    "queryTruckFillShipments": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMShipmentService.cfc?wsdl&method=queryTruckFillShipments"
    }
};

module.exports = shipments;