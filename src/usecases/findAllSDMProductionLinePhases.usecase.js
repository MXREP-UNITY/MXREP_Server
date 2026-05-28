const SDMProductionLinePhasesModel = require('../models/sDMProductionLinePhases.model');
exports.findAllSDMProductionLinePhases = async () => { const items = await SDMProductionLinePhasesModel.findAllSDMProductionLinePhases(); return { items }; };
