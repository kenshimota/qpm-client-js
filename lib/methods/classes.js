const classes = {
    "addEditAssetClass": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=addEditAssetClass"
    },

    "addClassVariable": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=addClassVariable"
    },

    "deleteAssetClass": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=deleteAssetClass"
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
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=listAllSecondaryClassesFromSite"
    },

    "refreshFeasibleBaysForBox": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=refreshFeasibleBaysForBox"
    },
    "zapPropertyList": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=zapPropertyList"
    },

    "getVariablesFromAssetClass": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=getVariablesFromAssetClass"
    },

    "getClassesByLevel": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=getClassesByLevel"
    }
};

module.exports = classes;