const methods = {

    "addEditAssetClass": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=addEditAssetClass",
    },

    "addClassVariable": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=addClassVariable",
    },

    "deleteAssetClass": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=deleteAssetClass",
    },

    "deleteClassVariable": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=deleteClassVariable"
    },

    "deleteAllVariablesForClass": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=deleteAllVariablesForClass"
    },

    "getAllFromClass": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=getAllFromClass"
    },

    "getVariablesFromClassID": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=getVariablesFromClassID"
    },

    "listAllPrimaryClassesFromSite": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=listAllPrimaryClassesFromSite"
    },

    "listAllSecondaryClassesFromSite": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=listAllSecondaryClassesFromSite",
    },

    "addEditBoard": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=addEditBoard"
    },

    "deleteBoards": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=deleteBoards"
    },

    "getDefaultBoardFromSite": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=getDefaultBoardFromSite"
    },

    "getBoardInfo": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=getBoardInfo"
    },

    "getRSCDrawing": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=getRSCDrawing"
    },

    "listBoardsPerSite": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl&method=listBoardsPerSite"
    }
};

const reports = ["/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl", "/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl"];
module.exports = { methods, reports };