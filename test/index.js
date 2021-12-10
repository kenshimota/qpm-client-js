const { QPM } = require('../index');
const params = require("../config/data.json");

// esta es la variable cliente
const Client = QPM({
  username: params.username, // username
  password: params.password, // password
  server: params.server, // link and port the server
});

// ---------- Main -----------
async function main() {
  Client.method('queryBoxLocationsFromPalletFills', {
    fillids: { fillids: [1] },
  })
    .fetch()
    .then(console.log);

  Client.method('getBoxTextFromRouteId', {
    routeid: { route_id: 1 },
  });

  Client.fetch().then(console.log);

  /* let response = null; // variable data request catch

  Client.method('getTransportStatus', {
    transports: { transports: 1 },
  });
  Client.fetch().then(console.log);

  Client.method('searchRoutesWithString', {
    searchinfo: {
      site_name: 'San Jose CR',
      search_term: 'route_name',
      snippet: '607',
    },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('dumpFullRoutes', {
    routedata: {
      site_name: 'San Jose CR',
      user_name: 'tsancio_cr',
      column_names:
        'warehouse,driver_id,driver_name,truck_name,comment,route_date,route_name,po,client_id,client_name,prod_id,prd_comment,prod_seq,prod_q,trip',
      column_separator: ',',
      overwrite_trips: true,
      column_data: `
		    Jose,6322338,Tomas,T11679,NA,210311,Ruta1,10000,1001,Cliente1001,1000018496,NA,1,1000,1
		    Jose,8675309,Claudia,T11787,NA,210311,Ruta2,20000,1002,Cliente1002,1000018497,NA,1,200,1
		    Jose,28324864,Matteo,T10873,NA,210311,Ruta2,30000,1003,Cliente1003,1000018528,NA,1,180,1
		    Jose,28324864,Matteo,T10873,NA,210311,Ruta2,30000,1003,Cliente1003,1000019435,NA,1,500,1
	`,
    },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('createBatchWithRoutes', {
    routedata: {
      user_name: 'tsancio_cr',
      site_name: 'San Jose CR',
      routes: [
        {
          route_name: '607',
          route_date: '2021-03-23 08:55:23',
          comment: '000009800',
        },
      ],
    },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('addShipItemToRoute', {
    shipitemdata: {
      route_name: '607',
      route_date: '2021-03-23 08:55:23',
      comment: '000009800',
      po: '020011',
      prod_id: '63585',
      client_id: '030045',
      client_name: 'Quesos Los Palos Grandes',
      prod_seq: 1,
      prod_q: 130,
      trip: 1,
      site_name: 'San Jose CR',
    },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('dumpEmptyRoute', {
    routedata: {
      warehouse: 'cfm2',
      driver_id: '6322338',
      driver_name: 'Tomas Sancio',
      route_date: '2021-03-23 08:55:23',
      route_name: '607',
      truck_name: '258',
      comment: '000009800',
      site_name: 'San Jose CR',
    },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('queryTruckFillShipments', {
    dateinfo: {
      dbname: 'count',
      date1: '2020-12-01',
      date2: '2021-01-12',
    },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('deleteCalcsWithShipmentID', {
    shipmentinfo: { id: 4000 },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('addEditPackage', {
    pinfo: {
      site_name: 'San Jose CR',
      pp_code: '1000',
      pp_allowlength: '100',
      pp_allowdiam: '100',
      pp_allowwidth: '100',
      pp_allowheight: '100',
      pp_body: '72',
      pp_cap: '100',
      pp_capdiam: '100',
      pp_length: '10',
      pp_diameter: '100',
      pp_width: '100',
      pp_height: '100',
      pp_weight: '100',
      pp_c1: '100',
      pp_c2: '100',
      pp_c3: '100',
      pp_c4: '100',
      pp_description: 'descriocion',
      pp_type: '1',
      pp_unit: '120',
      updated: '2020-12-01',
    },
  });

  // request data
  response = await Client.fetch().then(record => record);
  console.log(response);

  Client.method('dumpConsignmentPart', {
    consignment: {
      site_name: 'San Jose CR',
      user_name: 'tsancio_cr',
      cargo_date: '2021-03-21 12:00:00',
      cargo_name: 'TestLoad01',
      origin: 'Guatemala',
      destination: 'Guatepeor',
      vessel: 'Luisa',
      comment: '000142',
      cargo_items: [
        {
          po: '000014X',
          client_name: 'Yepex y co',
          client_id: '100265',
          box_amount: 46,
          sku_name: 'Test20210321A',
          sequence: 1,
        },
      ],
    },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('deleteShipmentWithID', {
    shipid: { id: 100 },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('updateBoxConstraints', {
    constraints: {
      site_name: 'San Jose CR',
      box_code: 'any code',
      box_compl: 100,
      box_compw: 100,
      box_compht: 100,
      box_maxsl: 400,
      box_maxsw: 400,
      box_maxsht: 400,
    },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('listBoxesPerClass', {
    classname: {
      site_name: 'San Jose CR',
      class_name: 'Test - erik',
    },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('listBoxesPerSiteClassUnit', {
    boxids: {
      site_name: 'San Jose CR',
      class_name: 'Test - erik',
      box_unit: 0,
    },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('dumpShortBox', {
    boxdata: {
      site_name: 'San Jose CR',
      box_class: 'class 1 box',
      box_code: 'any code',
      box_extlength: 100,
      box_extwidth: 100,
      box_extheight: 100,
      box_weight: 100,
      board_type: 0,
      box_comp: 100,
      box_color: '#666666',
      box_desc: 'Descripcion de erik',
      box_class1: 100,
      box_class2: 100,
      box_unit: 1,
      box_enabled: true,
    },
  });
  response = await Client.fetch().then(t => t);
  console.log(response);

  Client.method('dumpNuPastedBoxes', {
    items: {
      column_data: `
        site 'San Jose CR',
        box_code '400',
        box_desc '100',
        box_class1 '1',
        box_class2 '2',
        box_color 'Blue',
        box_comp '10',
        box_extlength '10',
        box_extwidth '10',
        box_extheight '10',
        box_weight '10',
        box_unit '10'
      `,
    },
  });

  // request data
  response = await Client.fetch().then(record => record);
  console.log(response);

  Client.method('addBoxForCalc', {
    boxinfo: {
      shipment_id: 18127,
      box_amount: 2000,
      box_code: 'any code',
      box_desc: 'Descripcion de la caja',
      box_class: 'Test1 - erik',
      box_color: '#666666',
      box_extlength: 100,
      box_extwidth: 100,
      box_extheight: 100,
      box_weight: 100,
      box_allowlength: 100,
      box_allowwidth: 100,
      box_allowheight: 100,
      box_unit: 100,
    },
  });
  let box = await Client.fetch().then(t => t);
  console.log(box);*/
  //for (let i = 0; i <= 254; i++) {
  //let code = String.fromCharCode(i);
  // chars[code] = await
  //console.log(chars);
  //}
  /*Client.method('updatePropertiesForBoxID', { fullbox_id: { fullbox_id: 1 } });
  let fullboxid = await Client.fetch().then(t => t);

  let pack = await Client.method('addEditPackage', {
    pinfo: {
      site_name: 'San Jose CR',
      pp_code: '123',
      pp_allowlength: true,
      pp_allowdiam: true,
      pp_allowwidth: true,
      pp_allowheight: true,
      pp_body: 636.21,
      pp_cap: 238.21,
      pp_capdiam: 2873.12,
      pp_length: 2873.2,
      pp_diameter: 237.47,
      pp_width: 238.21,
      pp_height: 123.41,
      pp_weight: 100.32,
      pp_c1: 'A1',
      pp_c2: 'P3',
      pp_c3: 'E5',
      pp_c4: '42',
      pp_description: 'pp descripcion erik',
      pp_type: 5,
      pp_unit: 4,
      updated: '2020-12-01',
    },
  })
    .fetch()
    .then(t => t);

  await Client.method('listPacksPerSite', {
    sede: { site_name: 'San Jose CR' },
  })
    .fetch()
    .then(console.log);

  Client.method('getPackageInfo', {
    ppdata: {
      id: pack.id,
      pp_code: '123',
    },
  })
    .fetch()
    .then(console.log);

  Client.method('addEditAssetClass', {
    classinfo: {
      site_name: 'San Jose CR',
      asset_class: 'Test1 - erik',
      asset_description: 'Description - test - 1 ',
      asset_text: '1',
      level: 2,
    },
  });

  // solicitando datos del api
  let asset = await Client.fetch().then(t => t);
  console.log('asset', asset);

  // cambiando de llamada
  Client.method('addClassVariable', {
    variableinfo: {
      site_name: 'San Jose CR',
      asset_class: 'Test1 - erik',
      level: 2,
      variable_description: 'Estoy describiendo',
      variable_name: 'var1',
      variable_sqltype: 'varchar',
      variable_value: 'TEST',
    },
  });

  // solicitando los datos del api de la siguiente llamada
  let variable = await Client.fetch().then(t => t);
  console.log('variable', variable);

  // obteniendo la lista de clases de un sitio determinado
  await Client.method('listAllPrimaryClassesFromSite', {
    sitename: { site_name: 'San Jose CR' },
  })
    .fetch()
    .then(console.log);

  // obteniendo la lista de clases de un sitio determinado
  await Client.method('listAllPrimaryClassesFromSite', {
    sitename: { site_name: 'San Jose CR' },
  })
    .fetch()
    .then(console.log);

  // obtenemos la listad de board de un sitio determinado
  let defaultBoard = await Client.method('getDefaultBoardFromSite', {
    sitename: { site_name: 'San Jose CR' },
  })
    .fetch()
    .then(response => response);

  // agregando
  let board = await Client.method('addEditBoard', {
    boardinfo: {
      site_name: 'San Jose CR',
      board_type: 'Tipo1',
      board_thickness: 2000.12,
      board_unit: 1,
      board_weight: 200.0,
    },
  })
    .fetch()
    .then(response => response);
  console.log(board);

  // obtiene la informacion de la cubeta
  await Client.method('getBoardInfo', {
    boardid: { id: defaultBoard.id },
  })
    .fetch()
    .then(console.log);

  // eliminando un board
  await Client.method('deleteBoards', {
    boardids: {
      boardids: [{ id: board.id }],
    },
  })
    .fetch()
    .then(console.log);

  await Client.method('getRSCDrawing', {
    boxdata: {
      width: 1000,
      height: 1000,
      box_extlength: 200,
      box_extwidth: 400,
      box_extheight: 123.12,
      box_color: 'azul',
      box_thick: 12398.4,
    },
  })
    .fetch()
    .then(console.log);

  await Client.method('listBoardsPerSite', {
    siteinfo: { site_name: 'San Jose CR' },
  })
    .fetch()
    .then(console.log);

  // obteniendo todas la clases
  await Client.method('getVariablesFromClassID', {
    classid: { assetclass_id: asset.id },
  })
    .fetch()
    .then(console.log);

  // obteniendo todas la clases
  await Client.method('getAllFromClass', {
    classinfo: {
      site_name: 'San Jose CR',
      asset_class: 'Test1 - erik',
      level: 2,
    },
  })
    .fetch()
    .then(console.log);

  // eliminando la variable recien creada anteriormente
  await Client.method('deleteClassVariable', {
    variableid: { id: variable.id },
  })
    .fetch()
    .then(console.log);

  // eliminando la variable todas la variables
  await Client.method('deleteAllVariablesForClass', {
    classname: {
      site_name: 'San Jose CR',
      asset_class: 'Test1 - erik',
      level: 2,
    },
  })
    .fetch()
    .then(console.log);

  // eliminando los datos del acces class
  await Client.method('deleteAssetClass', {
    assetid: { id: asset.id },
  })
    .fetch()
    .then(console.log);*/
}

main();
