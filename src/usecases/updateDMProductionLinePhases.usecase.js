const DMProductionLinePhasesModel = require('../models/dMProductionLinePhases.model');
exports.updateDMProductionLinePhases = async (id, data) => { const item = await DMProductionLinePhasesModel.updateDMProductionLinePhases(id, data); return { item }; };
