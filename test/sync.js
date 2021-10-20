const { QPM } = require('../index');
const initData = require("../config/data.json");

const main = async function () {
  const Client = QPM();
  // esta es la variable cliente
  await Client.login(initData);

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
