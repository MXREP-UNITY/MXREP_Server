const SDMSalaryTabulatorModel = require('../models/sDMSalaryTabulator.model');
exports.updateSDMSalaryTabulator = async (id, data) => { const item = await SDMSalaryTabulatorModel.updateSDMSalaryTabulator(id, data); return { item }; };
