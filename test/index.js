const {QPM} = require("../index");


// esta es la variable cliente
const Client = QPM({
    "username": "administrator", // username
    "password": "0000", // password 
    "server": "http://45.79.44.19:8888" // link and port the server
});

// ---------- Main -----------
async function main(){

    await Client.addEditAssetClass({
        classinfo: {
            site_name: "San Jose CR",
            asset_class: "Test1 - erik",
            asset_description: "Description - test - 1 ",
            asset_text: "Prueb - 1"
        }
    });

};


main();





