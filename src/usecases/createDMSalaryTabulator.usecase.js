const DMSalaryTabulatorModel = require('../models/dMSalaryTabulator.model');
exports.createDMSalaryTabulator = async (data) => { const item = await DMSalaryTabulatorModel.createDMSalaryTabulator(data); return { item }; };
