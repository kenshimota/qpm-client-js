const { fetchSync } = require("./fetchSync");
const { methods, reports } = require("./qpm-methods");

// librery client to QPM API
const QPM = (config) => ({

    // details the authentication and server
    _config: config,
    methods,
    methodsNotAdd: new Set(), // container methods not documentation
    _call: { method: null, params: null },

    // valid setting QPM Client
    valide: function () {
        let config = this._config;
        if (!config)
            throw "Error not had setting username and server";
        if (!config.username)
            throw "Invalidate username";
        if (!config.password)
            throw "Invalidate password";
        if (!config.server)
            throw "Invalidate server";
        return config;
    },

    // set method and params for call QPM API
    method: function (method, params = null) {
        try {
            if (!methods[method])
                throw "Method not Found, verify name method";

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
            for (var i = 0; i < reports.length; i++) {
                uri = `${server}${reports[i]}`;
                response = await fetchSync(uri, { method: "GET", auth: { username, password }, type: "xml", }).then((t) => {
                    return (!t ? null : t.response);
                }).catch((error) => {
                    throw error;
                });

                // evaluando los methodos registrados con los que tengo localmente
                elements = response.elements[0].elements;
                for (let index in elements) {

                    if (elements[index].attributes && elements[index].attributes.name && elements[index].attributes.name.search("Response") > (-1)) {
                        let method = elements[index].attributes.name.replace("Response", "");
                        this.methodsNotAdd.has(method) || methods[method] ? null : this.methodsNotAdd.add(method);
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
    fetch: async function (type = "json") {
        try {
            // validate information setting and return settings
            const { username, password, server } = this.valide();
            let { uri, method } = methods[this._call.method];
            let { params } = this._call;
            uri = `${server}${uri}`;


            // request to api
            let response = await fetchSync(uri, {
                method,
                body: params,
                auth: { username, password },
                type,
            }).then((t) => {
                return (!t ? null : t.response);
            }).catch((error) => {
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
