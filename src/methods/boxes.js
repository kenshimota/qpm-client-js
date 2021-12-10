const baseurl = '/QPMCalcServer/cfc/QPMBoxService.cfc?method=';

const boxes = {
  addBoxForCalc: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=addBoxForCalc',
  },

  addEditEmptyBox: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=addEditEmptyBox',
  },

  deleteEmptyBox: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=deleteEmptyBox',
  },

  deleteEmptyBoxes: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=deleteEmptyBoxes',
  },

  deleteFullBox: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=deleteFullBox',
  },

  dumpNuPastedBoxes: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=dumpNuPastedBoxes',
  },

  dumpShortBox: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=dumpShortBox',
  },

  getEmptyBoxInfo: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=getEmptyBoxInfo',
  },

  getShortBoxInputData: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=getShortBoxInputData',
  },

  listBoxesPerClass: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=listBoxesPerClass',
  },

  listClassNamesForBoxesInSite: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=listClassNamesForBoxesInSite',
  },

  listBoxesPerSiteClassUnit: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=listBoxesPerSiteClassUnit',
  },

  listEmptyBoxesPerSite: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=listEmptyBoxesPerSite',
  },

  listSKUsFromSite: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=listSKUsFromSite',
  },

  updateBoxConstraints: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=updateBoxConstraints',
  },

  listSKUsFromSite_paged: {
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=listSKUsFromSite_paged',
    method: 'POST',
  },

  searchFullBoxes: {
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=searchFullBoxes',
    method: 'POST',
  },

  addBoxesForCalc: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=addBoxForCalc',
  },

  addEditFillProperties: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=addEditFillProperties',
  },

  addEditFullBox: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=addEditFullBox',
  },

  convertBoxXMLtoJSON: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=convertBoxXMLtoJSON',
  },

  fillStdCases: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=fillStdCases',
  },

  getAllFullBoxCodes: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=getAllFullBoxCodes',
  },

  getBoxesFromShipment: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=getBoxesFromShipment',
  },

  getBoxPropertiesWithID: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=getBoxPropertiesWithID',
  },

  getBoxTextFromRouteId: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=getBoxTextFromRouteId',
  },

  getShortBoxInputData: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=getShortBoxInputData',
  },

  getSingleClosedRSC: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=getSingleClosedRSC',
  },

  listBoxesPerClass: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=listBoxesPerClass',
  },

  listBoxesPerSiteClassUnit: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=listBoxesPerSiteClassUnit',
  },

  listClassNamesForBoxesInSite: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=listClassNamesForBoxesInSite',
  },

  listEmptyBoxesForSite_paged: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=listEmptyBoxesForSite_paged',
  },

  listSKUsForPasting: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=listSKUsForPasting',
  },

  listSKUsFromSite: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=listSKUsFromSite',
  },

  queryBoxesFromRouteId: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=queryBoxesFromRouteId',
  },

  queryBoxLocationsFromPalletFills: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=queryBoxLocationsFromPalletFills',
  },

  quickBoxEdit: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=quickBoxEdit',
  },

  queryBoxLocationsFromPalletFills: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=queryBoxLocationsFromPalletFills',
  },

  queryBoxSummaryDataFromPalletFills: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoxService.cfc?method=queryBoxSummaryDataFromPalletFills',
  },

  getBoxSummarySkeletonsFromPalletFill: {
    method: 'POST',
    uri: baseurl + 'getBoxSummarySkeletonsFromPalletFill',
  },

  getMissingFromRoute: {
    method: 'POST',
    uri: baseurl + 'getMissingFromRoute',
  },

  getBoxSkeletonsFromShipment: {
    method: 'POST',
    uri: baseurl + 'getBoxSkeletonsFromShipment',
  },

  copyBoxesToSite: {
    method: 'POST',
    uri: baseurl + 'copyBoxesToSite',
  },

  createFullBoxFromShipItem: {
    method: 'POST',
    uri: baseurl + 'createFullBoxFromShipItem',
  },

  getBoxSummariesFromRouteId: {
    method: 'POST',
    uri: baseurl + 'getBoxSummariesFromRouteId',
  },

  getBoxProperties: {
    method: "POST",
    uri: baseurl + "getBoxProperties"
  },

  getFullBoxCount: {
    method: "POST",
    uri: baseurl + "getFullBoxCount"
  },

  deleteCFBox: {
    method: "POST",
    uri: baseurl + "deleteCFBox"
  },



};

module.exports = boxes;
