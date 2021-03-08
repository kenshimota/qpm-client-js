const trucks =  {
    "checkBayAvailability": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMTruckService.cfc?wsdl&method=checkBayAvailability"
    },

    "calcTruckBay": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMTruckService.cfc?wsdl&method=calcTruckBay"
    },

    "listAllModels": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMTruckService.cfc?wsdl&method=listAllModels"
    },
};

module.exports = trucks;