const DMProductionLinePhasesModel = require('../models/dMProductionLinePhases.model');
exports.deleteDMProductionLinePhases = async (id) => { const item = await DMProductionLinePhasesModel.deleteDMProductionLinePhases(id); return { item }; };
