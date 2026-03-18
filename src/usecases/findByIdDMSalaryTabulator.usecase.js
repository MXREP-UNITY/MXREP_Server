const DMSalaryTabulatorModel = require('../models/dMSalaryTabulator.model');
exports.findByIdDMSalaryTabulator = async (id) => { const item = await DMSalaryTabulatorModel.findByIdDMSalaryTabulator(id); return { item }; };
