const TDMEmployeesModel = require('../models/tDMEmployees.model');
exports.findAllTDMEmployeess = async () => { const items = await TDMEmployeesModel.findAllTDMEmployeess(); return { items }; };
