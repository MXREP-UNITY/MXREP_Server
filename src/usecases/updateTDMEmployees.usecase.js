const TDMEmployeesModel = require('../models/tDMEmployees.model');
exports.updateTDMEmployees = async (id, data) => { const item = await TDMEmployeesModel.updateTDMEmployees(id, data); return { item }; };
