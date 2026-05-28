const SDMProductionLineTemplatesModel = require('../models/sDMProductionLineTemplates.model');
exports.updateSDMProductionLineTemplates = async (id, data) => { const item = await SDMProductionLineTemplatesModel.updateSDMProductionLineTemplates(id, data); return { item }; };
