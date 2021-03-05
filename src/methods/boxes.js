const boxes = {
	
	"addBoxForCalc": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=addBoxForCalc"
	},

	"addEditEmptyBox": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=addEditEmptyBox"
	},

	"deleteEmptyBox": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=deleteEmptyBox"
	},

	"deleteEmptyBoxes": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=deleteEmptyBoxes"
	},

	"deleteFullBox": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=deleteFullBox"
	},

	"dumpNuPastedBoxes": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=dumpNuPastedBoxes"
	},

	"dumpShortBox": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=dumpShortBox"
	},

	"getEmptyBoxInfo": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=getEmptyBoxInfo"
	},

	"getShortBoxInputData": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=getShortBoxInputData"
	},

	"listBoxesPerClass": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=listBoxesPerClass"
	},

	"listClassNamesForBoxesInSite": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=listClassNamesForBoxesInSite"
	},

	"listBoxesPerSiteClassUnit": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=listBoxesPerSiteClassUnit"
	},

	"listEmptyBoxesPerSite": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=listEmptyBoxesPerSite"
	},

	"listSKUsFromSite": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=listSKUsFromSite"
	},

	"updateBoxConstraints": {
		method: "POST",
		uri: "/QPMCalcServer/cfc/QPMBoxService.cfc?wsdl&method=updateBoxConstraints"
	},
};

module.exports = boxes;