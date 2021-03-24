const boards = {
  addEditBoard: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=addEditBoard',
  },

  deleteBoards: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=deleteBoards',
  },

  getDefaultBoardFromSite: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=getDefaultBoardFromSite',
  },

  getBoardInfo: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=getBoardInfo',
  },

  getRSCDrawing: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=getRSCDrawing',
    responseType: 'text',
  },

  listBoardsPerSite: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=listBoardsPerSite',
  },

  updatePropertiesForBoxID: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=updatePropertiesForBoxID',
  },
};

module.exports = boards;
