async function main() {
  const { QPM } = require('../index');
  const params = {
    username: 'tsancio_cr',
    password: 'koona',
    server: 'http://45.79.44.19:8888',
    calcdb: 'qpm_calcdb',
    ctrldb: 'qpm_controldb',
    vro_calcdb: 'vro_calcdb',
  };

  // esta es la variable cliente
  const Client = QPM({});
  const data = await Client.login(params).then(t => t);

  Client.method('searchCustomers', { searchstring: { snippet: '', vro_calcdb: 'vro_calcdb' } });
  const response = await Client.fetch().then(t => t);
}

(() => main())();
