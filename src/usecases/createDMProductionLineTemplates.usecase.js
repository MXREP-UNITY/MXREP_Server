const DMProductionLineTemplatesModel = require('../models/dMProductionLineTemplates.model');
exports.createDMProductionLineTemplates = async (data) => { const item = await DMProductionLineTemplatesModel.createDMProductionLineTemplates(data); return { item }; };
