const TDMEmployeesModel = require('../models/tDMEmployees.model');
exports.findByIdTDMEmployees = async (id) => { const item = await TDMEmployeesModel.findByIdTDMEmployees(id); return { item }; };
