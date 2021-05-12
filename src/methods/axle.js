const axle = {
  getAxlesFromTruck: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMAxleService.cfc?wsdl&method=getAxlesFromTruck',
  },

  queryAxleWeightsFromShipment: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMAxleService.cfc?wsdl&method=queryAxleWeightsFromShipment',
  },
};

module.exports = axle;
