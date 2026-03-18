const SDMProductionLinePhasesModel = require('../models/sDMProductionLinePhases.model');
exports.updateSDMProductionLinePhases = async (id, data) => { const item = await SDMProductionLinePhasesModel.updateSDMProductionLinePhases(id, data); return { item }; };
