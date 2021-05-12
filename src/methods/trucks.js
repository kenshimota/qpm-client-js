const baseurl = '/QPMCalcServer/cfc/QPMTruckService.cfc?wsdl&method=';

const trucks = {
  checkBayAvailability: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMTruckService.cfc?wsdl&method=checkBayAvailability',
  },

  calcTruckBay: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMTruckService.cfc?wsdl&method=calcTruckBay',
  },

  listAllModels: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMTruckService.cfc?wsdl&method=listAllModels',
  },

  checkLoadBalance: {
    method: 'POST',
    uri: baseurl + 'checkLoadBalance',
  },

  checkPalletCalc: {
    method: 'POST',
    uri: baseurl + 'checkPalletCalc',
  },

  getCFTruckWithName: {
    method: 'POST',
    uri: baseurl + 'getCFTruckWithName',
  },

  listAllModels: {
    method: 'POST',
    uri: baseurl + 'listAllModels',
  },

  queryBoxesFromMultipleShipments: {
    method: 'POST',
    uri: baseurl + 'queryBoxesFromMultipleShipments',
  },

  queryBoxLocationsFromShipment: {
    method: 'POST',
    uri: baseurl + 'queryBoxLocationsFromShipment',
  },

  queryMaxAxleWeightsFromTruckName: {
    method: 'POST',
    uri: baseurl + 'queryMaxAxleWeightsFromTruckName',
  },

  queryPalletPropertiesFromShipments: {
    method: 'POST',
    uri: baseurl + 'queryPalletPropertiesFromShipments',
  },

  readTruckClass: {
    method: 'POST',
    uri: baseurl + 'readTruckClass',
  },

  getQuickTrucksFromBatch: {
    method: 'POST',
    uri: baseurl + 'getQuickTrucksFromBatch',
  },

  getTruckUsageFromRoutes: {
    method: 'POST',
    uri: baseurl + 'getTruckUsageFromRoutes',
  },

  cloneFleetTruck: {
    method: 'POST',
    uri: baseurl + 'cloneFleetTruck',
  },

  getTruckTypesFromSite: {
    method: 'POST',
    uri: baseurl + 'getTruckTypesFromSite',
  },

  readTruckSkeletons: {
    method: 'POST',
    uri: baseurl + 'readTruckSkeletons',
  },

  getTruckIdsFromModel: {
    method: 'POST',
    uri: baseurl + 'getTruckIdsFromModel',
  },

  queryTrucksFromRoute: {
    method: 'POST',
    uri: baseurl + 'queryTrucksFromRoute',
  },

  createNewTruckWithEditedBays: {
    method: 'POST',
    uri: baseurl + 'createNewTruckWithEditedBays',
  },

  queryTruckLoadBalance: {
    method: 'POST',
    uri: baseurl + 'queryTruckLoadBalance',
  },

  getBaysFromShipment: {
    method: 'POST',
    uri: baseurl + 'getBaysFromShipment',
  },

  addEditTruck: {
    method: 'POST',
    uri: baseurl + 'addEditTruck',
  },

  getTruckAxleTypeWithID: {
    method: 'POST',
    uri: baseurl + 'getTruckAxleTypeWithID',
  },

  eraseCalcFromShipment: {
    method: 'POST',
    uri: baseurl + 'eraseCalcFromShipment',
  },

  getQuickTrucksFromSite: {
    method: 'POST',
    uri: baseurl + 'getQuickTrucksFromSite',
  },

  queryDisabledTrucks: {
    method: 'POST',
    uri: baseurl + 'queryDisabledTrucks',
  },

  queryShipmentsWithTruckID: {
    method: 'POST',
    uri: baseurl + 'queryShipmentsWithTruckID',
  },

  addFleetTrucksFromPaste: {
    method: 'POST',
    uri: baseurl + 'addFleetTrucksFromPaste',
  },
};

module.exports = trucks;
