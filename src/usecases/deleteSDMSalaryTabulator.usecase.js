const SDMSalaryTabulatorModel = require('../models/sDMSalaryTabulator.model');
exports.deleteSDMSalaryTabulator = async (id) => { const item = await SDMSalaryTabulatorModel.deleteSDMSalaryTabulator(id); return { item }; };
