const SDMProductionLineTemplatesModel = require('../models/sDMProductionLineTemplates.model');
exports.findAllSDMProductionLineTemplatess = async () => { const items = await SDMProductionLineTemplatesModel.findAllSDMProductionLineTemplatess(); return { items }; };
