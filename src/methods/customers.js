const baseurl = '/QPMCalcServer/cfc/VROCustomerService.cfc?method=';

const customers = {
  addEditCustomer: {
    method: 'POST',
    uri: baseurl + 'addEditCustomer',
  },

  deleteCustomer: {
    method: 'POST',
    uri: baseurl + 'deleteCustomer',
  },

  queryCustomersFromShipItems: {
    method: 'POST',
    uri: '/QPMCalcServer/cfc/QPMCustomerService.cfc?wsdl&method=queryCustomersFromShipItems',
  },

  searchCustomers: {
    method: 'GET',
    uri: baseurl + 'searchCustomers',
  },
};

module.exports = customers;
