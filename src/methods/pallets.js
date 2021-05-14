const baseurl = '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=';

const pallets = {
	queryPalletPatternsWithSite: {
		method: "POST",
		uri: baseurl + "queryPalletPatternsWithSite",
	},

	querySlabsFromSite: {
		method: "POST",
		uri: baseurl + "querySlabsFromSite" 
	},

	queryPalletPatternsWithBoxIds: {
		method: "POST",
		uri: baseurl + "queryPalletPatternsWithBoxIds"
	},


	removeAllSlabsFromPallet: {
		method: "POST",
		uri: baseurl + "removeAllSlabsFromPallet"
	},

	deletePatternsWithIds: {
		method: "POST",
		uri: baseurl + "deletePatternsWithIds" 
	},

	convertPalletXMLtoJSON: {
		method: "POST",
		uri: baseurl + "convertPalletXMLtoJSON"
	},

	fixSlabList: {
		method: "POST",
		uri: baseurl + "fixSlabList"
	},

	getBayDataFromTruck: {
		method: "POST",
		uri: baseurl + "getBayDataFromTruck"
	},

	getPalletGap: {
		method: "POST",
		uri: baseurl + "getPalletGap",
	},

	getFullPalletInfo: {
		method: "POST",
		uri: baseurl + "getFullPalletInfo"
	},

	dumpSlabToDatabase: {
		"method": "POST",
		uri: baseurl + "dumpSlabToDatabase"
	},


	updateDefaultWithId: {
		method: "POST",
		uri: baseurl + "updateDefaultWithId"
	},

	getFullPalletsFromBoxIds: {
		method: "POST",
		uri: baseurl + "getFullPalletsFromBoxIds"
	},

	queryOrphanStdPalletIds: {
		method: "POST",
		uri: baseurl + "queryOrphanStdPalletIds"
	},

	queryDisabledPallets: {
		method: "POST",
		uri: baseurl + "queryDisabledPallets"
	},

	queryMissingLocations: {
		method: "POST",
		uri: baseurl + "queryMissingLocations"
	},

	get2DSVGFromArrangement: {
		method: "POST",
		uri: baseurl + "get2DSVGFromArrangement"
	},

	dumpEmptyPallet: {
		method: "POST",
		uri: baseurl + "dumpEmptyPallet",
	},

	dumpFullPallet: {
		method: "POST",
		uri: baseurl + "dumpFullPallet"
	},


	updateFullStandardPallet: {
		method: "POST",
		uri: baseurl + "updateFullStandardPallet"
	},

addEditPalletConstraints: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=addEditPalletConstraints',
  },

  addEditSlab: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=addEditSlab',
  },

  deleteEmptyPallet: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=deleteEmptyPallet',
  },

  deleteFullPallet: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=deleteFullPallet',
  },

  deleteFullPallets: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=deleteFullPallets',
  },

  deletePallets: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=deletePallets',
  },

  deleteSlab: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=deleteSlab',
  },

  deleteSlabs: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=deleteSlabs',
  },

  getConstraintsPerSlab: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=getConstraintsPerSlab',
  },

  getContentsFromPalletFill: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=getContentsFromPalletFill',
  },

  getFullPalletContents: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=getFullPalletContents',
  },

  getPalletInfo: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=getPalletInfo',
  },

  getSlabInfo: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=getSlabInfo',
  },

  listFullPalletsPerSite: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=listFullPalletsPerSite',
  },

  listPalletNamesPerSite: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=listPalletNamesPerSite',
  },

  listPalletsPerSite: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=listPalletsPerSite',
  },

  listSlabsPerSite: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=listSlabsPerSite',
  },

  queryOrphanPalletIDs: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=queryOrphanPalletIDs',
  },

  fillPalletFromBox: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=fillPalletFromBox',
  },

  fillPalletSequence: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=fillPalletSequence',
  },

  getPalletArrangement: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=getPalletArrangement',
  },

  palletFillFromDims: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletCalc.cfc?method=palletFillFromDims',
  },

  palletFillsFromShipmentDims: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?wsdl&method=palletFillsFromShipmentDims',
  },

  fullPalletSVGFromData: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/SVGPalletCalcs.cfc?method=fullPalletSVGFromData',
    responseType: 'text',
  },

  getPalletsByLoadType: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMPalletService.cfc?method=getPalletsByLoadType',
  },
};

module.exports = pallets;
