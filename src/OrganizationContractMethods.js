console.log("OrganizationContractMethods");

let contract = require('./EmpexSmartContract');
let apiRequestFunc = require('./mainApp');

console.log('EmpexContract');

let empexContractObjects = contract.empexContract();
let empexContract = empexContractObjects.empexContract;
let transactionParams = empexContractObjects.transactionParams;

module.exports = {
  createOrganization: function (organization) {
    console.log('In createOrganization Method........');
    let transactionHash = empexContract.createOrganization(
      organization.name,
      organization.registrationId,
      organization.email,
      organization.phoneNumber,
      organization.address,
      transactionParams
    );

    console.log('transactionHash.....');
    console.log(transactionHash);

    apiRequestFunc.apiRequest({
      post_type: 'Create Organization',
      email: organization.email,
      blockchain_response: { transactionHash: transactionHash, data: {} }
    });
  },

  getOrganization: function (organization) {
    console.log('In getOrganization Method........');
    console.log(organization);
    console.log(organization.name);
    let value = empexContract.getOrganization(organization.name, transactionParams);
    console.log('value');
    console.log(value);

    let data = {
      name: value[1],
      registration_id: value[2],
      email: value[3],
      phone_number: value[4],
      address: value[5]
    }

    console.log('data');
    console.log(data);

    apiRequestFunc.apiRequest({
      post_type: 'Retrieve Organization',
      email: data.email,
      blockchain_response: { data: data }
    });

  }
}
