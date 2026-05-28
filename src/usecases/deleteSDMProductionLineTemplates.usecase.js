const SDMProductionLineTemplatesModel = require('../models/sDMProductionLineTemplates.model');
exports.deleteSDMProductionLineTemplates = async (id) => { const item = await SDMProductionLineTemplatesModel.deleteSDMProductionLineTemplates(id); return { item }; };
