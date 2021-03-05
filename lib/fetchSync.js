const fetch = require('node-fetch');
const { Queue } = require("./queue");
const { xml2json } = require("xml-js");
const nodes = Queue();

/* funcion que controla las solicitudes */
const sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

/* estaleciendo los parametros principales para el
enviar los parametros de forma que podamos enivarlos al servidor
comodamente  */
const getParams = (params = {}, prefix = null) => {
    let body = "";
    let string = "";
    for (var index in params) {

        // procesando parametros
        switch (typeof params[index]) {
            case "undefined":
                string = `${index}=`;break;
            case "object":
                string = `${index}=${encodeURIComponent(JSON.stringify(params[index]))}`;break;
            default:
                string = prefix != null ? `${prefix}[${index}]=${params[index]}` : `${index}=${params[index]}`;break;
        }

        body += body.length === 0 ? string : `&${string}`;
    }
    return body;
};

/* funcion que se encarga de mostrar el reporte de un error 500 */
const reportError = function (data) {
    let str = data.search('id="-lucee-err"') + 180;
    let exit = "</td>";
    let count = 0;
    let output = "";

    for (let i = str; count < exit.length; i++) {
        output += data[i];
        count = exit[count] == data[i] ? count + 1 : 0;
    }

    return output.slice(0, output.length - exit.length);
};

/* funcion que se encarga de enviar los parametros obtenidos 
a cualquier ubicacion realizando el ajax tan solicitado */
const fetchSync = async (url, options = {}) => {
    try {

        if (options.headers == null) options.headers = { "Accept": "application/json" };else options["Accept"] = "application/json";

        // enviando la autorizacion de cabezera
        if (options.auth != null) {
            options.headers["j_username"] = options.auth.username;
            options.headers["j_password"] = options.auth.password;
        };

        // permite crear parametros en forma de json a procesador
        if (typeof options.body == "object" && options.body != null && options.method == "POST") options.body = getParams(options.body);

        // let start = Date.now();
        !globalThis.window ? console.log("\x1b[36m%s\x1b[0m", `Solicitando Datos de [${options.method}] -> ${url}`) : console.log(`%c Solicitando Datos de [${options.method}] -> ${url}`, "color: #23b;");
        console.log(options, "\n\n");

        let key = `${nodes.size()} - ${url}`;
        nodes.add({ key });
        let aux = nodes.front();

        // realizando la espera 10ms evaluando si la llamada fue realizada
        while (!nodes.empty() && aux.key != key) {
            await sleep(10);
            aux = nodes.front();
        }

        // realizando solicitud de datos desde un fetch determinado
        let result = await fetch(url, options).then(async response => {
            try {
                let data = await response.text();

                // let end = Date.now();

                // notificando que ha ocurrido todo un error
                if (response.status == 500) throw { error: reportError(data) };

                // console.log(`%c ${response.status} - [${options.method}] -> ${url} obtuvo un respuesta exitosa en ${(end - start)}ms `, "color: green;");
                // retorna el procesamiento de datos

                // retornando datos en json
                switch (options.type) {
                    case "json":
                        data = JSON.parse(JSON.parse(data));
                        if (!data.error == false) throw data.errormessage;
                        break;
                    case "xml":
                        data = JSON.parse(xml2json(data));break;
                }

                return { response: data, status: response.status };
            } catch (error) {
                throw error;
            }
        }).catch(error => {
            throw error;
        });

        return result;
    } catch (error) {
        console.error(error);
        throw error;
        return { status: 422, response: error };
    } finally {
        nodes.pop();
    }
};

module.exports = { getParams, fetchSync };