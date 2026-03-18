const TDProductionLineModel = require('../models/tDProductionLine.model');
exports.findByIdTDProductionLine = async (id) => { const item = await TDProductionLineModel.findByIdTDProductionLine(id); return { item }; };
