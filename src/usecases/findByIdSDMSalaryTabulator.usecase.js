const SDMSalaryTabulatorModel = require('../models/sDMSalaryTabulator.model');
exports.findByIdSDMSalaryTabulator = async (id) => { const item = await SDMSalaryTabulatorModel.findByIdSDMSalaryTabulator(id); return { item }; };
