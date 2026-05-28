const TDProductionLineModel = require('../models/tDProductionLine.model');
exports.findAllTDProductionLines = async () => { const items = await TDProductionLineModel.findAllTDProductionLines(); return { items }; };
