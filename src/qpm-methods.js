const boards = require("./methods/boards");
const classes = require("./methods/classes");
const packages = require("./methods/packages");
const boxes = require("./methods/boxes");
let packagesMethods = { boards, classes, packages, boxes };
let methods = {};

// methodos expuesto
for (let i in packagesMethods) {
    for (let j in packagesMethods[i])
        methods[j] = packagesMethods[i][j];
}

const reports = [
    "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMPackageService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl"
];

module.exports = { methods, reports };