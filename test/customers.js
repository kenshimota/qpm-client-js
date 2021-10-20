async function main() {
  const { QPM } = require('../index');
  const params = require("../config/data.json");
  
  // esta es la variable cliente
  const Client = QPM({});
  const data = await Client.login(params).then(t => t);

  Client.method('searchCustomers', { searchstring: { snippet: '', vro_calcdb: 'vro_calcdb' } });
  const response = await Client.fetch().then(t => t);
}

(() => main())();
