const assetClass = require("./qpm-asset-class");

// librery client to QPM API
const QPM = (config) => ({

    // details the authentication and server
    _config: config,

    // valid setting QPM Client
    valide: function(){
        let config = this._config;
        if(!config)
            throw "Error not had setting username and server";
        if(!config.username)
            throw "Invalidate username";
        if(!config.password)
            throw "Invalidate password";
        if(!config.server)
            throw "Invalidate server";
        return config;
    },

    // function verifica params before call to api
    verifyParams: function(){

    },

    ...assetClass,
});

module.exports = {QPM};