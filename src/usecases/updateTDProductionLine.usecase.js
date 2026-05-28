const TDProductionLineModel = require('../models/tDProductionLine.model');
exports.updateTDProductionLine = async (id, data) => { const item = await TDProductionLineModel.updateTDProductionLine(id, data); return { item }; };
