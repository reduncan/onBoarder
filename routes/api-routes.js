const RestfulAPI = require('./RestClass');
const db = require('../models');

module.exports = function (app) {

  const preEmployees = new RestfulAPI('preEmployees', app, db.PreEmployee);
  preEmployees.find();
  preEmployees.create();
  preEmployees.delete('id');
  preEmployees.update('id');

  const employees = new RestfulAPI('employees', app, db.Employee);
  employees.find();
  employees.create();
  employees.delete('id');
  employees.update('id');

  const documents = new RestfulAPI('documents', app, db.Documents);
  documents.find();
  documents.create();
  documents.delete('id');
  documents.update('id');
};