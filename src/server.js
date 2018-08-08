var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var employeeContractMethods = require('./EmployeeContractMethods');
var organizationContractMethods = require('./OrganizationContractMethods');
var employeeExperienceContractMethods = require('./EmployeeExperienceContractMethods');

app.use(bodyParser.json({ type: 'application/json' }));

app.post('/web3/createEmployee', function (req, res) {
  console.log('createEmployee');
  console.log('req.body');
  console.log(req.body);
  employeeContractMethods.createEmployee(req.body.employee);
  res.send(req.body.employee);
});

app.post('/web3/getEmployee', function (req, res) {
  console.log('getEmployee');
  console.log('req.body');
  console.log(req.body);
  employeeContractMethods.getEmployee(req.body.employee);
  res.send(req.body.employee);
});

app.post('/web3/createOrganization', function (req, res) {
  console.log('createOrganization');
  console.log('req.body');
  console.log(req.body);
  organizationContractMethods.createOrganization(req.body.organization);
  res.send(req.body.organization);
});

app.post('/web3/getOrganization', function (req, res) {
  console.log('getOrganization');
  console.log('req.body');
  console.log(req.body);
  organizationContractMethods.getOrganization(req.body.organization);
  res.send(req.body.organization);
});

app.post('/web3/createEmployeeExperience', function (req, res) {
  console.log('createEmployeeExperience');
  console.log('req.body');
  console.log(req.body);
  employeeExperienceContractMethods.createExperience(req.body.employeeExperience);
  res.send(req.body.employeeExperience);
});

app.post('/web3/retrieveEmployeeExperience', function (req, res) {
  console.log('retrieveEmployeeExperience');
  console.log('req.body');
  console.log(req.body);
  employeeExperienceContractMethods.retrieveExperience(req.body.employeeExperience);
  res.send(req.body.employeeExperience);
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
