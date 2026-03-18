const TDProductionLineModel = require('../models/tDProductionLine.model');
exports.createTDProductionLine = async (data) => { const item = await TDProductionLineModel.createTDProductionLine(data); return { item }; };
