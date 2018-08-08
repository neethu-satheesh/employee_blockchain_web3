var Web3 = require('web3');
var abi = require('./constants/EmpexContractAbi');

console.log('EmpexSmartContract.js ..................');
module.exports = {
  empexContract: function () {
    console.log('In empexContract function');
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
    } else {
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }

    web3.eth.defaultAccount = web3.eth.accounts[0];
    var employeeExperienceContract = web3.eth.contract(abi.EmpexAbi);

    var empexContract = employeeExperienceContract.at('0xadabbba5fc3bc33bd9913dcb77b9d89308645915');
    var transactionParams = { from: web3.eth.defaultAccount, gas: 3000000 }

    return {
      empexContract: empexContract,
      web3: web3,
      transactionParams: transactionParams
    };
  }
}
