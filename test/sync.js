const { QPM } = require('../index');

const main = async function () {
  const Client = QPM();
  // esta es la variable cliente
  await Client.login({
    username: 'tsancio_cr', // username
    password: 'koona', // password
    server: 'http://45.79.44.19:8888', // link and port the server
    calcdb: 'qpm_calcdb',
    ctrldb: 'qpm_controldb',
  });

  // esta funcion se encarga de buscar que methodos hacen falta por documentar
  Client.getMethodsNotDefined().then(methods => {
    const documentation = [],
      notDocumentation = [];

    // evaluando si tienen o no tienen documentation
    methods.forEach(r => {
      if (r.status) documentation.push(r);
      else notDocumentation.push(r);
    });

    console.log(' --------- Methods Documentation --------- \n');
    console.table(documentation);

    console.log('---------- Methods not Documentation ------ \n');
    console.table(notDocumentation);
  });
};

main();
