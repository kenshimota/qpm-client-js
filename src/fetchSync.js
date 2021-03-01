const fetch = require('node-fetch');

/* estaleciendo los parametros principales para el
enviar los parametros de forma que podamos enivarlos al servidor
comodamente  */
const getParams = (params = {}, prefix = null) => {
    let body = "";
    let string = "";
    for (var index in params) {
        
        // procesando parametros
        switch (typeof params[index]) {
            case "undefined": string = `${index}=`; break;
            case "object": string = `${index}=${encodeURIComponent( JSON.stringify(params[index]) )}`; break;
            default: string = prefix != null ? `${prefix}[${index}]=${params[index]}` : `${index}=${params[index]}`; break;
        }

        body += body.length === 0 ? string : `&${string}`;
    }
    return body;
};

/* funcion que se encarga de enviar los parametros obtenidos 
a cualquier ubicacion realizando el ajax tan solicitado */
const fetchSync = async (url, options = {}) => {
    try {
        options.headers = options.headers == null ? { "Accept": "application/json" } : { ...options.headers, "Accept": "application/json" };

        // enviando la autorizacion de cabezera 
        if (options.auth != null)
            options.headers = { ...options.headers, "j_username": options.auth.username, "j_password": options.auth.password };

        // permite crear parametros en forma de json a procesador
        if (typeof options.body == "object" && options.body != null && options.method == "POST")
            options.body = getParams(options.body);
        
        console.log( options, "\n\n");

        // let start = Date.now();
        // console.log(`%c Solicitando Datos de [${options.method}] -> ${url} `, "color: #23b;");

        // realizando solicitud de datos desde un fetch determinado
        let result = await fetch(url, options).then(async (response) =>{
            try {
                // let end = Date.now();

                // notificando que ha ocurrido todo un error
                // del lado del servidor
                if (((response.status >= 400 && response.status != 404 && response.status < 500) || response.status <= 200))
                    throw await response.json().then((r) => {
                        return r;
                    }).catch((error) => {
                        throw error;
                    });
                else if( response.status == 404 )
                    throw  {message: "Not Found Server"};
                else if( response.status == 500 )
                    throw { message: response.text() };

                // console.log(`%c ${response.status} - [${options.method}] -> ${url} obtuvo un respuesta exitosa en ${(end - start)}ms `, "color: green;");

                // retorna el procesamiento de datos
                return {
                    response: response.status == 204 ? null : await response.json().then((r) => r),
                    status: response.status
                };
            } catch (error) {
                throw error;
            }
        }).catch((error) => {
            throw error;
        });

        return result;
    } catch (error) {
        console.error(error);
        console.log(`%c Error - [${options.method}] -> ${url} obtuvo un respuesta fallida `, "color: red;");
        throw error;
        return { status: 422, response: error };
    } finally {

    }
};


module.exports = {getParams, fetchSync};