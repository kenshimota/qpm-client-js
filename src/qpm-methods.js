const boards = require('./methods/boards');
const classes = require('./methods/classes');
const packages = require('./methods/packages');
const boxes = require('./methods/boxes');
const pallets = require('./methods/pallets');
const shipments = require('./methods/shipments');
const trucks = require('./methods/trucks');
const trucks_routes = require('./methods/trucks_routes');
const consignments = require('./methods/consignments');
const axle = require('./methods/axle');
const containers = require('./methods/containers');
const users = require('./methods/users');
const customers = require('./methods/customers');

let packagesMethods = {
  boards,
  classes,
  packages,
  boxes,
  pallets,
  shipments,
  trucks,
  trucks_routes,
  consignments,
  axle,
  containers,
  users,
  customers,
};

let methods = {};

// methodos expuesto
for (let i in packagesMethods) {
  for (let j in packagesMethods[i]) methods[j] = packagesMethods[i][j];
}

// listado de metodos para estructuras de datos
const reports = [
  { url: '/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl', category: 'classes' },
  { url: '/QPMCalcServer/cfc/QPMBoardService.cfc?wsdl', category: 'boards' },
  { url: '/QPMCalcServer/cfc/QPMPackageService.cfc?wsdl', category: 'packs' },
  { url: '/QPMCalcServer/cfc/QPMPalletCalc.cfc?wsdl', category: 'packs' },
  { url: '/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl', category: 'boxes' },
  { url: '/QPMCalcServer/cfc/QPMCargoService.cfc?wsdl', category: 'cargo' },
  { url: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl', category: 'pallets' },
  { url: '/QPMCalcServer/cfc/QPMShipmentService.cfc?wsdl', category: 'shipments' },
  { url: '/QPMCalcServer/cfc/QPMTruckService.cfc?wsdl', category: 'trucks' },
  { url: '/QPMCalcServer/cfc/QPMRouteBatchService.cfc?wsdl', category: 'routes' },
  { url: '/QPMCalcServer/cfc/QPMAxleService.cfc?wsdl', category: 'axles' },
  { url: '/QPMCalcServer/cfc/QPMContainerService.cfc?wsdl', category: 'containers' },
  { url: '/QPMCalcServer/cfc/QPMUserService.cfc?wsdl', category: 'users' },
  { url: '/QPMCalcServer/cfc/VROCustomerService.cfc?wsdl', category: 'customers' },
  { url: '/QPMCalcServer/cfc/QPMCustomerService.cfc?wsdl', category: 'customers' },
];

module.exports = { methods, reports };
