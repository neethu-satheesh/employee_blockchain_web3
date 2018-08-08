console.log("EmployeeExperienceContractMethods");

let contract = require('./EmpexSmartContract');
let apiRequestFunc = require('./mainApp');

console.log('EmpexContract');

let empexContractObjects = contract.empexContract();
let empexContract = empexContractObjects.empexContract;
let transactionParams = empexContractObjects.transactionParams;

module.exports = {
  createExperience: function (experience) {
    console.log('In createExperience Method........');
    let transactionHash = empexContract.createExperience(
      experience.employeeEmail,
      experience.organizationName,
      experience.startDate,
      experience.endDate,
      experience.isCurrentlyEmployed,
      experience.designation,
      experience.confirmedDate,
      experience.confirmedPersonName,
      experience.confirmationNote,
      transactionParams
    );
    console.log('transactionHash.....');
    console.log(transactionHash);

    let data = {
      employee_email: experience.email,
      organization_name: experience.organizationName,
      start_date: experience.startDate
    }

    apiRequestFunc.apiRequest({
      post_type: 'Create Employee Experience',
      email: experience.employeeEmail,
      blockchain_response: { transactionHash: transactionHash, data: data }
    });
  },

  retrieveExperience: function (experience) {
    console.log('In retrieveExperience Method........');
    console.log(experience);
    console.log(experience.email);
    let value = empexContract.retrieveExperience.call(
      experience.email,
      experience.startDate,
      experience.endDate,
      experience.isCurrentlyEmployed,
      transactionParams
     );

    let data = {
      employee_email: experience.email,
      organization_name: value[0],
      start_date: value[1],
      end_date: value[2],
      is_currently_employed: value[3],
      designation: value[4],
      confirmed_person_name: value[5],
      confirmation_note: value[6]
    }

    console.log('data');
    console.log(data);

    apiRequestFunc.apiRequest({
      post_type: 'Retrieve Employee Experience',
      employee_email: experience.employee_email,
      blockchain_response: { data: data }
    });
  }
}
