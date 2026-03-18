const TDActivatedProductionLineModel = require('../models/tDActivatedProductionLine.model');
exports.findAllTDActivatedProductionLines = async () => { const items = await TDActivatedProductionLineModel.findAllTDActivatedProductionLines(); return { items }; };
