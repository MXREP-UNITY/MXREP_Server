const DMProductionLinePhasesModel = require('../models/dMProductionLinePhases.model');
exports.findAllDMProductionLinePhases = async () => { const items = await DMProductionLinePhasesModel.findAllDMProductionLinePhases(); return { items }; };
