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
    uri: '/QPMCalcServer/cfc/QPMTruckCalc.cfc?method=queryBoxesFromMultipleShipments',
  },

  queryBoxLocationsFromShipment: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMTruckCalc.cfc?method=queryBoxLocationsFromShipment',
  },

  queryMaxAxleWeightsFromTruckName: {
    method: 'POST',
    uri: baseurl + 'queryMaxAxleWeightsFromTruckName',
  },

  queryPalletPropertiesFromShipments: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMTruckCalc.cfc?method=queryPalletPropertiesFromShipments',
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

  addEditFleetTruck: {
    method: 'POST',
    uri: baseurl + 'addEditFleetTruck',
  },

  listFleetFromModel: {
    method: 'POST',
    uri: baseurl + 'listFleetFromModel',
  },

  queryTruckPropertiesFromSite: {
    method: 'POST',
    uri: baseurl + 'queryTruckPropertiesFromSite',
  },

  queryQuickTrucksFromSite: {
    method: 'POST',
    uri: baseurl + 'queryQuickTrucksFromSite',
  },

  deleteFleetTruck: {
    method: 'POST',
    uri: baseurl + 'deleteFleetTruck',
  },

  disableTruck: {
    method: 'POST',
    uri: baseurl + 'disableTruck',
  },

  deleteTruckClass: {
    method: 'POST',
    uri: baseurl + 'deleteTruckClass',
  },

  calculateFullLiteTruck: {
    method: 'POST',
    uri: baseurl + 'calculateFullLiteTruck',
  },

  calculateFullTruckFromRouteID: {
    method: 'POST',
    uri: baseurl + 'calculateFullTruckFromRouteID',
  },

  queryBatchIDsByDate: {
    method: 'POST',
    uri: baseurl + 'queryBatchIDsByDate',
  },

  dumpTruckClass: {
    method: 'POST',
    uri: baseurl + 'dumpTruckClass',
  },

  createNewTruckWithJoinedBays: {
    method: 'POST',
    uri: baseurl + 'createNewTruckWithJoinedBays',
  },

  readSkeletonsByProducts: {
    method: 'POST',
    uri: baseurl + 'readSkeletonsByProducts',
  },

  checkTruckCalc: {
    method: 'POST',
    uri: baseurl + 'checkTruckCalc',
  },

  transferItemsToEqualBays: {
    method: 'POST',
    uri: baseurl + 'transferItemsToEqualBays',
  },

  getBayDataFromSite: {
    method: 'POST',
    uri: baseurl + 'getBayDataFromSite',
  },

  readTruckItem: {
    method: 'POST',
    uri: baseurl + 'readTruckItem',
  },

  dumpTruck: {
    method: 'POST',
    uri: baseurl + 'dumpTruck',
  },

  eraseCalculations: {
    method: 'POST',
    uri: baseurl + 'eraseCalculations',
  },

  searchQuickTrucksFromSite: {
    method: 'POST',
    uri: baseurl + 'searchQuickTrucksFromSite',
  },

  getCalcInputFromRouteID: {
    method: 'POST',
    uri: baseurl + 'getCalcInputFromRouteID',
  },

  dumpTruckContentsWithIds: {
    method: 'POST',
    uri: baseurl + 'dumpTruckContentsWithIds',
  },

  searchTruckTypesFromSite: {
    method: 'POST',
    uri: baseurl + 'searchTruckTypesFromSite',
  },
};

module.exports = trucks;
