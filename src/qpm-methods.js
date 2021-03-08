const boards = require("./methods/boards");
const classes = require("./methods/classes");
const packages = require("./methods/packages");
const boxes = require("./methods/boxes");
const pallets = require("./methods/pallets");
const shipments = require("./methods/shipments");
const trucks = require("./methods/trucks");
const trucks_routes = require("./methods/trucks_routes");

let methods = {
    ...boards, ...classes, ...packages, 
    ...boxes, ...pallets, ...shipments,
    ...trucks, ...trucks_routes
};

// listado de metodos para estructuras de datos
const reports = [
    "/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMPackageService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMShipmentService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMTruckService.cfc?wsdl",
    "/QPMCalcServer/cfc/QPMRouteBatchService.cfc?wsdl"
];

module.exports = { methods, reports };