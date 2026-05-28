const SDMProductionLinePhasesModel = require('../models/sDMProductionLinePhases.model');
exports.deleteSDMProductionLinePhases = async (id) => { const item = await SDMProductionLinePhasesModel.deleteSDMProductionLinePhases(id); return { item }; };
