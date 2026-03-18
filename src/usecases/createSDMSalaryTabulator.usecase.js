const SDMSalaryTabulatorModel = require('../models/sDMSalaryTabulator.model');
exports.createSDMSalaryTabulator = async (data) => { const item = await SDMSalaryTabulatorModel.createSDMSalaryTabulator(data); return { item }; };
