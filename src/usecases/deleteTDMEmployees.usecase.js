const TDMEmployeesModel = require('../models/tDMEmployees.model');
exports.deleteTDMEmployees = async (id) => { const item = await TDMEmployeesModel.deleteTDMEmployees(id); return { item }; };
