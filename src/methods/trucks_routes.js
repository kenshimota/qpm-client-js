const baseurl = '/QPMCalcServer/cfc/QPMRouteService.cfc?wsdl&method=';

const trucks_routes = {
  addShipItemToRoute: {
    method: 'POST',
    uri: baseurl + 'addShipItemToRoute',
  },

  dumpEmptyRoute: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMRouteService.cfc?wsdl&method=dumpEmptyRoute',
  },

  addShipItemToRoute: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMShipItemService.cfc?wsdl&method=addShipItemToRoute',
  },

  createBatchWithRoutes: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMRouteBatchService.cfc?wsdl&method=createBatchWithRoutes',
  },

  dumpFullRoutes: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMRouteService.cfc?wsdl&method=dumpFullRoutes',
  },

  searchRoutesWithString: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMRouteService.cfc?wsdl&method=searchRoutesWithString',
  },

  getTransportStatus: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMRouteService.cfc?wsdl&method=getTransportStatus',
  },

  checkBatchItems: {
    method: 'POST',
    uri: baseurl + 'checkBatchItems',
  },

  deleteBatchWithID: {
    method: 'POST',
    uri: baseurl + 'deleteBatchWithID',
  },

  getEmptyBatchesByDate: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMRouteBatchService.cfc?method=getEmptyBatchesByDate',
  },

  getTransportStatus: {
    method: 'POST',
    uri: baseurl + 'getTransportStatus',
  },

  queryInputDataFromBatch: {
    method: 'POST',
    uri: baseurl + 'queryInputDataFromBatch',
  },

  getEmptyRoutesByBatch: {
    method: 'POST',
    uri: baseurl + 'getEmptyRoutesByBatch',
  },

  dumpBatchWithRoutes: {
    method: 'POST',
    uri: baseurl + 'dumpBatchWithRoutes',
  },

  readEmptyRoutesByBatch: {
    method: 'POST',
    uri: baseurl + 'readEmptyRoutesByBatch',
  },

  splitAndDeleteAllFromBatch: {
    method: 'POST',
    uri: baseurl + 'splitAndDeleteAllFromBatch',
  },

  deleteBatchesFromList: {
    method: 'POST',
    uri: baseurl + 'deleteBatchesFromList',
  },

  zeroItemsInBatch: {
    method: 'POST',
    uri: baseurl + 'zeroItemsInBatch',
  },

  createMissingBoxesFromBatchID: {
    method: 'POST',
    uri: baseurl + 'createMissingBoxesFromBatchID',
  },

  deleteExtraItems: {
    method: 'POST',
    uri: baseurl + 'deleteExtraItems',
  },

  getRouteIDsFromBatchID: {
    method: 'POST',
    uri: baseurl + 'getRouteIDsFromBatchID',
  },

  readRouteWithCalcInfo: {
    method: 'POST',
    uri: baseurl + 'readRouteWithCalcInfo',
  },

  getRouteIDsFromDates: {
    method: 'POST',
    uri: baseurl + 'getRouteIDsFromDates',
  },

  getAllFromRoute: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMShipItemService.cfc?method=getAllFromRoute',
  },

  queryShipIdsByBatchDate: {
    method: "POST",
    uri: baseurl + "queryShipIdsByBatchDate"
  },

  queryBatchIDsByDate: {
    method: "POST",
    uri: baseurl + "queryBatchIDsByDate"
  }
};

module.exports = trucks_routes;
