const DMProductionLineTemplatesModel = require('../models/dMProductionLineTemplates.model');
exports.findAllDMProductionLineTemplatess = async () => { const items = await DMProductionLineTemplatesModel.findAllDMProductionLineTemplatess(); return { items }; };
