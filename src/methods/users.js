const baseurl = '/QPMCalcServer/cfc/QPMUserService.cfc?wsdl&method=';

const users = {
  dumpUser: {
    methods: 'POST',
    uri: baseurl + 'dumpUser',
  },

  deleteUsers: {
    method: 'POST',
    uri: baseurl + 'deleteUsers',
  },

  getAll: {
    method: 'POST',
    uri: baseurl + 'getAll',
  },

  getSessionData: {
    method: 'POST',
    uri: baseurl + 'getSessionData',
  },

  logOutServer: {
    method: 'POST',
    uri: baseurl + 'logOutServer',
  },

  logInServer: {
    method: 'POST',
    uri: baseurl + 'logInServer',
  },

  logUserOperation: {
    method: 'POST',
    uri: baseurl + 'logUserOperation',
  },

  queryUserActivity: {
    method: 'POST',
    uri: baseurl + 'queryUserActivity',
  },
};

module.exports = users;
