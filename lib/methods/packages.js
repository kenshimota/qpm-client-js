const packages = {
    "addEditPackage": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMPackageService.cfc?wsdl&method=addEditPackage"
    },

    "deletePackage": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMPackageService.cfc?wsdl&method=deletePackage"
    },

    "deletePackages": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMPackageService.cfc?wsdl&method=deletePackages"
    },

    "getPackageInfo": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMPackageService.cfc?wsdl&method=getPackageInfo"
    },

    "listPacksPerSite": {
        method: "POST",
        uri: "/QPMCalcServer/cfc/QPMPackageService.cfc?wsdl&method=listPacksPerSite"
    }
};

module.exports = packages;