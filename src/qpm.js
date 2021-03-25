const fetch = require('node-fetch');
const { fetchSync } = require('./fetchSync');
const { methods, reports } = require('./qpm-methods');

// librery client to QPM API
const QPM = config => ({
  // details the authentication and server
  _config: config,
  methods,
  methodsNotAdd: new Set(), // container methods not documentation
  _call: { method: null, params: null },

  // valid setting QPM Client
  valide: function () {
    let config = this._config;
    if (!config) throw 'Error not had setting username and server';
    if (!config.username) throw 'Invalidate username';
    if (!config.password) throw 'Invalidate password';
    if (!config.server) throw 'Invalidate server';
    return config;
  },

  // set method and params for call QPM API
  method: function (method, params = null) {
    try {
      if (!methods[method]) throw 'Method not Found, verify name method';

      // update call data
      this._call = { method, params };
      return this;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  // funcion que se encarga de mostrar los methods faltantes
  getMethodsNotDefined: async function () {
    try {
      const { username, password, server } = this.valide();
      let response = null;
      let elements = null;
      for (let i in reports) {
        uri = `${server}${reports[i].url}`;
        response = await fetchSync(uri, {
          method: 'GET',
          auth: { username, password },
          type: 'xml',
        })
          .then(t => {
            return !t ? null : t.response;
          })
          .catch(error => {
            throw error;
          });

        // evaluando los methodos registrados con los que tengo localmente
        elements = response.elements[0].elements;
        for (let index in elements) {
          if (
            elements[index].attributes &&
            elements[index].attributes.name &&
            elements[index].attributes.name.search('Response') > -1
          ) {
            let method = elements[index].attributes.name.replace('Response', '');
            if (!this.methodsNotAdd.has(method) && !methods[method]) {
              let urlMethod = `${server}/QPMCalcServer/api/${reports[i].category}/${method}.cfm`;

              let result = await fetch(urlMethod, {
                headers: {
                  accept:
                    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
                  'accept-language': 'en-US,en;q=0.9',
                  'cache-control': 'no-cache',
                  pragma: 'no-cache',
                  'upgrade-insecure-requests': '1',
                  cookie:
                    'cfid=80a70d41-de36-46f5-8266-9270b6253677; cftoken=0; CFAUTHORIZATION_QPMCALCSERVER=YWRtaW5fbGluMDAxAWtvb25hMDAxAVNpdGVNYW5hZ2Vy; __utmc=209317463; __utmz=209317463.1615232698.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); __utma=209317463.2038005220.1615232698.1615355440.1615876653.3',
                },
                referrerPolicy: 'no-referrer-when-downgrade',
                body: null,
                method: 'GET',
                mode: 'cors',
                credentials: 'include',
              }).then(t => t);

              if (result.status != 200)
                this.methodsNotAdd.add({
                  method,
                  category: reports[i].category,
                  status: result.status == 200,
                });
            }
          }
        }
      }

      return this.methodsNotAdd;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  // funcion que se encarga de validar
  // los datos relacionados los methods y solicitudes a realizar
  fetch: async function () {
    try {
      // validate information setting and return settings
      const { username, password, server } = this.valide();
      let { uri, method, responseType } = methods[this._call.method];
      let { params } = this._call;
      uri = `${server}${uri}`;

      // request to api
      let response = await fetchSync(uri, {
        method,
        body: params,
        auth: { username, password },
        type: !responseType ? 'json' : responseType,
      })
        .then(t => {
          return !t ? null : t.response;
        })
        .catch(error => {
          throw error;
        });

      return response;
    } catch (error) {
      console.error(error);
      throw error;
      return false;
    }
  },
});

module.exports = { QPM };
