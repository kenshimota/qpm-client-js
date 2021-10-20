const fetch = require('node-fetch');
const queue = require('./queue');
const xml = require('xml-js');
const nodes = queue.Queue();

/* funcion que controla las solicitudes */
function sleep(ms) {
  return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}

/* estaleciendo los parametros principales para el
enviar los parametros de forma que podamos enivarlos al servidor
comodamente  */
const getParams = function (params, prefix) {
  if (!params) throw 'not arguments';

  var body = '';
  var string = '';
  for (var index in params) {
    // procesando parametros
    switch (typeof params[index]) {
      case 'undefined':
        string = index + '=';
        break;
      case 'object':
        string = index + '=' + encodeURIComponent(JSON.stringify(params[index]));
        break;
      default:
        string =
          prefix != null ? prefix + '[' + index + ']' + params[index] : index + '=' + params[index];
        break;
    }

    body += body.length === 0 ? string : '&' + string;
  }
  return body;
};

/* funcion que se encarga de mostrar el reporte de un error 500 */
function reportError(data) {
  var str = data.search('id="-lucee-err"') + 180;
  var exit = '</td>';
  var count = 0;
  var output = '';

  for (var i = str; count < exit.length; i++) {
    output += data[i];
    count = exit[count] == data[i] ? count + 1 : 0;
  }

  return output.slice(0, output.length - exit.length);
}

/* funcion que se encarga de enviar los parametros obtenidos
a cualquier ubicacion realizando el ajax tan solicitado */
async function fetchSync(url, options = {}) {
  try {
    var key = `${nodes.size()} - ${url}`;
    nodes.add({ key });
    var aux = nodes.front();

    // realizando la espera 10ms evaluando si la llamada fue realizada
    while (!nodes.empty() && aux.key != key) {
      await sleep(10);
      aux = nodes.front();
    }

    if (options.headers == null) options.headers = { Accept: 'application/json' };
    else options['Accept'] = 'application/json';

    // enviando la autorizacion de cabezera
    if (options.auth != null) {
      options.headers['j_username'] = options.auth.username;
      options.headers['j_password'] = options.auth.password;
    }

    // permite crear parametros en forma de json a procesador
    if (options.body && options.method == 'POST') options.body = getParams(options.body);

    if (options.body && options.method == 'GET') {
      url += '&' + getParams(options.body);
      delete options.body;
    }

    // var start = Date.now();
    if (!globalThis.window)
      console.log('\x1b[36m%s\x1b[0m', `Solicitando Datos de [${options.method}] -> ${url}`);

    var start = Date.now();

    // realizando solicitud de datos desde un fetch determinado
    var result = await fetch(url, options)
      .then(async response => {
        try {
          var data = await response.text();
          console.log(data);
          var end = Date.now();

          // notificando que ha ocurrido todo un error
          if (response.status == 500) throw { error: reportError(data) };

          // retorna el procesamiento de datos
          if (!globalThis.window)
            console.log(
              '\x1b[36m%s\x1b[0m',
              `${response.status} - [${options.method}] -> ${url} obtuvo un respuesta exitosa en ${
                end - start
              }ms\n\n`
            );

          // retornando datos en json
          switch (options.type) {
            case 'json':
              data = JSON.parse(JSON.parse(data));
              if (!data.error == false) throw data.errormessage;
              break;
            case 'xml':
              data = JSON.parse(xml.xml2json(data));
              break;
          }

          return { response: data, status: response.status, headers: response.headers };
        } catch (error) {
          throw error;
        }
      })
      .catch(error => {
        throw error;
      });

    return result;
  } catch (error) {
    console.error(error);
    !globalThis.window
      ? console.log('\x1b[31m', `[${options.method}] -> ${url} obtuvo un respuesta fallida\n\n`)
      : console.log(
          `%c [${options.method}] -> ${url} obtuvo un respuesta fallida\n\n`,
          'color: red;'
        );
    throw error;
  } finally {
    nodes.pop();
  }
}

module.exports = { getParams, fetchSync };
