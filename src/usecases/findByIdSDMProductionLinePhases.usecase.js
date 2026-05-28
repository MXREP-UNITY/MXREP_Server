const SDMProductionLinePhasesModel = require('../models/sDMProductionLinePhases.model');
exports.findByIdSDMProductionLinePhases = async (id) => { const item = await SDMProductionLinePhasesModel.findByIdSDMProductionLinePhases(id); return { item }; };
