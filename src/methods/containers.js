const baseurl = '/QPMCalcServer/cfc/QPMContainerService.cfc?wsdl&method=';

const containers = {
  getContainersFromShipment: {
    method: 'POST',
    uri: baseurl + 'getContainersFromShipment',
  },

  listPlaneULDs: {
    method: 'POST',
    uri: baseurl + 'listPlaneULDs',
  },

  listSiteULDs: {
    method: 'POST',
    uri: baseurl + 'listSiteULDs',
  },

  uldFillWithBoxDims: {
    method: 'POST',
    uri: baseurl + 'uldFillWithBoxDims',
  },

  listContainersPerSite: {
    method: 'POST',
    uri: baseurl + 'listContainersPerSite',
  },

  checkContainerUse: {
    method: 'POST',
    uri: baseurl + 'checkContainerUse',
  },

  getContainerDataFromTruck: {
    method: 'POST',
    uri: baseurl + 'getContainerDataFromTruck',
  },

  addEditContainer: {
    method: 'POST',
    uri: baseurl + 'addEditContainer',
  },

  deleteContainer: {
    method: 'POST',
    uri: baseurl + 'deleteContainer',
  },

  deleteEmptyContainer: {
    method: "POST",
    uri: baseurl + "deleteEmptyContainer"
  },

  readFullContainer: {
    method: "POST",
    uri: baseurl + "readFullContainer"
  },

  queryEmptyContainersWithSiteName: {
    method: "POST",
    uri: baseurl + "queryEmptyContainersWithSiteName"
  },

  dumpEmptyContainer: {
    method: "POST",
    uri: baseurl + "dumpEmptyContainer"
  },

};

module.exports = containers;
