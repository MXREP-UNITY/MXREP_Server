const DMSalaryTabulatorModel = require('../models/dMSalaryTabulator.model');
exports.updateDMSalaryTabulator = async (id, data) => { const item = await DMSalaryTabulatorModel.updateDMSalaryTabulator(id, data); return { item }; };
