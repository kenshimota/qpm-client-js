const { QPM } = require("../index");


// esta es la variable cliente
const Client = QPM({
    "username": "admin_lin001", // username
    "password": "koona001", // password 
    "server": "http://45.79.44.19:8888" // link and port the server
});


// esta funcion se encarga de buscar que methodos hacen falta por documentar
/*Client.getMethodsNotDefined().then((methods) => {
    let i = 1;
    methods.forEach((e, key) => {
        console.log(`- ${i} --> ${e}`);
        i++;
    });
});*/


// ---------- Main -----------
async function main() {


    Client.method("addEditPackage", {
        pinfo: {
            "site_name": "San Jose CR",
            "pp_code": "123",
            "pp_allowlength": true,
            "pp_allowdiam": true,
            "pp_allowwidth": true,
            "pp_allowheight": true,
            "pp_body": 636.21,
            "pp_cap": 238.21,
            "pp_capdiam": 2873.12,
            "pp_length": 2873.2,
            "pp_diameter": 237.47,
            "pp_width": 238.21,
            "pp_height": 123.41,
            "pp_weight": 100.32,
            "pp_c1": "A1",
            "pp_c2": "P3",
            "pp_c3": "E5",
            "pp_c4": "42",
            "pp_description": "pp descripcion erik",
            "pp_type": 5,
            "pp_unit": 4,
            "updated": "2020-12-01"
        }
    }).fetch().then((t) => console.log("test1", t));

    Client.method("getPackageInfo", {
        ppdata: {   
            "id": 242,
            "pp_code": "123",
            "site_name": "San Jose CR"
        }
    }).fetch().then(console.log);

    Client.method("addEditPackage", {
        pinfo: {
            "site_name": "San Jose CR",
            "pp_code": "123",
            "pp_allowlength": true,
            "pp_allowdiam": true,
            "pp_allowwidth": true,
            "pp_allowheight": true,
            "pp_body": 636.21,
            "pp_cap": 238.21,
            "pp_capdiam": 2873.12,
            "pp_length": 2873.2,
            "pp_diameter": 237.47,
            "pp_width": 238.21,
            "pp_height": 123.41,
            "pp_weight": 100.32,
            "pp_c1": "A1",
            "pp_c2": "P3",
            "pp_c3": "E5",
            "pp_c4": "42",
            "pp_description": "pp descripcion erik",
            "pp_type": 5,
            "pp_unit": 4,
            "updated": "2020-12-01"
        }
    }).fetch().then((t) => console.log("test2", t));


    Client.method("addEditPackage", {
        pinfo: {
            "site_name": "San Jose CR",
            "pp_code": "123",
            "pp_allowlength": true,
            "pp_allowdiam": true,
            "pp_allowwidth": true,
            "pp_allowheight": true,
            "pp_body": 636.21,
            "pp_cap": 238.21,
            "pp_capdiam": 2873.12,
            "pp_length": 2873.2,
            "pp_diameter": 237.47,
            "pp_width": 238.21,
            "pp_height": 123.41,
            "pp_weight": 100.32,
            "pp_c1": "A1",
            "pp_c2": "P3",
            "pp_c3": "E5",
            "pp_c4": "42",
            "pp_description": "pp descripcion erik",
            "pp_type": 5,
            "pp_unit": 4,
            "updated": "2020-12-01"
        }
    }).fetch().then((t) => console.log("test3", t));


    /*await Client.method("listPacksPerSite", {
        sede: {site_name: "San Jose CR"}
    }).fetch().then(console.log);
    

    Client.method("getPackageInfo", {
        ppdata: {   
            "id": pack.id,
            "pp_code": "123",
            "site_name": "San Jose CR"
        }
    }).fetch().then(console.log);

    

    Client.method("addEditAssetClass", {
        classinfo: {
            site_name: "San Jose CR",
            asset_class: "Test1 - erik",
            asset_description: "Description - test - 1 ",
            asset_text: "1",
            level: 2
        }
    });

    // solicitando datos del api
    let asset = await Client.fetch().then((t) => t);
    console.log("asset", asset);

    // cambiando de llamada
    Client.method("addClassVariable", {
        variableinfo: {
            "site_name": "San Jose CR",
            "asset_class": "Test1 - erik",
            "level": 2,
            "variable_description": "Estoy describiendo",
            "variable_name": "var1",
            "variable_sqltype": "varchar",
            "variable_value": "TEST"
        }
    });

    // solicitando los datos del api de la siguiente llamada
    let variable = await Client.fetch().then((t) => t);
    console.log("variable", variable);

    // obteniendo la lista de clases de un sitio determinado
    await Client.method("listAllPrimaryClassesFromSite", {
        sitename: { site_name: "San Jose CR" }
    }).fetch().then(console.log);

    // obteniendo la lista de clases de un sitio determinado
    await Client.method("listAllPrimaryClassesFromSite", {
        sitename: { site_name: "San Jose CR" }
    }).fetch().then(console.log);

    // obtenemos la listad de board de un sitio determinado
    let defaultBoard = await Client.method("getDefaultBoardFromSite", {
        sitename: { site_name: "San Jose CR" },
    }).fetch().then((response) => response);

    // agregando 
    let board = await Client.method("addEditBoard", {
        boardinfo: {
            "site_name": "San Jose CR",
            "board_type": "Tipo1",
            "board_thickness": 2000.12,
            "board_unit": 1,
            "board_weight": 200.00
        }
    }).fetch().then((response) => response);
    console.log(board);

    // obtiene la informacion de la cubeta
    await Client.method("getBoardInfo", {
        boardid: { id: defaultBoard.id }
    }).fetch().then(console.log);

    // eliminando un board
    await Client.method("deleteBoards", {
        boardids: {
            boardids: [{ id: board.id }]
        }
    }).fetch().then(console.log);

    await Client.method("getRSCDrawing", {
        boxdata: {
            "width": 1000,
            "height": 1000,
            "box_extlength": 200,
            "box_extwidth": 400,
            "box_extheight": 123.12,
            "box_color": "azul",
            "box_thick": 12398.4
        }
    }).fetch("text").then(console.log);

    await Client.method("listBoardsPerSite", {
        siteinfo: { site_name: "San Jose CR" }
    }).fetch().then(console.log);

    // obteniendo todas la clases
    await Client.method("getVariablesFromClassID", {
        classid: { assetclass_id: asset.id }
    }).fetch().then(console.log);

    // obteniendo todas la clases
    await Client.method("getAllFromClass", {
        classinfo: {
            site_name: "San Jose CR",
            asset_class: "Test1 - erik",
            level: 2
        }
    }).fetch().then(console.log);


    // eliminando la variable recien creada anteriormente
    await Client.method("deleteClassVariable", {
        variableid: { id: variable.id },
    }).fetch().then(console.log);

    // eliminando la variable todas la variables
    await Client.method("deleteAllVariablesForClass", {
        classname: {
            site_name: "San Jose CR",
            asset_class: "Test1 - erik",
            level: 2
        }
    }).fetch().then(console.log);

    // eliminando los datos del acces class
    await Client.method("deleteAssetClass", {
        assetid: { id: asset.id }
    }).fetch().then(console.log);*/

}

main();





