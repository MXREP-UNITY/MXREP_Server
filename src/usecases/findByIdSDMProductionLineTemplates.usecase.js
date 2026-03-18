const SDMProductionLineTemplatesModel = require('../models/sDMProductionLineTemplates.model');
exports.findByIdSDMProductionLineTemplates = async (id) => { const item = await SDMProductionLineTemplatesModel.findByIdSDMProductionLineTemplates(id); return { item }; };
