const SDMProductionLinePhasesModel = require('../models/sDMProductionLinePhases.model');
exports.createSDMProductionLinePhases = async (data) => { const item = await SDMProductionLinePhasesModel.createSDMProductionLinePhases(data); return { item }; };
