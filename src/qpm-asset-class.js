const {fetchSync} =  require("./fetchSync");

// function The purpose of the addEditAssetClass method is to create a new asset class or edit an existing one.
/* imput -> Object({
	"site_name": [Varchar(20)],
	"asset_class": [Varchar(30)],
	"asset_description": [Varchar(50)],
	"asset_text": [Text]
})*/
const addEditAssetClass = async function(params){
    try {
        // validate information setting and return settings
        const {username, password, server} = this.valide();
        
        // request to api
        let response = await fetchSync(`${server}/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=addEditAssetClass`,{
            method: "POST",
            auth: {username, password},
            body: params,
        }).then((t) => (t)).catch((error)=>{
            throw error;
        });

        console.log( response );
        return response;
    } catch(error){
        console.error(error);
        throw error;
        return false;
    }
};

/* Asset classes can have associated variables. This method adds them to the database. 
If you wish to replace a series of variables for a given asset class, you will first need to use
the deleteAllVariablesForClass() method before adding the new ones. */
const addClassVariable = async function(params){
    try {
        // validate information setting and return settings
        const {username, password, server} = this.valide();
        
        // request to api
        let response = await fetchSync(`${server}/QPMCalcServer/cfc/QPMAssetClassService.cfc?wsdl&method=deleteAllVariablesForClass`,{
            method: "POST",
            auth: {username, password},
            body: params,
        }).then((t) => (t)).catch((error)=>{
            throw error;
        });

        console.log( response );
        return response;
    } catch(error){
        console.error(error);
        throw error;
        return false;
    };
};



/* exporting modules need */
module.exports = {addEditAssetClass, addClassVariable, };