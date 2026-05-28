const SDMSalaryTabulatorModel = require('../models/sDMSalaryTabulator.model');
exports.findAllSDMSalaryTabulators = async () => { const items = await SDMSalaryTabulatorModel.findAllSDMSalaryTabulators(); return { items }; };
