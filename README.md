# Quick Pallet Maker - Client Js

## Description

qpm-client-js It is a library that communicates with the Quick Pallet Maker server, it uses the methods already established in the QPM API documentation (http://45.79.44.19:8888/QPMCalcServer/api/)

## Install with NPM
```shell
npm install qpm-client-js
```

## Example

```javascript
// importing library qpm-client-js
const { QPM } = require("qpm-client-js");

// loading setting for comunication API Quick Pallet Maker
const Client = QPM({
    "username": "administrator", // username
    "password": "0000", // password 
    "server": "http://45.79.44.19:8888" // link and port the server
});

```

Using before setting, you request data to serve. example:

```javascript
// function not async
function requestAddClassVariable(){

    // function recibe response
    const handleResponse = function(response){
        console.log(response)
    };

    // Client.method("name_method", { params })
    Client.method("addEditAssetClass", {
        classinfo: {
            site_name: "San Jose CR",
            asset_class: "Test1 - erik",
            asset_description: "Description - test - 1 ",
            asset_text: "1",
            level: 2
        }
    });

    // request data on server and 
    // execute handleResponse before declared
    Client.fetch().then(handleResponse);
};

// creating function async
async function addAssetClass(){
    
    // Client.method( "name_method", { params })
    Client.method("addEditAssetClass", {
        classinfo: {
            site_name: "San Jose CR",
            asset_class: "Test1 - erik",
            asset_description: "Description - test - 1 ",
            asset_text: "1",
            level: 2
        }
    });
    
    // request data on function async
    let asset = await Client.fetch().then((t) => t);
    console.log("asset", asset);
}
```

The above example is based on the following link in the QPM API documentation http://45.79.44.19:8888/QPMCalcServer/api/classes/addClassVariable.cfm