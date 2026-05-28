const SDMProductionLineTemplatesModel = require('../models/sDMProductionLineTemplates.model');
exports.createSDMProductionLineTemplates = async (data) => { const item = await SDMProductionLineTemplatesModel.createSDMProductionLineTemplates(data); return { item }; };
