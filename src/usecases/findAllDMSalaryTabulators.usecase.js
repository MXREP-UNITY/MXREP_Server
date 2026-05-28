const DMSalaryTabulatorModel = require('../models/dMSalaryTabulator.model');
exports.findAllDMSalaryTabulators = async () => { const items = await DMSalaryTabulatorModel.findAllDMSalaryTabulators(); return { items }; };
