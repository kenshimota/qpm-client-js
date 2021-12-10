# Quick Pallet Maker - Client Js

## Description

qpm-client-js It is a library that communicates with the Quick Pallet Maker server, it uses the methods already established in the QPM API documentation (http://45.79.44.19:8888/QPMCalcServer/api/)

## Install with NPM

```shell
npm install qpm-client-js
```

## Example with Login

```javascript
// importing library qpm-client-js
const { QPM } = require("qpm-client-js");


// instance library QPM
const Client = QPM();

// login data user this return an object with data user that id, site, user_leve, others ...
Client.login({
    "username": "user_example", // username
    "password": "password_example", // password
    "server": "https://mi-server.com:8000" // link and port the server
    "calcdb": "qpm_calcdb", // calcdb: the name of the data source for the calculation database.
    "ctrldb": "qpm_controldb" // controldb: the name of the data source for the control database.
});

```

Using before setting, you request data to serve. example:

### function not async in javascript

```javascript
// function not async
function requestAddClassVariable() {
  // function recibe response
  const handleResponse = function (response) {
    console.log(response);
  };

  // Client.method("name_method", { params })
  Client.method('addEditAssetClass', {
    classinfo: {
      site_name: 'San Jose CR',
      asset_class: 'Test1 - erik',
      asset_description: 'Description - test - 1 ',
      asset_text: '1',
      level: 2,
    },
  });

  // request data on server and
  // execute handleResponse before declared
  Client.fetch().then(handleResponse);
}
```

### function async in javascript

```javascript
// creating function async
async function addAssetClass() {
  // Client.method( "name_method", { params })
  Client.method('addEditAssetClass', {
    classinfo: {
      site_name: 'San Jose CR',
      asset_class: 'Test1 - erik',
      asset_description: 'Description - test - 1 ',
      asset_text: '1',
      level: 2,
    },
  });

  // request data on function async
  let asset = await Client.fetch().then(t => t);
  console.log('asset', asset);
}
```

## Example Not Login

```javascript
// importing library qpm-client-js
const { QPM } = require('qpm-client-js');

// loading setting for comunication API Quick Pallet Maker
const Client = QPM({
  username: 'user_example', // username
  password: 'password_example', // password
  server: 'https://mi-server.com:8000', // link and port the server
});
```

Using before setting, you request data to serve. example:

### function not async in javascript

```javascript
// function not async
function requestAddClassVariable() {
  // function recibe response
  const handleResponse = function (response) {
    console.log(response);
  };

  // Client.method("name_method", { params })
  Client.method('addEditAssetClass', {
    classinfo: {
      site_name: 'San Jose CR',
      asset_class: 'Test1 - erik',
      asset_description: 'Description - test - 1 ',
      asset_text: '1',
      level: 2,
    },
  });

  // request data on server and
  // execute handleResponse before declared
  Client.fetch().then(handleResponse);
}
```

### function async in javascript

```javascript
// creating function async
async function addAssetClass() {
  // Client.method( "name_method", { params })
  Client.method('addEditAssetClass', {
    classinfo: {
      site_name: 'San Jose CR',
      asset_class: 'Test1 - erik',
      asset_description: 'Description - test - 1 ',
      asset_text: '1',
      level: 2,
    },
  });

  // request data on function async
  let asset = await Client.fetch().then(t => t);
  console.log('asset', asset);
}
```

The above example is based on the following link in the QPM API documentation http://45.79.44.19:8888/QPMCalcServer/api/classes/addClassVariable.cfm
