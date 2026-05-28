const DMSalaryTabulatorModel = require('../models/dMSalaryTabulator.model');
exports.deleteDMSalaryTabulator = async (id) => { const item = await DMSalaryTabulatorModel.deleteDMSalaryTabulator(id); return { item }; };
