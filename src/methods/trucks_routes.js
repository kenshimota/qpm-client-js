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
    uri: baseurl + 'getEmptyBatchesByDate',
  },

  getTransportStatus: {
    method: 'POST',
    uri: baseurl + 'getTransportStatus',
  },

  queryInputDataFromBatch: {
    method: 'POST',
    uri: baseurl + 'queryInputDataFromBatch',
  },
};

module.exports = trucks_routes;
