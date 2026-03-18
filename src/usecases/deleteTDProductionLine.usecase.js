const TDProductionLineModel = require('../models/tDProductionLine.model');
exports.deleteTDProductionLine = async (id) => { const item = await TDProductionLineModel.deleteTDProductionLine(id); return { item }; };
