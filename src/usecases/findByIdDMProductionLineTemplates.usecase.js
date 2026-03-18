const DMProductionLineTemplatesModel = require('../models/dMProductionLineTemplates.model');
exports.findByIdDMProductionLineTemplates = async (id) => { const item = await DMProductionLineTemplatesModel.findByIdDMProductionLineTemplates(id); return { item }; };
