console.log("EmployeeContractMethods");

let contract = require('./EmpexSmartContract');
let apiRequestFunc = require('./mainApp');

console.log('EmpexContract');

let empexContractObjects = contract.empexContract();
let empexContract = empexContractObjects.empexContract;
let transactionParams = empexContractObjects.transactionParams;

module.exports = {
  createEmployee: function (employee) {
    console.log('In createEmployee Method........');
    let transactionHash = empexContract.createEmployee(
      employee.name,
      employee.email,
      employee.phoneNumber,
      employee.address,
      employee.careerStartDate,
      transactionParams
    );
    console.log('transactionHash.....');
    console.log(transactionHash);

    apiRequestFunc.apiRequest({
      post_type: 'Create Employee',
      email: employee.email,
      blockchain_response: { transactionHash: transactionHash, data: {} }
    });
  },

  getEmployee: function (employee) {
    console.log('In getEmployee Method........');
    console.log(employee);
    console.log(employee.email);
    let value = empexContract.getEmployee(employee.email, transactionParams);

    console.log('value');
    console.log(value);

    let data = {
      name: value[1],
      email: value[2],
      phone_number: value[3],
      address: value[4],
      career_start_date: value[5],
      verified: value[6]
    }

    console.log('data');
    console.log(data);

    apiRequestFunc.apiRequest({
      post_type: 'Retrieve Employee',
      email: data.email,
      blockchain_response: { data: data }
    });
  }
}
