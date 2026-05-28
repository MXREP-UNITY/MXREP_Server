const TDMEmployeesModel = require('../models/tDMEmployees.model');
exports.createTDMEmployees = async (data) => { const item = await TDMEmployeesModel.createTDMEmployees(data); return { item }; };
