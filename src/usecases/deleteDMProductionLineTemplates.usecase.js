const DMProductionLineTemplatesModel = require('../models/dMProductionLineTemplates.model');
exports.deleteDMProductionLineTemplates = async (id) => { const item = await DMProductionLineTemplatesModel.deleteDMProductionLineTemplates(id); return { item }; };
