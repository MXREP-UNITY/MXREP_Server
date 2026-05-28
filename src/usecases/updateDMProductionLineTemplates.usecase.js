const DMProductionLineTemplatesModel = require('../models/dMProductionLineTemplates.model');
exports.updateDMProductionLineTemplates = async (id, data) => { const item = await DMProductionLineTemplatesModel.updateDMProductionLineTemplates(id, data); return { item }; };
