const baseurl = '/QPMCalcServer/cfc/QPMAxleService.cfc?wsdl&method=';

const axle = {
  getAxlesFromTruck: {
    method: 'POST',
    uri: baseurl + 'getAxlesFromTruck',
  },

  queryAxleWeightsFromShipment: {
    method: 'POST',
    uri: baseurl + 'queryAxleWeightsFromShipment',
  },

  queryAxleWeightsFromTruckName: {
    method: 'POST',
    uri: baseurl + +'queryAxleWeightsFromTruckName',
  },
};

module.exports = axle;
