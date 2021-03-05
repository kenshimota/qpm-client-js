const boards = require("./methods/boards");
const classes = require("./methods/classes");
const packages = require("./methods/packages");
const boxes = require("./methods/boxes");

// methodos expuesto
const methods = { 
	...boards, ...classes, ...packages, 
	...boxes 
};

const reports = [
    "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl", 
    "/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMPackageService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl"
];

module.exports = { methods, reports };